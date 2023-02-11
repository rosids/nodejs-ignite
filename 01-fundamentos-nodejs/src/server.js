import http from 'node:http' // utiliza-se o node: para informar que é um módulo interno do node

import { json } from './middlewares/json.js'
import { routes } from './routes.js'

/* 
stateful -> dados salvos em memória, ao reiniciar o servidor os dados são perdidos.
stateless -> dados persistentes, ou seja, salvos em fontes externas.
  Ex: banco de dados ou arquivo de texto.
*/

const server = http.createServer(async (req, res) => {
  const { method, url } = req

  await json(req, res)

  const route = routes.find(route => {
    return route.method === method && route.path === url
  })

  if (route) {
    return route.handler(req, res)
  }

  return res.writeHead(404).end()
})

server.listen(3333)
