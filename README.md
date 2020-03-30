<h1 align="center">
  <img alt="Fastfeet" title="Fastfeet" src=".github/logo.png" width="300px" />
</h1>

<h3 align="center">
   FastFeet delivery management
</h3>

## :rocket: About the Project

this is a app for a fake shipping company called Fastfeet, that consist in manage deliverys for differents deliverymans and recipients.

### Back-end

#### Launch

to start the api enter in the back-end folder copy the `.env.exemple` and replace the name for `.env`, then fill with correct informations.

After that you just need to exec:

```
docker-compose up
yarn sequelize-cli db:migrate or npx sequelize db:migrate
yarn sequelize-cli db:Seed:all or npx sequelize db:seed:all
```

#### Docs

You can see all avaliable api methods on insomnia:

<a href="https://insomnia.rest/run/?label=Fastfeet-api&uri=https%3A%2F%2Fraw.githubusercontent.com%2Feduardo-baptista%2Ffastfeet%2Fmaster%2FInsomnia_data.json" target="_blank"><img src="https://insomnia.rest/images/run.svg" alt="Run in Insomnia"></a>

#### Technologies

- node JS
- Express
- Typescript
- Docker
