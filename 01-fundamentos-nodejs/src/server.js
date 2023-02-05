import http from 'node:http' // utiliza-se o node: para informar que é um módulo interno do node

const users = []

const server = http.createServer((req, res) => {
  const { method, url } = req

  if (method === 'GET' && url === '/users') {
    return res
      .setHeader('Content-Type', 'application/json')
      .end(JSON.stringify(users))
  }

  if (method === 'POST' && url === '/users') {
    users.push({
      id: 1,
      name: 'John Doe',
      email: 'johndoe@example.com'
    })

    return res.end('Criação de usuário')
  }

  return res.end('Hello World')
})

server.listen(3333)
