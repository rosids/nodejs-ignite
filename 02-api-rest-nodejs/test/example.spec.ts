import { afterAll, beforeAll, test } from 'vitest'
import request from 'supertest'
import { app } from '../src/app'

// beforeAll → executa uma vez antes de todos os testes
// afterAll → executa uma vez depois de todos os testes
// beforeEach → executa antes da execução de cada teste
// afterEach → executa depois da execução de cada teste

beforeAll(async () => {
  // aguarda o aplicação estar pronta
  await app.ready()
})

afterAll(async () => {
  // fecha a aplicação, ou seja, remove da memória após execução de todos os testes
  await app.close()
})

test('user can create a new transaction', async () => {
  await request(app.server)
    .post('/transactions')
    .send({
      title: 'New transaction',
      amount: 5000,
      type: 'credit',
    })
    .expect(201)
})
