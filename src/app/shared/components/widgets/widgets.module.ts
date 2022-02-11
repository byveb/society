import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StatusWidgetComponent, ListingsWidgetComponent, QuickButtonWidgetComponent, ComingFeaturesWidgetComponent } from '.';
import { ThirdPartyComponentsModule } from '../third-party-components.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
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
    StatusWidgetComponent,
    ListingsWidgetComponent,
    QuickButtonWidgetComponent,
    ComingFeaturesWidgetComponent
  ]
})
export class WidgetsModule { }