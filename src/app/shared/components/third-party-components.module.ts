import { MenuModule } from 'primeng/menu';
import { NgModule } from "@angular/core";
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
import {ScrollPanelModule} from 'primeng/scrollpanel';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { SplitButtonModule } from 'primeng/splitbutton';

import en from "@angular/common/locales/en";
import { registerLocaleData } from "@angular/common";

registerLocaleData(en);


@NgModule({
    declarations: [
    ],
    providers: [
        MenuModule,
        BadgeModule,
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
    imports: [
    ],
    exports: [
        MenuModule,
        BadgeModule,
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