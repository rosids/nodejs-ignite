
/*
  middleware = interceptador
  Uma função que intercepta uma requisição, onde o req e res vão ser
  tratados ou transformados
  SEMPRE RECEBE COMO PARÂMETRO O REQ E O RES
*/
export async function json(req, res) {
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

  res.setHeader('Content-Type', 'application/json')
}