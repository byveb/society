import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { WidgetStatus } from '@app/models';
import { UIChart } from 'primeng/chart';

@Component({
  selector: 'widget-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss']
})
export class StatusWidgetComponent implements OnInit, OnChanges, AfterViewInit {

  totalValue: number = 0;
  @Input() items: WidgetStatus | undefined;


  constructor(private changeDetectorRef: ChangeDetectorRef) { }

  chartPlugins = [{
    beforeInit: function (chart: any, args: any, options: any) {

    }
  }]

  ngOnInit(): void {
    
  }

  ngOnChanges(change: SimpleChanges): void {
    if (change && change["items"].currentValue) {
      this.updateComponent();
    }
  }

  ngAfterViewInit(): void {
  }


  updateComponent(): void {
    this.changeDetectorRef.detectChanges();
  }

}
