# Project Title

Projeto com o objetivo de demonstrar como realizar operações com uso intensivo de CPU sem bloquear a thread do Event Loop no NodeJs.

## Getting Started

Passo a passo para rodar a aplicação:

### Prerequisites

* [NodeJs](https://nodejs.org/en/)
* [Npm](https://www.npmjs.com/)

### Installing

* Clone o projeto para um diretório da sua máquina local.
* Use o comando do Npm para baixar as dependências do projeto.

```
npm install
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

## Authors

* **Bruno Oliveira** - *Initial work* - [bruno303](https://github.com/bruno303)

