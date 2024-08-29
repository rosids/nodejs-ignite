### O que é o Docker?

Docker é uma plataforma de software que permite criar, implantar e executar aplicativos em contêineres virtuais. Ele permite que as aplicações e seus componentes sejam empacotados em um contêiner isolado e portátil, que pode ser executado em qualquer ambiente que tenha o Docker instalado, sem a necessidade de instalar dependências adicionais ou fazer grandes configurações. Com o Docker, é possível ter ambientes de desenvolvimento, teste e produção consistentes, seguros e escaláveis, aumentando a eficiência e a produtividade do desenvolvimento de software.

#### Docker compose

É um arquivo YAML, para definir os serviços da aplicação e suas configurações, como a imagem do Postgres a ser usada, as portas a serem expostas, as variáveis ambiente, entre outros. Com isso, é possível iniciar o container do Postgres com apenas um comando, que utiliza as configurações do arquivo do Docker Compose.

Obs.: Caso o comando `docker compose` informe como comando não encontrado, pode ser que na versão ou forma que foi instalado o Docker, esse comando não está presente. Nesse caso, pode utilizar `docker-compose` como alternativa.
