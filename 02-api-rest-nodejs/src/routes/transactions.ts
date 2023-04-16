// import crypto from 'node:crypto'
import { FastifyInstance } from 'fastify'
import { knex } from '../database'

// PLUGIN DO FASTIFY
// TODO PLUGIN PRECISA SER ASSÍNCRONO(ASYNC)
export async function transactionsRoutes(app: FastifyInstance) {
  app.get('/hello', async () => {
    // const transaction = await knex('transactions')
    //   .insert({
    //     id: crypto.randomUUID(),
    //     title: 'Transação de teste',
    //     amount: 1000,
    //   })
    //   .returning('*')
    // return transaction
    const transactions = await knex('transactions')
      .where('amount', 1000)
      .select('*')
    return transactions
  })
}
