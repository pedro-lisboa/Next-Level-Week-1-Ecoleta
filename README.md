<h1 align="center">
  <br>
  <img alt="Ecoleta" src="https://raw.githubusercontent.com/pedro-lisboa/Next-Level-Week-2020/master/img-github/logo.svg" width="200px">
</h1>

<h4 align="center">O Ecoleta é um marketplace que ajuda pessoas a encontrarem pontos de coleta de resíduos de forma eficiente.</h4>

<p align="center">
  <img alt="Linguagem mais usada Javascript" src="https://img.shields.io/github/languages/top/pedro-lisboa/Next-Level-Week-2020?style=flat">
  <img alt="Objetivo: estudo" src="https://img.shields.io/badge/purpose-study-lightgrey?style=flat">
  <a href="https://rocketseat.com.br/">
    <img alt="Feito por: Rocketseat" src="https://img.shields.io/badge/made%20by-Rocketseat-blueviolet?style=flat">
  </a>
</p>

<p align="center">
  <a href="#recursos">Recursos</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#instalação">Instalação</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#créditos">Créditos</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#licença">Licença</a>
</p>

<p align="flex">
  <img src="https://raw.githubusercontent.com/pedro-lisboa/Next-Level-Week-2020/master/img-github/mobile.jpg" width=20%">
  <img src="https://raw.githubusercontent.com/pedro-lisboa/Next-Level-Week-2020/master/img-github/web.png" width=80%">
</p>

## Recursos
- Cadastro de ponto de coleta;
- Listar os pontos de coleta (filtros);
- Listar um ponto de coleta específico;
- Listar os itens que são coletados.

## Instalação
Para clonar e executar a aplicação é necessário [Git](https://git-scm.com) e [Node.js](https://nodejs.org/en/download/) (que instala também o [npm](http://npmjs.com)). Em sua linha de comando:

```bash
# Clone o repositório
$ git clone https://github.com/pedro-lisboa/Next-Level-Week-2020.git

# Entre no repositório
$ cd next-level-week-1

# Instale as dependências dentro do diretório server
$ cd server
$ npm install

# Instale as dependências dentro do diretório web
$ cd web
$ npm install

# Instale as dependências dentro do diretório mobile
$ cd mobile
$ npm install
```
### Importante modificar o arquivo `.env`!
- Renomear o arquivo `.env.example` para `.env` dentro de /server

- Dentro do arquivo `.env`, substituir conforme solicitado
  - `HOST_URL=http://LOCALHOST:3333_OU_URLEXPO:3333`

- Substituindo por `http://localhost:3333`
  - Somente a parte **web** da aplicação funcionará.

- Substituindo pelo IP de conexão com Expo (ex: `http://192.168.1.10:3333`)
  - As aplicações **web** e **mobile** funcionarão em conjunto.
  - Nesse caso, também é importante colocar o mesmo IP de conexão na `baseURL` dentro de `mobile/src/services/api.ts`

### Backend
```bash
# Executar para criar o banco de dados
$ npx knex migrate:latest

# Popular banco de dados com as informações fixas dos itens coletados
$ npx knex seed:run

# Rodar o backend
$ npm run dev
```
### Frontend
```bash
# Rodar aplicação web (cd web)
$ npm start

# Rodar aplicação mobile (cd mobile)
$ npm start
```

## Tecnologias
- [Typescript](https://www.typescriptlang.org/)
- [Node.js](https://nodejs.org/en/download/)
- [Express](https://www.npmjs.com/package/express)
- [Knex / SQLite](http://knexjs.org/)
- [ReactJS](https://pt-br.reactjs.org/)
- [React Native](https://reactnative.dev/)
- [Expo](https://expo.io/)

## Créditos
Aplicação construída durante a Next Level Week #01 , realizada por :rocket: [Rocketseat](https://rocketseat.com.br/).
