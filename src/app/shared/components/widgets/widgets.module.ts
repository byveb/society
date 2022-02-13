import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StatusWidgetComponent, ListingsWidgetComponent, QuickButtonWidgetComponent, ComingFeaturesWidgetComponent } from '.';
import { ThirdPartyComponentsModule } from '../third-party-components.module';
import { FormsModule } from '@angular/forms';
import { ChartsComponent } from '..';

@NgModule({
  declarations: [
    ChartsComponent,
    StatusWidgetComponent,
    ListingsWidgetComponent,
    QuickButtonWidgetComponent,
    ComingFeaturesWidgetComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ThirdPartyComponentsModule,
  ],
  exports: [
    ChartsComponent,
    StatusWidgetComponent,
    ListingsWidgetComponent,
    QuickButtonWidgetComponent,
    ComingFeaturesWidgetComponent
  ]
})
export class WidgetsModule { }