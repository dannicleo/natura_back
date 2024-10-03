# Backend para E-commerce

Este é o backend para um projeto de e-commerce desenvolvido em NestJS. O servidor fornece uma API para gerenciar produtos, carrinhos de compras e usuários.

## Tecnologias Usadas

- [NestJS](https://nestjs.com/) - Framework Node.js para construir aplicativos eficientes e escaláveis.
- [Prisma](https://www.prisma.io/) - ORM para TypeScript e JavaScript que facilita a interação com o banco de dados.
- [PostgreSQL](https://www.postgresql.org/) - Sistema de gerenciamento de banco de dados.
- [Docker](https://www.docker.com/) - Plataforma para desenvolvimento, entrega e execução de aplicativos em contêineres.

## Estrutura do Projeto

/backend
│
├── /src
│   ├── /modules
│   │   ├── product
│   │   ├── cart
│   │   └── user
│   │
|   ├── guards
|   ├── decorators
│   ├── /common
│   ├── app.module.ts (Módulo principal da aplicação)
│   └── main.ts (Ponto de entrada da aplicação)
│
├── /prisma
│   ├── schema.prisma (Definição do modelo do banco de dados)
│   └── (Outros arquivos de configuração do Prisma)
│
├── docker-compose.yml (Arquivo de configuração do Docker)
├── Dockerfile (Instruções para criar a imagem Docker)
├── package.json
└── README.md

## Requisitos

- [Node.js](https://nodejs.org/) (versão 14 ou superior)
- [Docker](https://www.docker.com/) e [Docker Compose](https://docs.docker.com/compose/) (opcional, mas recomendado)
- [Prisma CLI](https://www.prisma.io/docs/reference/api-reference/prisma-cli-reference) (para migrações e geração de cliente)

## Installation

Siga os passos abaixo para configurar o projeto localmente:

1. Clone o repositório:

```bash
  $ git clone https://github.com/dannicleo/natura_back.git

  $ cd backend
```

#install dependencies
```bash
  $ npm install
```

## Preparing enviroment variables

Create a .env

POSTGRES_HOST=postgresdb_natura
POSTGRES_USER=postgres
POSTGRES_PASSWORD=12345678
POSTGRES_NAME=naturadb
POSTGRES_PORT=5432
DATABASE_URL=postgresql://${POSTGRES_USER}:${POSTGRES_PASSWORD}@${POSTGRES_HOST}:${POSTGRES_PORT}/${POSTGRES_NAME}

Create a .env.development

POSTGRES_HOST=localhost
POSTGRES_USER=postgres
POSTGRES_PASSWORD=12345678
POSTGRES_NAME=naturadb
POSTGRES_PORT=5432
DATABASE_URL=postgresql://${POSTGRES_USER}:${POSTGRES_PASSWORD}@${POSTGRES_HOST}:${POSTGRES_PORT}/${POSTGRES_NAME}


## Preparing the app

```bash
# running migrations
$ npm run migrate:dev

# seed database
$ npm run seed:dev
```

## Running the app

```bash
# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

The server is ruunig in (http://localhost:3000)

## Test

```bash
# unit tests
$ npm run test

# test coverage
$ npm run test:cov
```

## Running the app by docker

```bash
# executing docker compose
$ docker-compose -f "docker-compose.dev.yml" up -d
```

OBS: É preciso popular o banco de dados dentro do container. Um script de seed está contido no package.json