import { Menu } from '@app/models';
import { AfterContentInit, AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewEncapsulation } from '@angular/core';
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
  private _isLinkActivated: boolean = false;
  @Input() listItems?: Array<Menu> | undefined;

  constructor(private changeDetectorRef: ChangeDetectorRef, private eleRef: ElementRef,
    private route: ActivatedRoute) { }


  ngOnInit(): void {

  }

  openClose(event: Event, index: number): void {
    let _ele = event.target as HTMLElement;
    this.updateOpenClose(_ele);
  }

  updateOpenClose(ele: any): void {
    let _upperEle = Utilities.getParentElement(ele, ".item");

    if (_upperEle?.classList.contains("item-opened")) {
      _upperEle?.classList.replace("item-opened", "item-closed");
    } else {
      _upperEle?.classList.replace("item-closed", "item-opened");
    }

    let arrowEle = _upperEle?.querySelector(".item-link .s-icon-openclose i");
    if (arrowEle?.classList.contains("pi-angle-down")) {
      arrowEle?.classList.replace("pi-angle-down", "pi-angle-up");
    } else {
      arrowEle?.classList.replace("pi-angle-up", "pi-angle-down");
    }
  }

  updateMenuArraows(): void {
    let _eles = this.eleRef.nativeElement.querySelectorAll(".has-nested-item") as Array<HTMLElement>;
    _eles.forEach(e => {
      let _arrowIconEle = e.querySelector(".item-link .s-icon-openclose i");
      if (!_arrowIconEle?.classList.contains("pi-angle-up") &&
        !_arrowIconEle?.classList.contains("pi-angle-down")) {
        _arrowIconEle?.classList.add("pi-angle-down");
      }
    });
    this.updateComponent();
  }

  resetOpenClose(): void {
    let _ele = this.eleRef.nativeElement.querySelectorAll(".item-opened") as Array<HTMLElement>;
    _ele.forEach(x => x.classList.replace("item-opened", "item-closed"));
    this.updateComponent();
  }

  removeAllActiveClass() {
    let _ele = this.eleRef.nativeElement.querySelectorAll(".active") as Array<HTMLElement>;
    if (_ele && _ele.length > 0) {
      _ele.forEach(x => {
        x.classList.contains("active") ? x.classList.remove("active") : null;
      })
    }
    
    this.resetOpenClose();
    this.updateComponent();
  }

  activeSelectedParentElement(event: Event, selector: string): void {
    event.preventDefault();
    event.stopPropagation();

    let _ele = event.target as HTMLElement;
    this.updateActiveSelectedParentElement(_ele, selector);
  }

  updateActiveSelectedParentElement(ele: any, selector: string, clear: boolean = true): void {
    if (clear) {
      this.removeAllActiveClass();
    }
    let _upperEle = Utilities.getParentElement(ele, selector);
    if (_upperEle) {
      _upperEle?.classList.add("active");
      this.updateOpenClose(ele);
    }
  }

  onLoadLinkActived(isActived: boolean): void {
    if (isActived && !this._isLinkActivated) {
      let _ele = this.eleRef.nativeElement.querySelector(".list-items a.active");
      this.updateActiveSelectedParentElement(_ele, ".item", false);
      this._isLinkActivated = true;
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes) {
      if (changes["listItems"] && changes["listItems"].currentValue) {
        this.resetOpenClose();
        this.updateComponent();
        this.updateMenuArraows();
      }
    }
  }

  updateComponent(): void {
    this.changeDetectorRef.detectChanges();
  }

}
