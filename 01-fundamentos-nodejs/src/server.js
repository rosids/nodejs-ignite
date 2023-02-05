import http from 'node:http' // utiliza-se o node: para informar que é um módulo interno do node

/* 
stateful -> dados salvos em memória, ao reiniciar o servidor os dados são perdidos.
stateless -> dados persistentes, ou seja, salvos em fontes externas.
  Ex: banco de dados ou arquivo de texto.
*/
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

    return res.writeHead(201).end()
  }

  return res.writeHead(404).end()
})

server.listen(3333)
