import { KnobModule } from 'primeng/knob';
import { MenuModule } from 'primeng/menu';
import { NgModule } from "@angular/core";
import { ChartModule } from 'primeng/chart';
import { ToastModule } from 'primeng/toast';
import { PanelModule } from 'primeng/panel';
import { BadgeModule } from 'primeng/badge';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from "primeng/ripple";
import { AvatarModule } from 'primeng/avatar';
import { DividerModule } from 'primeng/divider';
import { ToolbarModule } from 'primeng/toolbar';
import { SidebarModule } from 'primeng/sidebar';
import { AccordionModule } from "primeng/accordion";
import { PanelMenuModule } from 'primeng/panelmenu';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { SplitButtonModule } from 'primeng/splitbutton';

import en from "@angular/common/locales/en";
import { CommonModule, registerLocaleData } from "@angular/common";

registerLocaleData(en);


@NgModule({
    imports: [
        KnobModule,
        MenuModule,
        ChartModule,
        PanelModule,
        BadgeModule,
        ToastModule,
        CommonModule,
        AvatarModule,
        ButtonModule,
        RippleModule,
        ToolbarModule,
        SidebarModule,
        DividerModule,
        AccordionModule,
        PanelMenuModule,
        BreadcrumbModule,
        SplitButtonModule,
        AvatarGroupModule,
        ScrollPanelModule
    ],
    exports: [
        KnobModule,
        MenuModule,
        ChartModule,
        ToastModule,
        BadgeModule,
        PanelModule,
        ButtonModule,
        RippleModule,
        AvatarModule,
        ToolbarModule,
        SidebarModule,
        DividerModule,
        AccordionModule,
        PanelMenuModule,
        BreadcrumbModule,
        SplitButtonModule,
        AvatarGroupModule,
        ScrollPanelModule
    ]
})
export class ThirdPartyComponentsModule { }