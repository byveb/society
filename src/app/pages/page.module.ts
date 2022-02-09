import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceModule } from '@services/service.module';
import { LayoutsModule } from '@layouts/layout.module';
import { ComponentsModule } from '@components/component.module';
import { DashboardPageComponent, ErrorPageComponent, PropertyPageComponent, PropertyUnitPageComponent } from '.';

@NgModule({
  declarations: [
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
