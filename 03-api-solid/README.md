<a id="topo"></a>

# API Node.js com SOLID

São 9h27min em 66 aulas.

Desenvolvido utilizando o node v18.16.1

<a id="sumario"></a>

## Sumário

- ##### [Objetivos da aplicação](#objetivos)
- ##### [Módulos do projeto](#modulos)

<a id="objetivos"></a>

## Objetivos do projeto

### RFs (Requisitos funcionais)

- [ ] Deve ser possível se cadastrar;
- [ ] Deve ser possível se autenticar;
- [ ] Deve ser possível obter o perfil de um usuário logado;
- [ ] Deve ser possível obter o número de check-ins realizados pelo usuário logado;
- [ ] Deve ser possível o usuário obter o seu histórico de check-ins;
- [ ] Deve ser possível o usuário buscar academias próximas;
- [ ] Deve ser possível o usuário buscar academias pelo nome;
- [ ] Deve ser possível o usuário realizar check-in em uma academia;
- [ ] Deve ser possível validar o check-in de um usuário;
- [ ] Deve ser possível cadastrar uma academia;

### RNs (Regras de negócio)

- [ ] O usuário não deve poder se cadastrar com um e-mail duplicado;
- [ ] O usuário não pode fazer 2 check-ins no mesmo dia;
- [ ] O usuário não pode fazer check-in se não estiver perto (100m) da academia;
- [ ] O check-in só pode ser validado até 20 minutos após ser criado;
- [ ] O check-in só pode ser validado por administradores;
- [ ] A academia só pode ser cadastrada por administradores;

### RNFs (Requisitos não-funcionais)

- [ ] A senha do usuário precisa estar criptografada;
- [ ] Os dados da aplicação precisam estar persistidos em um banco PostgreSQL;
- [ ] Todas listas de dados precisam estar paginadas com 20 itens por página;
- [ ] O usuário deve ser identificado por um JWT (JSON Web Token);

<a id="modulos"></a>

## Módulos do projeto

### Estrutura do projeto

- [x] Introdução
- [x] Definindo requisitos e regras
- [x] Criando projeto Node.js
- [x] Usando versões exatas do NPM
- [x] Carregando variáveis ambiente
- [x] Configurando ESLint
- [x] Criando aliases de importação

### Integração com Prisma ORM

- [x] Integração com Prisma ORM
- [x] Fundamentos do Docker
- [x] PostgreSQL com Docker
- [ ] Utilizando o Docker Compose
- [ ] Criando schema do Prisma
- [ ] Relacionamentos entre tabelas

### Caso de uso e design patterns

- [ ] Criação de um usuário
- [ ] Controller de registro
- [ ] Hash da senha e validação
- [ ] Caso de uso de registro
- [ ] Repository Pattern
- [ ] Inversão de dependências
- [ ] Interface do repositório
- [ ] Lidando com erros do use case
- [ ] Handler de erros global

### Design Patterns & Testes

- [ ] Configurando Vitest
- [ ] Primeiro teste unitário
- [ ] In-Memory Databases
- [ ] Gerando coverage de testes
- [ ] Utilizando UI do Vitest

### Utilizando UI do Vitest

- [ ] Caso de uso de autenticação
- [ ] Testes e controller de autenticação
- [ ] Refatorando instâncias nos testes
- [ ] Utilizando Factory Pattern
- [ ] Caso de uso de perfil
- [ ] Caso de uso de check-in
- [ ] TDD & Mocking
- [ ] Validando data do check-in
- [ ] Validando distância do check-in
- [ ] Caso de uso de criação de academia
- [ ] Caso de uso de histórico
- [ ] Caso de uso de métricas
- [ ] Caso de uso de busca de academias
- [ ] Caso de uso de academias próximas
- [ ] Caso de uso de validar de check-in
- [ ] Validando horário do check-in

### Controllers & Testes E2E

- [ ] Repositórios do Prisma
- [ ] Repositório de academias
- [ ] Factories dos casos de uso
- [ ] Princípios da autenticação JWT
- [ ] Implementando JWT no Fastify
- [ ] Controller de perfil
- [ ] Criando test environment
- [ ] Organizando NPM scripts
- [ ] Test Environment do Prisma
- [ ] Teste E2E do registro
- [ ] Teste E2E da autenticação
- [ ] Teste E2E do perfil
- [ ] Controller de criação de academia
- [ ] Outros controllers da academia
- [ ] Controllers das rotas de check-ins
- [ ] Testes E2E de rotas de academias
- [ ] Testes E2E de rotas de check-ins

### Refresh Token & RBAC

- [ ] Estratégia de refresh de token
- [ ] Implementação do refresh token
- [ ] Autorização por cargos (RBAC)
- [ ] Testes de RBAC

### CI/CD da aplicação

- [ ] Executando testes unitários no CI
- [ ] Executando testes E2E no CI

##### [Topo](#topo)
