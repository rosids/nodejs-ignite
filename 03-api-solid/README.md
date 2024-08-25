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

- [x] Deve ser possível se cadastrar;
- [x] Deve ser possível se autenticar;
- [x] Deve ser possível obter o perfil de um usuário logado;
- [x] Deve ser possível obter o número de check-ins realizados pelo usuário logado;
- [x] Deve ser possível o usuário obter o seu histórico de check-ins;
- [x] Deve ser possível o usuário buscar academias próximas (até 10km);
- [x] Deve ser possível o usuário buscar academias pelo nome;
- [x] Deve ser possível o usuário realizar check-in em uma academia;
- [x] Deve ser possível validar o check-in de um usuário;
- [x] Deve ser possível cadastrar uma academia;

### RNs (Regras de negócio)

- [x] O usuário não deve poder se cadastrar com um e-mail duplicado;
- [x] O usuário não pode fazer 2 check-ins no mesmo dia;
- [x] O usuário não pode fazer check-in se não estiver perto (100m) da academia;
- [x] O check-in só pode ser validado até 20 minutos após ser criado;
- [ ] O check-in só pode ser validado por administradores;
- [ ] A academia só pode ser cadastrada por administradores;

### RNFs (Requisitos não-funcionais)

- [x] A senha do usuário precisa estar criptografada;
- [x] Os dados da aplicação precisam estar persistidos em um banco PostgreSQL;
- [x] Todas listas de dados precisam estar paginadas com 20 itens por página;
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
- [x] Utilizando o Docker Compose
- [x] Criando schema do Prisma
- [x] Relacionamentos entre tabelas

### Caso de uso e design patterns

- [x] Criação de um usuário
- [x] Controller de registro
- [x] Hash da senha e validação
- [x] Caso de uso de registro
- [x] Repository Pattern
- [x] Inversão de dependências
- [x] Interface do repositório
- [x] Lidando com erros do use case
- [x] Handler de erros global

### Design Patterns & Testes

- [x] Configurando Vitest
- [x] Primeiro teste unitário
- [x] In-Memory Databases
- [x] Gerando coverage de testes
- [x] Utilizando UI do Vitest

### Implementando casos de uso

- [x] Caso de uso de autenticação
- [x] Testes e controller de autenticação
- [x] Refatorando instâncias nos testes
- [x] Utilizando Factory Pattern
- [x] Caso de uso de perfil
- [x] Caso de uso de check-in
- [x] TDD & Mocking
- [x] Validando data do check-in
- [x] Validando distância do check-in
- [x] Caso de uso de criação de academia
- [x] Caso de uso de histórico
- [x] Caso de uso de métricas
- [x] Caso de uso de busca de academias
- [x] Caso de uso de academias próximas
- [x] Caso de uso de validar de check-in
- [x] Validando horário do check-in

### Controllers & Testes E2E

- [x] Repositórios do Prisma
- [x] Repositório de academias
- [x] Factories dos casos de uso
- [x] Princípios da autenticação JWT
- [x] Implementando JWT no Fastify
- [x] Controller de perfil
- [x] Criando test environment
- [x] Organizando NPM scripts
- [x] Test Environment do Prisma
- [x] Teste E2E do registro
- [x] Teste E2E da autenticação
- [x] Teste E2E do perfil
- [x] Controller de criação de academia
- [x] Outros controllers da academia
- [x] Controllers das rotas de check-ins
- [x] Testes E2E de rotas de academias
- [x] Testes E2E de rotas de check-ins

### Refresh Token & RBAC

- [x] Estratégia de refresh de token
- [ ] Implementação do refresh token
- [ ] Autorização por cargos (RBAC)
- [ ] Testes de RBAC

### CI/CD da aplicação

- [ ] Executando testes unitários no CI
- [ ] Executando testes E2E no CI

##### [Topo](#topo)
