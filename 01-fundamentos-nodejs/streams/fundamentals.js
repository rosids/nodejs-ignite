/*
  Readable stream -> stream de leitura, lê dados
  Writable stream -> stream de escrita, processa dados
*/

/* 
  stdin -> tudo que é digitado no terminal (readable stream)
  stdout -> o retorno da aplicação no terminal(writable stream)
  pipe -> encaminha a ação -> neste caso ler aos poucos a informação
*/
// process.stdin
//   .pipe(process.stdout)


import { Readable } from 'node:stream'

/* 
  No node toda porta de entrada e saída é uma stream
  STREAMS NÃO PERMITE SER TRABALHADA COM DADOS PRIMITIVOS COMO NÚMERO, STRING, BOOLEAN, etc
    Os dados precisam ser convertidos em BUFFER
      O BUFFER NÃO ACEITA NÚMEROS PRECISA SER CONVERTIDOS EM STRING
      Buffer.from() => converte a informação para buffer
*/
class OneToHundredStream extends Readable {
  index = 1

  _read() {
    const i = this.index++

    /*
      Com stream consegue se trabalhar aos poucos com dados, ou seja, consegue trabalhar
      com os dados antes deles estarem completos
    */
    setTimeout(() => {
      if (i > 100) {
        /*
        o método push é utilizado para stream, para uma readable stream, fornecer 
        informações para quem estiver consumindo ela
          Quando define-se nulo lê-se que não existe mais uma informação para ser 
          enviada nela
        */
        this.push(null)
      } else {
        const buf = Buffer.from(String(i))
        this.push(buf)
      }
    }, 1000)
  }
}

new OneToHundredStream()
  .pipe(process.stdout)