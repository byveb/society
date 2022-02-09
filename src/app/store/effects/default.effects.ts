import { Store } from "@ngrx/store";
import { AppState } from "../reducers";
import { Router } from "@angular/router";
import { Injectable } from "@angular/core";
import { DefaultActions } from "../actions";
import { delay, map, switchMap } from "rxjs";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { PageConfigurationService } from "@app/shared/services";

@Injectable()
export class DefaultEffects {
    constructor(private router: Router, private actions$: Actions, private store$: Store<AppState>,
        private pageConfigService: PageConfigurationService) { }

    loadPageConfig$ = createEffect(() => this.actions$.pipe(
        ofType(DefaultActions.loadPageConfig),
        switchMap(action => this.pageConfigService.Get().pipe(delay(3000),
            map(data => DefaultActions.setPageConfig({ pageConfig: data }))
        )))
    );
}