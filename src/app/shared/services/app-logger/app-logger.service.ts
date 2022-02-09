import { Injectable } from '@angular/core';
import { Params } from '@app/utilities';

@Injectable()
export class AppLoggerService {

  constructor() { }

  public info(msg: string, data?: Params): void {
    console.log(msg, data);
  }

  public err(msg: string, ex?: any, data?: Params): void {
    console.error(msg, ex, data);
  }

  public warn(msg: string, ex?: any, data?: Params): void {
    console.warn(msg, ex, data);
  }

  public critical(msg: string, ex?: any, data?: Params): void {
    console.log(msg, ex, data);
  }
}