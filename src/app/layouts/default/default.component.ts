import { distinctUntilChanged, Observable } from 'rxjs';
import { Keys } from '@app/utilities';
import { select, Store } from '@ngrx/store';
import { DefaultState } from '@store/states';
import { AppState } from '@store/reducers';
import { PrimeNGConfig } from 'primeng/api';
import { DefaultActions } from '@store/actions';
import { selectDefaultState } from '@store/selectors';
import { AppLoggerService, AppStorageService } from '@services/index';
import { Header, IDefaultClassProperties, Menu, PageConfigurations, Sidebar } from '@models/index';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'default-layout',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DefaultLayoutComponent implements IDefaultClassProperties, OnInit, OnDestroy {
  name: string = "DefaultLayout";
  id: string = "DefaultLayoutComponent";
  typeName: string = "DefaultLayoutComponent";

  header: Header | undefined;

  sidebar: Sidebar = {
    zIndex: 0,
    modal: false,
    blockScroll: true,
    showCloseIcon: false,
    menus: new Array<Menu>(),
    classList: Array<string>()
  };

  private _isOpen: boolean = false;
  isOpenChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  private _defaultState$: Observable<DefaultState | undefined> | undefined;

  constructor(private logger: AppLoggerService, private storage: AppStorageService,
    private store$: Store<AppState>, private changeDetectorRef: ChangeDetectorRef,
    private pConfig: PrimeNGConfig) { }

  ngOnInit(): void {
    this.pConfig.ripple = true;
    this._isOpen = this.storage.getItem(Keys.isBarOpen);
    this.store$.dispatch(DefaultActions.loadPageConfig());
    this._defaultState$ = this.store$.pipe(select(selectDefaultState));
    this.afterNgOnInit();
  }

  afterNgOnInit(): void {
    this._defaultState$?.pipe(distinctUntilChanged()).subscribe(res => {
      this.header = res?.pageConfig?.header;
      this.sidebar.menus = res?.pageConfig?.menus;
      this.updateComChange();
    });
  }

  public get isOpen(): boolean {
    return this._isOpen;
  }

  public set isOpen(isOpen: boolean) {
    this._isOpen = isOpen;
    this.storage.setItem(Keys.isBarOpen, this._isOpen);
  }

  private updateComChange() {
    this.changeDetectorRef.detectChanges();
  }

  ngOnDestroy(): void {

  }

}