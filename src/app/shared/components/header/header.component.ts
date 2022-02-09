import { Observable, of } from 'rxjs';
import { Controls, Header } from '@app/models';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'society-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {
  
  @Input() header: Header | undefined;

  @Input() barToggel: boolean = false;
  @Output() barToggelChange: EventEmitter<boolean> = new EventEmitter();

  items: MenuItem[] = [];
  activeLinkClass: string = "active";
  
  leftSideControls$: Observable<Controls[] | undefined> | undefined;
  rightSideControls$: Observable<Controls[] | undefined> | undefined;
  middleSideControls$: Observable<Controls[] | undefined> | undefined;

  constructor(public changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit(): void {    
    this.changeDetectorRef.detectChanges();
  }
  
  onChangeUpdateControls(): void {
    this.leftSideControls$ = of(this.header?.controls.filter(x => x.align == "left"));
    this.rightSideControls$ = of(this.header?.controls.filter(x => x.align == "right"));
    this.middleSideControls$ = of(this.header?.controls.filter(x => x.align == "middle"));
  }

  onToggel(): void {
    this.barToggelChange.emit(!this.barToggel);
  }
}
