import {combineReducers} from 'redux'
import { INCREMENT, DECREMENT, ASYNC_INCREMENT } from "./types"
function countReducer (state = 0, action) {
    if(action.type === INCREMENT) {
    return state ++
    } else if (action.type === DECREMENT) {
        return state --
    } else if (action.type === ASYNC_INCREMENT) {
        state + 10
    }
    return state
}

const initialThemeState = {
    value: 'light'
}
function themeRedcurer (state = initialThemeState, action) {
    switch (action.type) {
        case CHANGE_THEME:
            return {...state, value: action.payload}
        default: return state
    }
return state
}

export const rootReducer = combineReducers({
    counter:countReducer,
    theme:themeRedcurer
})