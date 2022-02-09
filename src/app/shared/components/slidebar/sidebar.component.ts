import { Controls, Menu, Sidebar } from '@app/models';
import { ChangeDetectorRef, Component, EventEmitter, HostBinding, Input, OnChanges, OnInit, Output, SimpleChanges, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'society-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SlidebarComponent implements OnInit, OnChanges {
  control: Controls | undefined;
  activeLinkClass: string = "active";
  private _isOpen: boolean = false;

  @HostBinding('class') class = 'sidebar';
  @Input() sideBar: Sidebar = { zIndex: 0, blockScroll: true, classList: [], menus: [], modal: false, showCloseIcon: false };

  @Input() isVisible: boolean = false;
  @Output() isVisibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(public changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.updateComponent();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes) {
      if (changes["isVisible"] && changes["isVisible"].currentValue) {
        this._isOpen = changes["isVisible"].currentValue;
        this.updateComponent();
      }
      if (changes["sideBar"] && changes["sideBar"].currentValue) {
        this.updateComponent();
      }
    }
  }

  public get toggleChange(): boolean {
    return this._isOpen;
  }

  public set toggleChange(v: boolean) {
    this._isOpen = v;
    this.isVisibleChange.emit(!!this._isOpen);
  }

  public updateComponent(){
    this.changeDetectorRef.detectChanges();    
  }

}
