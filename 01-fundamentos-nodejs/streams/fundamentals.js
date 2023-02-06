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


import { Readable, Writable } from 'node:stream'

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

class MultiplyByTenStream extends Writable {
  /*
    DENTRO DE UMA STREAM DE ESCRITA NÃO RETORNA NADA.
      ELA PROCESSA O DADO.
      NUNCA VAI TRANSFORMAR UM DADO EM UMA OUTRA COISA APENAS VAI PROCESSAR O DADO

    chunk -> pedaço lido da stream de leitura, tudo que é enviado no this.push(). Ex:
      const buf = Buffer.from(String(i))
      this.push(buf)
    encoding -> como a informação está codificada
    callback -> função que a stream de escrita precisa chamar quando ela TERMINOU de
    fazer o que ela precisava fazer com aquela informação
  */
  _write(chunk, encoding, callback) {
    console.log(Number(chunk.toString() * 10))
    callback()
  }
}

new OneToHundredStream()
  .pipe(new MultiplyByTenStream())