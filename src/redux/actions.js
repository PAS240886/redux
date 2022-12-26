import {INCREMENT} from './types'

export function increment () {
    return {
        type:INCREMENT
    }
}


export function decrement () {
    return function (dispatch) {
        setTimeout (()=> {
            dispatch({type:ASYNC_INCREMENT})
        }, 2000)
      
    }
}

export function asyncIncrement () {
    return {
        type:ASYNC_INCREMENT
    }
}

export function changeTheme (newTheme) {
    return {
        type: CHANGE_THEME,
        payload: newTheme
    }
}

