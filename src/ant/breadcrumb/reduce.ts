import { ACTION, UPDATE } from './action';
import { MainBreadcrumbState } from './MainBreadcrumb';
import { Reducer } from "redux";

export const BreadcrumbReducer: Reducer = (
    state: MainBreadcrumbState,
    action: ACTION
): MainBreadcrumbState => {
    switch (action.type) {
        case UPDATE:
            debugger;
            return { ...state,location: action.path };
        default:
            return state;
    }
};