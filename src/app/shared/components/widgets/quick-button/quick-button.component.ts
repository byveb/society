import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { WidgetQuickButton } from '@app/models';

@Component({
  selector: 'widget-quick-buttons',
  templateUrl: './quick-button.component.html',
  styleUrls: ['./quick-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuickButtonWidgetComponent implements OnInit, OnChanges {

  @Input() items: Array<WidgetQuickButton> = [];

  constructor(private changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  ngOnChanges(change: SimpleChanges): void {
    if (change && change["items"].currentValue) {
      this.items = change["items"].currentValue;
      this.updateComponent();
    }
  }

  updateComponent(): void {
    this.changeDetectorRef.detectChanges();
  }

}
