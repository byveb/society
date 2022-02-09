import { HttpErrorResponse } from "@angular/common/http";
import { ErrorHandler, Injectable } from "@angular/core";
import { environment } from "environments/environment";

@Injectable()
export class AppErrorHandler extends ErrorHandler {
    //private notificationsService: NotificationService
    constructor() {
        super();
    }

    override handleError(error: Error | HttpErrorResponse) {
        let displayMessage = 'An error occurred.';

        if (!environment.production) {
            displayMessage += ' See console for details.';
        }

        //this.notificationsService.error(displayMessage);

        super.handleError(error);
    }
}
