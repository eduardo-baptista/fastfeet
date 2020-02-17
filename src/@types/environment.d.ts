declare namespace NodeJS {
  interface ProcessEnv {
    DB_DIALECT: string;
    DB_USER: string;
    DB_PASS: string;
    DB_NAME: string;
    APP_SECRET: string;
  }
}
