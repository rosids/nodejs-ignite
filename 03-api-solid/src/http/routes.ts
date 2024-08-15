import { FastifyInstance } from 'fastify'
import { authenticate } from './controllers/authenticate'
import { profile } from './controllers/profile'
import { register } from './controllers/register'

export async function appRoutes(app: FastifyInstance) {
  app.get('/ping', (req, reply) => reply.status(200).send('Pong!'))
  app.post('/users', register)
  app.post('/sessions', authenticate)

  /** Authenticated **/
  app.get('/me', profile)
}
