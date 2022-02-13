import { select, Store } from '@ngrx/store';
import { MenuItem } from '@app/shared/modules';
import { WidgetQuickButton } from '@app/models';
import { DefaultState } from '@app/store/states';
import { distinctUntilChanged, Observable } from 'rxjs';
import { selectDefaultState } from '@app/store/selectors';
import { AppLoggerService, AppStorageService } from '@app/shared/services';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'page-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardPageComponent implements OnInit {

  items: MenuItem[] = [];
  widgetButtons: Array<WidgetQuickButton> = [];

  private _defaultState$: Observable<DefaultState> | undefined;

  constructor(private logger: AppLoggerService, private storage: AppStorageService,
    private store$: Store<DefaultState>, private changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit(): void {
    this._defaultState$ = this.store$.pipe(select(selectDefaultState));
    this.afterNgOnInit();
    this.updateComponent();
  }

  afterNgOnInit(): void {
    this._defaultState$?.subscribe(res => {
      this.widgetButtons = (res.pageConfig?.widgets.find(x => x.type == "quickbuttons")?.control as Array<WidgetQuickButton>) ?? [];
      this.updateComponent();
    });
  }

  updateComponent() {
    this.changeDetectorRef.detectChanges();
  }

}
