declare module 'youch' {
  import { Request } from 'express';

  export default class Youch {
    constructor(err: any, req: Request);
    public toJSON(): Promise<string>;
  }
}
