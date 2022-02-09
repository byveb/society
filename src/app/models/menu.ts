import { ControlBase } from ".";

interface Link extends ControlBase {
    href: string;    
    segments?: Array<string>    
}

interface Menu extends Link {
    items?: Array<Menu>;
}

export { Menu, Link };