import { Header } from "./header";
import { Link, Menu } from "./menu";
import AppResponse from "./response";
import PageConfigurations from "./page-configurations";
import IDefaultClassProperties from "./default-class-properties";
import { ControlBase, Sidebar } from "./common";
import { Position, ToastConfig } from "./toast";
import { Widgets, WidgetQuickButton, WidgetStatus } from "./widget";

interface BreadcrumbLink {
    caption: string;
    routerLink: string;
}


interface Controls extends Menu {
    name: string;
    component: string;
    page: "all" | string;
    type: "link" | "button" | "input";
    align: "left" | "right" | "middle";
}

export {
    Menu,
    Link,
    Header,
    Widgets,
    Sidebar,
    Controls,
    Position,
    ToastConfig,
    ControlBase,
    AppResponse,
    WidgetStatus,
    BreadcrumbLink,
    WidgetQuickButton,
    PageConfigurations,
    IDefaultClassProperties
}