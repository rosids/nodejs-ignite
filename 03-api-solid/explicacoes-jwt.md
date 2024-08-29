### JWT: JSON Web Token

Usuário faz login, envia e-mail/senha, o back-end cria um token ÚNICO, não-modificável e STATELESS;

Stateless: Não armazenado em nenhuma persistência de dados (banco de dados);

Back-end: Quando vai criar o token ele usa uma PALAVRA-CHAVE (string);

Palavra-chave: fejgshdgfcmxnvegavncmxiurhgihdfkvcjxmbmvjkhksh
Mesmo não sendo armazenado em banco de dados, através da palavra-chave o backend consegue validar se o token foi criado por ele.

Email/senha -> header.payload.sign


### Sobre Refresh Token

O Refresh Token é uma técnica utilizada para renovar o token de autenticação após seu tempo de validade expirar. O Refresh Token é um token de longa duração que é gerado quando o usuário faz login com suas credenciais. Esse token é usado para obter um novo Access Token quando o antigo expira.

O Refresh Token é armazenado com segurança, geralmente em um cookie HttpOnly, para que não possa ser acessado por scripts do lado do cliente. Quando o Access Token expira, o cliente envia o Refresh Token ao servidor para obter um novo Access Token válido. Isso permite que os usuários permaneçam conectados por um longo período sem precisar fazer login repetidamente.

O uso de Refresh Tokens é uma prática de segurança recomendada em aplicações web, uma vez que ajuda a minimizar o risco de acesso não autorizado por terceiros, especialmente se o token de autenticação for roubado ou comprometido.