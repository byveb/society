import { PageConfigurations } from "@app/models";
import { createAction, props } from "@ngrx/store";

export const getPageConfig = createAction('[Page] Get Page Configurations');
export const setPageConfig = createAction('[Page] Set Page Configurations',
props<{ pageConfig: PageConfigurations }>());
export const loadPageConfig = createAction('[Page] Load Page Configurations');