import { Router } from "@angular/router";
import { environment } from "environments/environment";
import { HttpErrorResponse } from "@angular/common/http";
import { ErrorsService, NotificationsService } from "..";
import { ErrorHandler, Injectable, Injector } from "@angular/core";

@Injectable()
export class AppErrorHandler extends ErrorHandler {
    //private notificationsService: NotificationService
    constructor(private injector: Injector) {
        super();
    }

    override handleError(error: Error | HttpErrorResponse) {
        let displayMessage = 'An error occurred.';

        const notificationService = this.injector.get(NotificationsService);
        const errorsService = this.injector.get(ErrorsService);
        const router = this.injector.get(Router);
        
        if (!environment.production) {
            displayMessage += ' See console for details.';
        }

        //this.notificationsService.error(displayMessage);
        if (error instanceof HttpErrorResponse) {
            // Server error happened
            if (!navigator.onLine) {
              // No Internet connection
              return notificationService.warn('No Internet Connection');
            }
            // Http Error
            // Send the error to the server
            errorsService.log(error).subscribe();
            // Show notification to the user
            return notificationService.error(`${error.status} - ${error.message}`);
          } else {
            // Client Error Happend
            // Client Error Happend
            // Send the error to the server and then
            // redirect the user to the page with all the info
            errorsService.log(error).subscribe(errorWithContextInfo => {
              router.navigate(['/error'], { queryParams: errorWithContextInfo });
            });
          }

        super.handleError(error);
    }
}
