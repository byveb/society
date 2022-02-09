import { Header, Menu } from ".";

interface PageConfigurations {
    menus: Menu[];
    header: Header;
    updateOn: Date;
    version: string;
}

export default PageConfigurations;