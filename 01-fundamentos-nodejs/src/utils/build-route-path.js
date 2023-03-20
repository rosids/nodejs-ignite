// /users/:id
export function buildRoutePath(path) {
  // começa com : e pode ter uma ou mais letras(+) maiúsculas e minúsculas(a-zA-Z)
  // O g define que é uma regex global e irá procurar por todos os matches daquela operação
  const routeParametersRegex = /:([a-zA-Z]+)/g

  // ?<> -> define um nome do grupo para regex
  // $1 -> retorno da posição 1 da regex, neste caso da regex routeParametersRegex
  const pathWithParams = path.replaceAll(routeParametersRegex, '(?<$1>[a-z0-9\-_]+)')

  // ^ -> indica que começa daquela forma
  // ? após o () -> indica que é opcional, pode existir ou não
  // $ -> $ indica que terminal após essa verificação
  // \\ -> escapa o símbolo de interrogação já que ele faz parte da regex
  // . -> qualquer caractere
  // * -> inúmeras vezes
  // .* -> qualquer caractere inúmeras vezes
  const pathRegex = new RegExp(`^${pathWithParams}(?<query>\\?(.*))?$`)

  return pathRegex
}