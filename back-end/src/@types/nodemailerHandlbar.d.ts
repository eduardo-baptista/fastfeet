interface NodemailerHbsParams {
  viewEngine: Exphbs;
  viewPath: string;
  extName: string;
}

declare module 'nodemailer-express-handlebars' {
  function nodemailerHandlebars(obj: NodemailerHbsParams): void;

  export = nodemailerHandlebars;
}
