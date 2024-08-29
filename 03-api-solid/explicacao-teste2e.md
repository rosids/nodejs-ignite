Para rodar o teste e2e precisa criar um npm link

1. Entrar na pasta prisma
2. Criar uma pasta com o nome `vitest-environment-prisma`
3. Dentro da pasta `vitest-environment-prisma`
4. Rodar o comando `npm init -y`
5. Criar o arquivo `prisma-test-environment.ts` com o seguinte código:

   ```ts
   import { Environment } from "vitest";

   export default <Environment>{
     name: "prisma",
     transformMode: "ssr",
     async setup() {
       console.log("Setup");

       return {
         teardown() {
           console.log("Teardown");
         },
       };
     },
   };
   ```

6. Alterar o main no `package.json` que foi gerado para `prisma-test-environment.ts`
7. Após isso, rodar o comando `npm link`
8. Voltar para para pasta principal do projeto e executar `npm link vitest-environment-prisma`
9. Dentro do `vite.config.ts` adicionar a seguinte linha dentro `defineConfig`

   ```ts
   test: {
     environmentMatchGlobs: [['src/http/controllers/**', 'prisma']],
   },
   ```
