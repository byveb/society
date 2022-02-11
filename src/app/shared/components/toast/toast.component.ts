import { ToastConfig } from '@app/models/toast';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'society-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToastComponent implements OnInit, OnChanges {

  @Input() config: ToastConfig = {
    styleClass: "society-toast", position: "top-right", baseZIndex: 0, autoZIndex: true, preventDuplicates: false,
    preventOpenDuplicates: false
  };
  @Output() close: EventEmitter<any> = new EventEmitter<any>();

  constructor(private changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit(): void {
    console.log(this.config);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes && changes["config"].currentValue) {
      this.updateComponent();
    }
  }

  onClose(event: any): void {
    this.close.emit(event);
  }

  updateComponent(): void {
    this.changeDetectorRef.detectChanges();
  }

}
