import {CHANGE_THEME, DECREMENT, DISABLED_BUTTON, ENABLED_BUTTON, INCREMENT} from "./types";
import {combineReducers} from "redux";

function counterReducer(state = 0, action) {
    if (action.type === INCREMENT) {
        return state + 1
    }
    else if (action.type === DECREMENT) {
        return state - 1
    }
    return state
}

const initialThemesState = {
    value: 'light',
    disabled: false
}

function themeReducer(state = initialThemesState, action) {
    switch (action.type) {
        case CHANGE_THEME:
            return {...state, value: action.payload}
        case ENABLED_BUTTON:
            return {...state, disabled: false}
        case DISABLED_BUTTON:
            return {...state, disabled: true}
        default:
            return state
    }

}

export const rootReducer = combineReducers({
    counter: counterReducer,
    theme: themeReducer,
})
