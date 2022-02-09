import * as fromStore from '../reducers';
import { DefaultState } from '../states';
import { createFeatureSelector, createSelector } from '@ngrx/store';

const selectDefault = (state: DefaultState) => state;
const selectPageConfig = (state: DefaultState) => state.pageConfig;
export const selectFeatureDefaultState = createFeatureSelector<DefaultState>(fromStore.DefaultReducer.defaultFeatureKey);

export const selectDefaultState = createSelector(selectFeatureDefaultState, selectDefault);
export const pageConfig = createSelector(selectDefaultState, selectPageConfig);
