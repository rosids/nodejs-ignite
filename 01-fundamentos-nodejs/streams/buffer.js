/*
  É uma representação de um espaço na memória do computador, usado especificamente
  para transitar dados de uma maneira muito rápida.
  Portanto, os dados armazenados no buffer são feitos para logo serem tratados,
  ou seja, enviados para algum outro lugar e logo depois removidos.
  Então são maneiras de conseguir salvar e ler na memória de uma maneira
  muito performática.
  E por que de forma muito performática? O node utiliza esse modelo de buffer na
  leitura e na escrita de streams porque ele é mais performático em lê parcialmente
  uma informação de forma binária, que é como o buffer guarda na memória, do que
  necessariamente um texto, uma string ou por exemplo algo que tem muito mais
  informação com acento que é necessário guardar com encoding sendo muito mais
  pesado para ser lido.
  O buffer existe dentro do node, foi uma API criada, pela incapacidade do javascript
  de trabalhar com dados binários de maneira eficiente.
  Resumidamente, o buffer é uma maneira mais eficiente/mais performática de escrever
  e ler da memória conversando de maneira binária, conversando de uma forma
  mais baixo nível
*/
const buf = Buffer.from('ok')
const buf2 = Buffer.from('12')

/*
  cada número retornado no console representa uma letra ou número em hexadecimal,
  ou seja, fica representado de uma maneira binária em um hexadecimal que depois
  o node consegue trabalhar com esses dados de forma muito mais performática
*/
console.log(buf)
console.log(buf2)

/*
  cada número retornado no console representa uma letra ou número em decimal,
  ou seja, fica representado de uma maneira binária em um decimal que depois
  o node consegue trabalhar com esses dados de forma muito mais performática
*/
console.log(buf.toJSON())
console.log(buf2.toJSON())
