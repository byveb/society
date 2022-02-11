import { ChangeDetectorRef, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { WidgetStatus } from '@app/models';

@Component({
  selector: 'widget-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss']
})
export class StatusWidgetComponent implements OnInit, OnChanges {

  totalValue: number = 0;
  @Input() items: WidgetStatus | undefined;

  constructor(private changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit(): void {
    
  }

  ngOnChanges(change: SimpleChanges): void {
    if (change && change["items"].currentValue) {
      this.updateComponent();
    }
  }

  updateComponent(): void {
    this.changeDetectorRef.detectChanges();
  }

}
