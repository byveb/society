import { DefaultState } from "../states";
import { DefaultActions } from "../actions";
import { Action, createReducer, on } from "@ngrx/store";

export const defaultFeatureKey = 'default';

const initialState: DefaultState = {
    pageConfig: undefined
};

const reducer = createReducer(
    initialState,
    on(DefaultActions.setPageConfig, (state, { pageConfig }) => ({
        ...state, pageConfig: {
            ...state.pageConfig,
            header: pageConfig.header,
            menus: pageConfig.menus,
            updateOn: pageConfig.updateOn,
            version: pageConfig.version,
            widgets: pageConfig.widgets
        }
    })));


export function defaultReducer(
    state: DefaultState | undefined,
    action: Action
): DefaultState {
    return reducer(state, action);
}