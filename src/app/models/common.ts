import { Menu } from ".";

export interface ControlBase {
    label: string;
    hideIcon: boolean;
    hideLabel: boolean;
    icon: { type: string, name: string };
}

export interface Sidebar {
    zIndex: number;
    modal: boolean;
    menus?: Array<Menu>;
    blockScroll: boolean;
    showCloseIcon: boolean;
    classList?: Array<string>;
}