import { DefaultReducer } from '.';
import { DefaultState } from '../states';
import { debug } from './debug.reducer';
import * as fromRouter from '@ngrx/router-store';
import { RouterStateUrl } from '@app/shared/services';
import { environment } from 'environments/environment';
import { ActionReducer, ActionReducerMap, MetaReducer } from '@ngrx/store';
import { initStateFromLocalStorage } from './init-state-from-local-storage.reducer';

export interface AppState {
    default: DefaultState;
    router: fromRouter.RouterReducerState<RouterStateUrl>;
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
    router: fromRouter.routerReducer,
    default: DefaultReducer.defaultReducer,
};


export function logger(reducer: ActionReducer<any>): ActionReducer<any> {
    return (state, action) => {
        const result = reducer(state, action);
        console.groupCollapsed(action.type);
        console.log('prev state', state);
        console.log('action', action);
        console.log('next state', result);
        console.groupEnd();
        return result;
    }
}

export const metaReducers: MetaReducer<AppState>[] = !environment.production
    ? [logger] : [initStateFromLocalStorage];

if (!environment.production) {
    if (!environment.test) {
        metaReducers.unshift(debug);
    }
}

export const { selectRouteData } = fromRouter.getSelectors();