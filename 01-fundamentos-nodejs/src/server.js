import http from 'node:http' // utiliza-se o node: para informar que é um módulo interno do node

/* 
stateful -> dados salvos em memória, ao reiniciar o servidor os dados são perdidos.
stateless -> dados persistentes, ou seja, salvos em fontes externas.
  Ex: banco de dados ou arquivo de texto.
*/
const users = []

const server = http.createServer(async (req, res) => {
  const { method, url } = req

  const buffers = []

  for await (const chunk of req) {
    buffers.push(chunk)
  }

  /*
    caso não haja um body na requisição é atribuído null ao req.body
  */
  try {
    req.body = JSON.parse(Buffer.concat(buffers).toString())
  } catch (error) {
    req.body = null
  }

  if (method === 'GET' && url === '/users') {
    return res
      .setHeader('Content-Type', 'application/json')
      .end(JSON.stringify(users))
  }

  if (method === 'POST' && url === '/users') {
    const { name, email } = req.body

    users.push({
      id: 1,
      name,
      email
    })

    return res.writeHead(201).end()
  }

  return res.writeHead(404).end()
})

server.listen(3333)
