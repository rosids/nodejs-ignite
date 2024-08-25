import { FastifyReply, FastifyRequest } from 'fastify'

export async function refresh(request: FastifyRequest, reply: FastifyReply) {
  await request.jwtVerify({ onlyCookie: true })

  const token = await reply.jwtSign(
    {},
    {
      sign: {
        sub: request.user.sub,
      },
    },
  )

  const refreshToken = await reply.jwtSign(
    {},
    {
      sign: {
        sub: request.user.sub,
        expiresIn: '7d', // 7 dias
      },
    },
  )

  return reply
    .setCookie('refreshToken', refreshToken, {
      path: '/', // qual rota do backend tem acesso ao cookie. Colocando "/" todo o backend tem acesso
      secure: true, // define que o cookie será encriptado através do HTTPS. Caso não funcione no localhost é só comentar esta linha
      sameSite: true, // só vai ser acessível dentro do mesmo domínio, ou seja, do mesmo site
      httpOnly: true, // só vai ser conseguir ser acessado pelo backend e não pelo frontend
    })
    .status(200)
    .send({
      token,
    })
}
