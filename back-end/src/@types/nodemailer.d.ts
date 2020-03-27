import 'nodemailer/lib/mailer';

declare module 'nodemailer/lib/mailer' {
  interface Options {
    template?: string;
    context?: object;
  }
}
