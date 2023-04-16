<a id="sumario"></a>

## Sumário

- ##### [Objetivos da aplicação](#objetivos)
- ##### [Módulos do projeto](#modulos)

<a id="objetivos"></a>

## Objetivos da aplicação

#### Requisitos Funcionais(RF)

- [x] O usuário deve poder criar uma nova transação;
- [ ] O usuário deve poder obter um extrato da sua conta;
- [ ] O usuário deve poder listar todas transações que já ocorreram;
- [ ] O usuário deve poder visualizar uma transação única.

#### Regras de Negócios(RN)

- [x] A transação pode ser do tipo crédito que somará ao valor total, ou débito que será subtraído;
- [ ] Deve ser possível identificar o usuário entre as requisições;
- [ ] O usuário só pode visualizar transações que ele criou.

<a id="modulos"></a>

## Módulos do projeto

#### Estrutura da aplicação

- [x] Introdução
- [x] Conhecendo o Fastify
- [x] Entendendo o TypeScript
- [x] Criando aplicação
- [x] Configurando ESLint

#### Banco de dados

- [x] Estratégias de acesso ao banco
- [x] Configurando o Knex
- [x] Criando primeira migration
- [x] Criando tabela de transações
- [x] Realizando queries com Knex
- [x] Variáveis ambiente
- [x] Tratando env com Zod

#### Implementando as rotas

- [x] Requisitos da aplicação
- [x] Plugins do Fastify
- [x] Criação de transações
- [ ] Tipagem no Knex
- [ ] Listagem das transações
- [ ] Resumo de transações
- [ ] Utilizando cookies no Fastify
- [ ] Validando existência do cookie
- [ ] Configurando um hook global

#### Testes automatizados

- [ ] Entendo testes automatizados
- [ ] Criando primeiro teste
- [ ] Testando criação de transação
- [ ] Categorizando os testes
- [ ] Testando listagem de transações
- [ ] Configurando banco de testes
- [ ] Finalizando testes da aplicação

#### Preparando app p/ deploy

- [ ] Preparando para deploy
- [ ] Deploy do app no Render

##### [Topo](#sumario)
