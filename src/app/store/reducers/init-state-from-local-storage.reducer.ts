import { AppState } from ".";
import { ActionReducer, INIT, UPDATE } from "@ngrx/store";
import { AppStorageService } from "@app/shared/services";

export function initStateFromLocalStorage(
    reducer: ActionReducer<AppState>
  ): ActionReducer<AppState> {
    return function (state, action) {
      const newState = reducer(state, action);
      if ([INIT.toString(), UPDATE.toString()].includes(action.type)) {
        return { ...newState, ...AppStorageService.loadInitialState() };
      }
      return newState;
    };
  }