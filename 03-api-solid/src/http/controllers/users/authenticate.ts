import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'
import { InvalidCredentialsError } from '@/use-cases/errors/invalid-credentials-error'
import { makeAuthenticateUseCase } from '@/use-cases/factories/make-authenticate-use-case'

export async function authenticate(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const authenticateBodySchema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
  })

  const { email, password } = authenticateBodySchema.parse(request.body)

  try {
    // A letra D do SOLID - D - Dependency Inversion Principle (Inversão de dependência)
    const authenticateUseCase = makeAuthenticateUseCase()

    const { user } = await authenticateUseCase.execute({
      email,
      password,
    })

    const token = await reply.jwtSign(
      {},
      {
        sign: {
          sub: user.id,
        },
      },
    )

    const refreshToken = await reply.jwtSign(
      {},
      {
        sign: {
          sub: user.id,
          expiresIn: '7d', // 7 dias
        },
      },
    )

    return reply
      .setCookie('refreshToken', refreshToken, {
        path: '/', // qual rota do backend tem acesso ao cookie. Colocando "/" todo o backend tem acesso
        secure: true, // define que o cookie será encriptado através do HTTPS
        sameSite: true, // só vai ser acessível dentro do mesmo domínio, ou seja, do mesmo site
        httpOnly: true, // só vai ser conseguir ser acessado pelo backend e não pelo frontend
      })
      .status(200)
      .send({
        token,
      })
  } catch (err) {
    if (err instanceof InvalidCredentialsError) {
      return reply.status(400).send({ message: err.message })
    }

    throw err
  }
}
