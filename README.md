# app_teste_child_process

Projeto com o objetivo de demonstrar como realizar operações com uso intensivo de CPU sem bloquear a thread do Event Loop no NodeJs.

## Introdução

Passo a passo para rodar a aplicação:

### Pré-requisitos

* [NodeJs](https://nodejs.org/en/)
* [Npm](https://www.npmjs.com/)
* [Nodemon](https://nodemon.io/)

### Instalação

* Clone o projeto para um diretório da sua máquina local.
* Use o comando do Npm para baixar as dependências do projeto.
```
npm install
```

* Instale o nodemon para rodar o projeto.
```
npm i nodemon -g
```

* Para executar a aplicação, execute o script npm start

```
npm start
```

* Utilize as duas rotas para a realização dos testes de bloqueio da thread principal

```
http://127.0.0.1:3000/sync?max=1500000000
http://127.0.0.1:3000/async?max=1500000000
```

## Autores

* **Bruno Oliveira** - [bruno303](https://github.com/bruno303)

## Licença

O projeto está licenciado sobre a Licença MIT - veja o arquivo [LICENSE.md](https://github.com/bruno303/app_teste_child_process/blob/master/LICENSE.md) para mais detalhes