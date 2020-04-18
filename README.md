<h1 align="center">
  <img alt="Fastfeet" title="Fastfeet" src=".github/logo.png" width="300px" />
</h1>

<h3 align="center">
   FastFeet delivery management
</h3>

## :rocket: About the Project

this is an app for a fake shipping company called Fastfeet, that consist in manage deliveries for differents deliverymans and recipients.

## Required Technologies

- Docker
- Node JS

### Back-end

#### Launch

to start the API enter in the back-end folder copy the `.env.exemple` and replace the name for `.env`, then fill with correct informations.

After that you just need to exec:

```
docker-compose up -d
yarn sequelize-cli db:migrate or npx sequelize db:migrate
yarn sequelize-cli db:seed:all or npx sequelize db:seed:all
```

#### Docs

You can see all avaliable API methods on insomnia:

<a href="https://insomnia.rest/run/?label=Fastfeet-api&uri=https%3A%2F%2Fraw.githubusercontent.com%2Feduardo-baptista%2Ffastfeet%2Fmaster%2FInsomnia_data.json" target="_blank"><img src="https://insomnia.rest/images/run.svg" alt="Run in Insomnia"></a>

#### Technologies

- Node JS
- Express
- Typescript
- Docker
- Sentry

### Web

Before to run the web application you need to start the API.

to start the web application enter in the front-end folder copy `.env.exemple` and replace the name for `.env`, then fill with correct informations.

After that you just need to exec:

```
yarn or npm install
yarn start or npm run start
```

#### Technologies

- React
- Redux
- Redux-saga
- Styled-components

### Mobile

to start the mobile application you need to start the API, after that enter in the mobile folder and change the property `baseURL` on `src/services/api` to the correct ip address.

After that you just need to exec:

```
yarn or npm install
yarn start or npm run start
npx react-native run-android
```
