import * as fromStore from '../reducers';
import { DefaultState } from '../states';
import { createFeatureSelector, createSelector } from '@ngrx/store';

const getDefault = (state: DefaultState) => state;
const getWidgets = (state: DefaultState) => state?.pageConfig?.widgets;

export const selectFeatureDefaultState = createFeatureSelector<DefaultState>(fromStore.DefaultReducer.defaultFeatureKey);

export const selectDefaultState = createSelector(selectFeatureDefaultState, getDefault);
export const selectWidgetsList = createSelector(selectFeatureDefaultState, getWidgets);
