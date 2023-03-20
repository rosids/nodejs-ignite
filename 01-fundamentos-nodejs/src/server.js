import http from 'node:http' // utiliza-se o node: para informar que é um módulo interno do node

import { json } from './middlewares/json.js'
import { routes } from './routes.js'
import { extractQueryParams } from './utils/extract-query-params.js'

/* 
stateful -> dados salvos em memória, ao reiniciar o servidor os dados são perdidos.
stateless -> dados persistentes, ou seja, salvos em fontes externas.
  Ex: banco de dados ou arquivo de texto.

3 formas de quem está consumindo a API enviar as informações para o backend
Query Parameters: URL Stateful => enviado na própria URL
  Utilizado em filtros, paginação, não obrigatórios
  http:localhost:3333/users?userId=1
Route Parameters: Identificação de recurso. Parâmetro na rota não nomeado
  GET http:localhost:3333/users/1
  DELETE http:localhost:3333/users/1
Request Body: enviado no corpo da requisição. (Passam pelo HTTPs)
  Envio de informações de um formulário
  POST http:localhost:3333/users
*/

const server = http.createServer(async (req, res) => {
  const { method, url } = req

  await json(req, res)

  const route = routes.find(route => {
    return route.method === method && route.path.test(url)
  })

  if (route) {
    const routeParams = req.url.match(route.path)

    const { query, ...params } = routeParams.groups

    req.params = params
    req.query = query ? extractQueryParams(query) : {}

    return route.handler(req, res)
  }

  return res.writeHead(404).end()
})

server.listen(3333)
