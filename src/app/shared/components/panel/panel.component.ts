import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'society-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PanelComponent implements OnInit, OnChanges {

  @Input() style: string = "";
  @Input() header: boolean = false;
  @Input() footer: boolean = false;
  @Input() styleClass: string = "";
  @Input() toggleable: boolean = false;

  constructor(private changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit(): void {

  }

  ngOnChanges(): void {
    this.changeDetectorRef.detectChanges();
  }

}
