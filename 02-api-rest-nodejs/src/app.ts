import fastify from 'fastify'
import cookie from '@fastify/cookie'

import { transactionsRoutes } from './routes/transactions'

export const app = fastify()

// Registra o plugin
// A ordem dos plugins importa
app.register(cookie)

// hook global
/* app.addHook('preHandler', async (request, reply) => {
  console.log(`[${request.method}] ${request.url}`)
}) */

app.register(transactionsRoutes, {
  prefix: 'transactions',
})
