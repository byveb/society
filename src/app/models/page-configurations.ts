import { Header, Menu, Widgets } from ".";

interface PageConfigurations {
    menus: Menu[];
    header: Header;
    updateOn: Date;
    version: string;
    widgets: Widgets;
}

export default PageConfigurations;