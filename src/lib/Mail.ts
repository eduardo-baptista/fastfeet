import nodemailer, { Transporter } from 'nodemailer';
import exphbs from 'express-handlebars';
import nodemailerhbs from 'nodemailer-express-handlebars';
import { resolve } from 'path';
import mailConfig from '@config/mail';

class Mail {
  private transporter: Transporter;

  constructor() {
    const { host, port, auth, secure } = mailConfig;
    this.transporter = nodemailer.createTransport({
      host,
      port,
      secure,
      auth,
    });
  }

  private configureTemplates() {
    const viewPath = resolve();
  }
}

export default new Mail();
