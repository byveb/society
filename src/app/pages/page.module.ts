import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceModule } from '@services/service.module';
import { LayoutsModule } from '@layouts/layout.module';
import { ComponentsModule } from '@components/component.module';
import { CalendarComponent, DashboardPageComponent, ErrorPageComponent, PropertyPageComponent, PropertyUnitPageComponent } from '.';

@NgModule({
  declarations: [
    CalendarComponent,
    ErrorPageComponent,
    PropertyPageComponent,
    DashboardPageComponent,
    PropertyUnitPageComponent
  ],
  imports: [
    CommonModule,
    ServiceModule,
    LayoutsModule,
    ComponentsModule
  ],
  providers: [],
  exports: []
})
export class PageModule { }
