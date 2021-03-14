<h1 align="center">
<img alt="Nave" src=".github/logo.png" />
</h1>

<p align="center">
 <a href="#-sobre">Sobre</a> |
 <a href="#-requisitos">Requisitos</a> |
 <a href="#-tecnologias">Tecnologias</a> |
 <a href="#-dificuldades">Dificuldades</a> |
 <a href="#-desafio-concluídos">Desafios concluídos</a> |
 <a href="#%EF%B8%8F-como-executar">Como executar</a>
</p>

## 🚀 Sobre
Este é um projeto desenvolvido para o desafio back-end da empresa [**NAVE.RS**](https://nave.rs/), foi desenvolvido em NodeJS usando TypeScript.

## 📚 Requisitos
- Ter [**Git**](https://git-scm.com/) para clonar o projeto.
- Ter [**Yarn**](https://yarnpkg.com/) instalado.
- Ter [**Docker**](https://www.docker.com/) rodando um container PostgreSQL ou o [**PostgreSQL**](https://www.postgresql.org/) instalado em sua máquina e configurado.

## 🚀 Principais Tecnologias
- [ReactJS](https://github.com/facebook/react)
- [TypeScript](https://github.com/microsoft/TypeScript)
- [Typeorm](https://github.com/typeorm/typeorm)
- [PostgreSQL](https://github.com/postgres/postgres)
- [Express](https://github.com/expressjs/express)
- [Eslint](https://github.com/eslint/eslint)
- [Prettier](https://github.com/prettier/prettier)

## 😢 Dificuldades
- **E.B.2** - Infelizmente não conseguir completar esse desafio, porque não encontrei uma solução para usar seeds com typeorm, tentei criar duas conexões com o mesmo banco de dados, uma para rodar a migration de criação da tabela e outro para executar a migration para semear o banco de dados, porém, infelizmente não deu certo. 😭😤
- Além disso, a execução da migration de seeds funciona caso o banco de dados já esteja com as tabelas inseridas, ou seja, se a migration de tabela rodar e depois colocar a migration de seeds na pasta migrations, consegue rodar com sucesso.

## 😁 Desafios concluídos
- [**CodesandBox**](https://codesandbox.io/s/teste-estagio-template-forked-39qn5)
- E.1 ao E.10
- E.B.1, E.B.3 ao E.B.5

## ⚙️ Como executar
- No arquivo ormconfig.json configure os parâmetros de acesso ao banco de dados (username, password e database).
- Dentro do postgreSQL crie um banco chamado desafio_naver ou altere dentro do ormconfig.json para o nome que você desejar.
- Para testar as request use o insominia e importe o arquivo de teste que está contido dentro da pasta **.github**. <a href="./.github/Insomnia.json">Insomia Teste</a>
```bash
    # Clonar o repositório
    $ git clone https://github.com/claudianopl/NaveRs-Backend.git

    # Navegar para o diretório
    $ cd NaveRs-Backend

    # Instale as dependências
    $ yarn

   # Executar migrations para criação das tabelas nas base de dados
    $ yarn typeorm migration:run

    # Iniciar o projeto em desenvolvimento
    $ yarn dev:server
```

---
Feito com 💜 by Claudiano Lima
