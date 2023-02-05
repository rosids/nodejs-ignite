import http from 'node:http' // utiliza-se o node: para informar que é um módulo interno do node

const server = http.createServer((req, res) => {
  const { method, url } = req

  if (method === 'GET' && url === '/users') {
    return res.end('Listagem de usuários')
  }

  if (method === 'POST' && url === '/users') {
    return res.end('Criação de usuário')
  }

  return res.end('Hello World')
})

server.listen(3333)
