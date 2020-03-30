declare namespace NodeJS {
  interface ProcessEnv {
    DB_DIALECT: string;
    DB_USER: string;
    DB_PASS: string;
    DB_NAME: string;
    APP_SECRET: string;
    MAIL_HOST: string;
    MAIL_PORT: string;
    MAIL_USER: string;
    MAIL_PASS: string;
    SENTRY_DNS: string;
    REDIS_URL: string;
    REDIS_PORT: string;
    REDIS_PASS: string;
  }
}
