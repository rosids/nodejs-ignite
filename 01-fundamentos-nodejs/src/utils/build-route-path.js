// /users/:id
export function buildRoutePath(path) {
  // começa com : e pode ter uma ou mais letras(+) maiúsculas e minúsculas(a-zA-Z)
  // O g define que é uma regex global e irá procurar por todos os matches daquela operação
  const routeParametersRegex = /:([a-zA-Z]+)/g

  console.log(Array.from(path.matchAll(routeParametersRegex)))
}