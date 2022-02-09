import { Header } from "./header";
import { Link, Menu } from "./menu";
import AppResponse from "./response";
import PageConfigurations from "./page-configurations";
import IDefaultClassProperties from "./default-class-properties";
import { ControlBase, Sidebar } from "./common";

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
    Sidebar,
    Controls,
    ControlBase,
    AppResponse,
    BreadcrumbLink,
    PageConfigurations,
    IDefaultClassProperties
}