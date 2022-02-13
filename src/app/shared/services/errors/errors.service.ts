import { Observable, of } from 'rxjs';
import { Injectable, Injector } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { NavigationError, Router } from '@angular/router';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';

@Injectable()
export class ErrorsService {
  constructor(private injector: Injector, private router: Router) {
    // Subscribe to the NavigationError
    this.router.events.subscribe((event: any) => {
      // Redirect to the ErrorComponent
      if (event instanceof NavigationError) {
        if (!navigator.onLine) {
          return;
        }
        // Redirect to the ErrorComponent
        this.log(event.error).subscribe(errorWithContext => {
          this.router.navigate(['/error'], { queryParams: errorWithContext });
        });
      }
    });
  }

  log(error: HttpErrorResponse | Error) {
    // Log the error to the console
    console.error(error);
    // Send error to server
    const errorToSend = this.addContextInfo(error);
    return FakeHttpService.post(errorToSend);
  }

  addContextInfo(error: HttpErrorResponse | Error | any) {
    // You can include context details here (usually coming from other services: UserService...)
    const name = error.name || null;
    const appId = 'shthppnsApp';
    const user = 'ShthppnsUser';
    const time = new Date().getTime();
    const id = `${appId}-${user}-${time}`;
    const location = this.injector.get<LocationStrategy>(LocationStrategy as any);
    const url = location instanceof PathLocationStrategy ? location.path() : '';
    const status = error.status || null;
    const message = error.message || error.toString();
    const stack = error instanceof HttpErrorResponse ? null : JSON.stringify(error);

    const errorWithContext = { name, appId, user, time, id, url, status, message, stack };
    return errorWithContext;
  }
}

class FakeHttpService {
  static post(error: { name: any; appId: string; user: string; time: number; id: string; url: string; status: any; message: any; stack: any; }): Observable<any> {
    console.log('Error sent to the server: ', error);
    return of(error);
  }
}
