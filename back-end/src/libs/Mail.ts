import nodemailer, { Transporter, SentMessageInfo } from 'nodemailer';
import exphbs from 'express-handlebars';
import nodemailerhbs from 'nodemailer-express-handlebars';
import { resolve } from 'path';
import mailConfig from '@config/mail';
import { PluginFunction, Options } from 'nodemailer/lib/mailer';

class Mail {
  private transporter: Transporter;

  constructor() {
    this.transporter = nodemailer.createTransport(mailConfig);
    this.configureTemplates();
  }

  private configureTemplates(): void {
    const viewPath = resolve(__dirname, '..', 'app', 'views', 'emails');

    this.transporter.use(
      'compile',
      (nodemailerhbs({
        viewEngine: exphbs.create({
          layoutsDir: resolve(viewPath, 'layouts'),
          partialsDir: resolve(viewPath, 'partials'),
          defaultLayout: 'default',
          extname: '.hbs',
        }),
        viewPath,
        extName: '.hbs',
      }) as unknown) as PluginFunction
    );
  }

  public sendMail(message: Options): Promise<SentMessageInfo> {
    return this.transporter.sendMail({
      ...mailConfig.default,
      ...message,
    });
  }
}

export default new Mail();
