### JWT: JSON Web Token

Usuário faz login, envia e-mail/senha, o back-end cria um token ÚNICO, não-modificável e STATELESS;

Stateless: Não armazenado em nenhuma persistência de dados (banco de dados);

Back-end: Quando vai criar o token ele usa uma PALAVRA-CHAVE (string);

Palavra-chave: fejgshdgfcmxnvegavncmxiurhgihdfkvcjxmbmvjkhksh
Mesmo não sendo armazenado em banco de dados, através da palavra-chave o backend consegue validar se o token foi criado por ele.

Email/senha -> header.payload.sign