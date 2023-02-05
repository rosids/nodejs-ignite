import http from 'node:http' // utiliza-se o node: para informar que é um módulo interno do node

const server = http.createServer((req, res) => {
  return res.end('Hello World')
})

server.listen(3333)
