import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'society-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent implements OnInit {

  constructor(public changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.changeDetectorRef.detectChanges();
  }

}
