import { ErrorHandler, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './auth/auth.service';
import { AppLoggerService } from './app-logger/app-logger.service';
import { AppStorageService } from './app-storage/app-storage.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { AppHttpClientService } from './app-http-client/app-http-client.service';
import { TokenInterceptorService } from './token-interceptor/token-interceptor.service';
import { PageConfigurationService } from './page-configuration/page-configuration.service';
import { AppErrorHandler, HttpErrorInterceptor } from '.';
import { RouterStateSerializer } from '@ngrx/router-store';
import { CustomSerializer } from './router/custom-serializer';

@NgModule({  
  providers: [
    AuthService,
    AppLoggerService,
    AppStorageService,
    AppHttpClientService,
    PageConfigurationService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    },
    { provide: ErrorHandler, useClass: AppErrorHandler },
    { provide: RouterStateSerializer, useClass: CustomSerializer },
    { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true },
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class ServiceModule { }
