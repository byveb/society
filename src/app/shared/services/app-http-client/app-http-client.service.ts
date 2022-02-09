import { Injectable } from '@angular/core';
import { HttpClient, HttpContext, HttpHeaders, HttpParams } from "@angular/common/http";

@Injectable()
export class AppHttpClientService {

  constructor(protected client: HttpClient) { }

  public Get<T>(url: string, options?: {
    headers?: HttpHeaders | {
        [header: string]: string | string[];
    };
    context?: HttpContext;
    observe?: 'body';
    params?: HttpParams | {
        [param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>;
    };
    reportProgress?: boolean;
    responseType?: 'json';
    withCredentials?: boolean}) {
    return this.client.get<T>(url, options);
  }
}
