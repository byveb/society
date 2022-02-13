import { CommonModule } from '@angular/common';
import { AuthService } from './auth/auth.service';
import { RouterStateSerializer } from '@ngrx/router-store';
import { CustomSerializer } from './router/custom-serializer';
import { AppLoggerService } from './app-logger/app-logger.service';
import { AppStorageService } from './app-storage/app-storage.service';
import { APP_INITIALIZER, ErrorHandler, NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { AppHttpClientService } from './app-http-client/app-http-client.service';
import { TokenInterceptorService } from './token-interceptor/token-interceptor.service';
import { PageConfigurationService } from './page-configuration/page-configuration.service';
import { AppErrorHandler, ErrorsService, HttpErrorInterceptor, InitService, ListingService, MaintenanceService, MetaService, PropertyService, ReminderService, ReportService, StaffService, TokenService, TransactionsService } from '.';
import { HttpResponseInterceptor } from './http-interceptors/http-response.interceptor';

export function init_app(loadService: InitService) {
  return () => loadService.init();
}

@NgModule({
  providers: [
    InitService,
    MetaService,
    AuthService,
    TokenService,
    StaffService,
    ErrorsService,
    ReportService,
    ListingService,
    ReminderService,
    PropertyService,
    AppLoggerService,
    AppStorageService,
    MaintenanceService,
    TransactionsService,
    AppHttpClientService,
    PageConfigurationService,
    {
      provide: APP_INITIALIZER,
      useFactory: init_app,
      deps: [InitService],
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    },
    { provide: ErrorHandler, useClass: AppErrorHandler },
    { provide: RouterStateSerializer, useClass: CustomSerializer },
    { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: HttpResponseInterceptor, multi: true }
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class ServiceModule { }
