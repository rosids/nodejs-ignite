import { FastifyInstance } from 'fastify'

import { verifyJWT } from '@/http/middlewares/verify-jwt'

export async function gymsRoutes(app: FastifyInstance) {
  // todas rotas abaixo do addHook irão chamar o verifyJWT
  // hook no fastify equivale ao middleware
  app.addHook('onRequest', verifyJWT)
}
