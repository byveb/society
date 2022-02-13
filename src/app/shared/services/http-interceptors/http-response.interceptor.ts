import { Injectable } from "@angular/core";
import { catchError, Observable, tap, throwError } from "rxjs";
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";

@Injectable()
export class HttpResponseInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add a custom header
        const customReq = request.clone({
            headers: request.headers.set('Accept', 'application/json')
        });

        // pass on the modified request object
        return next.handle(customReq).pipe(
            tap((ev: HttpEvent<any>) => {
                if (ev instanceof HttpResponse) {
                    console.log('processing response', ev);
                }
            }),
            catchError(response => {
                if (response instanceof HttpErrorResponse) {
                    console.log('processing http error', response);
                }
                return throwError(response);
            })
        );
    }
}