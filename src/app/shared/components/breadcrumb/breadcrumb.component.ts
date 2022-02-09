import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { BreadcrumbLink, Menu } from '@app/models';
import { MenuItem } from 'primeng/api';


@Component({
  selector: 'society-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit, OnChanges {
  @Input() navName: string | null = null;
  @Input() navLinks: Array<Menu> | undefined = [];

  items: MenuItem[] = [];

  home: MenuItem = {};

  links: Array<BreadcrumbLink> | undefined;

  constructor() { }

  ngOnInit(): void {
    this.items = [
      { label: 'Computer' },
      { label: 'Notebook' },
      { label: 'Accessories' },
      { label: 'Backpacks' },
      { label: 'Item' }
    ];

    this.home = { icon: 'pi pi-home', routerLink: '/' };
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes && changes["navLinks"] && changes["navLinks"].currentValue) {
      this.links = this.menuToLink(changes["navLinks"].currentValue);
    }
  }

  private menuToLink(menus: Array<Menu>): Array<BreadcrumbLink> {
    let _links = new Array<BreadcrumbLink>();
    menus.forEach(element => {
      _links.push({ caption: element.label, routerLink: element.href });
    });
    return _links;
  }

}
