import {CHANGE_THEME, DECREMENT, DISABLED_BUTTON, ENABLED_BUTTON, INCREMENT} from "./types";

export function increment() {
    return {
        type: INCREMENT
    }
}

export function decrement() {
    return {
        type: DECREMENT
    }
}

export function enabledButton() {
    return {
        type: ENABLED_BUTTON
    }
}

export function disabledButton() {
    return {
        type: DISABLED_BUTTON
    }
}

export function changeTheme(newTheme) {
    return {
        type: CHANGE_THEME,
        payload: newTheme
    }
}

export function asyncIncrement() {
    return function (dispatch) {
        dispatch(disabledButton())
        setTimeout(() => {
            dispatch(enabledButton())
            dispatch(increment())
        }, 2000)

    }

}
