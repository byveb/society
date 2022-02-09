import { Menu } from '@app/models';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { Utilities } from '@app/utilities';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'society-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuComponent implements OnInit, OnChanges {

  items: Array<Menu> = [];

  private LI_CLASS = ".item";

  @Input() listItems?: Array<Menu> | undefined;

  constructor(private changeDetectorRef: ChangeDetectorRef, private eleRef: ElementRef,
    private route: ActivatedRoute) { }

  ngOnInit(): void {

  }

  resetOpenClose(ele: HTMLElement, isChildEle: boolean): void {
    let resetEle = isChildEle ? this.getParentElement(ele) : ele;
    if (resetEle) {
      if (!resetEle.classList.contains("item-closed")) {
        resetEle.classList.add("item-closed");
      }
      if (resetEle.classList.contains("item-opened")) {
        resetEle.classList.remove("item-opened");
      }

      let iconEle = resetEle.querySelector(".s-icon-openclose i");
      if (iconEle?.classList.contains("pi-angle-up")) {
        iconEle?.classList.replace("pi-angle-up", "pi-angle-down");
      }
    }
    this.updateComponent();
  }

  initOpenCloseClasses(e: HTMLElement): void {
    if (e.classList.contains("item-opened") ||
      !e.classList.contains("item-closed")) {
      e.classList.add("item-closed");
    }

    let iconEle = e.querySelector(".item-link .s-icon-openclose i");
    if (iconEle && (iconEle?.classList.contains("pi-angle-up") ||
      !iconEle?.classList.contains("pi-angle-down"))) {
      iconEle?.classList.add("pi-angle-down");
    }
  }

  toggleOpenCloseClasses(e: HTMLElement): void {
    if (e.classList.contains("item-opened")) {
      e.classList.replace("item-opened", "item-closed");
    } else if (e.classList.contains("item-closed")) {
      e.classList.replace("item-closed", "item-opened");
    }

    let iconEle = e.querySelector(".item-link .s-icon-openclose i");
    if (iconEle?.classList.contains("pi-angle-up")) {
      iconEle?.classList.replace("pi-angle-up", "pi-angle-down");
    } else if (iconEle?.classList.contains("pi-angle-down")) {
      iconEle?.classList.replace("pi-angle-down", "pi-angle-up");
    }
  }

  updateMenuArraows(init: boolean = false): void {
    let mainItems = this.eleRef.nativeElement.querySelectorAll(".has-nested-item") as Array<HTMLElement>;
    if (mainItems && Array.isArray(Array.from(mainItems))) {
      mainItems.forEach(e => init ? this.initOpenCloseClasses(e) : this.toggleOpenCloseClasses(e));
    }
    this.updateComponent();
  }

  getParentElement(ele: HTMLElement): HTMLElement | null {
    return Utilities.getParentElement(ele, this.LI_CLASS);
  }

  openClose(event: Event, index: number): void {
    event.stopPropagation();
    this.updateMenuSelectedIndex(index);
  }

  updateMenuSelectedIndex(index: number): void {
    let item = (this.items as Array<Menu>);
    item.forEach(x => { if (x.isSelected) { x["isSelected"] = false; } });
    item[index] = {
      ...item[index],
      isSelected: !(item[index].isSelected || false)
    };
    this.updateComponent();
  }

  onLoadAutoSelecteMenu(isActive: boolean, index: number): void {
    if (isActive) {
      let eles = this.eleRef.nativeElement.querySelectorAll(".list-items a.active") as Array<HTMLElement>;
      if (eles) {
        let parentEle = this.getParentElement(eles[0]);
        if (parentEle && !parentEle.classList.contains("active-list")) {
          this.resetAllSelectedMainItem();
          parentEle?.classList.add("active-list");
        }
        if (!this.items[index].isSelected) {
          this.updateMenuSelectedIndex(index);
        }
      }
    }
    this.updateComponent();
  }

  resetAllSelectedMainItem(): void {
    let eles = this.eleRef.nativeElement.querySelectorAll("li.item") as Array<HTMLElement>;
    if (eles && Array.isArray(Array.from(eles))) {
      eles.forEach(e => {
        if (e.classList.contains("active-list")) {
          e.classList.remove("active-list");
        }
      });
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes) {
      if (changes["listItems"] && changes["listItems"].currentValue) {
        this.items.push(...this.listItems || []);
        this.updateComponent();
        this.updateMenuArraows(true);
      }
    }
  }

  updateComponent(): void {
    this.changeDetectorRef.detectChanges();
  }

}
