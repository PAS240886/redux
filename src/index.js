import {INCREMENT, DECREMENT} from './redux/types'
import { createStore, applyMiddleware, compose } from 'redux'
import {logger} from 'redux-logger'
import { rootReducer } from './redux/rootReducer'
import { asyncIncrement, changeTheme, decrement, increment } from './redux/actions'
import thunk from 'redux-thunk'
const counter = document.getElementById('counter')
const addBtn = document.getElementById('add')
const subBtn = document.getElementById('sub')
const asyncBtn = document.getElementById('async')
const themeBtn = document.getElementById('theme')


const store = createStore (rootReducer, compose (applyMiddleware(thunk, logger)))



addBtn.addEventListener('click', ()=>{
    store.dispatch (increment)
})

subBtn.addEventListener('click', ()=>{
    store.dispatch (decrement)
})

store.subscribe( ()=> {
const state = store.getState()
counter.textContent = state.counter
document.body.className = state.theme.value
})

asyncBtn.addEventListener('click', ()=>{
store.dispatch(asyncIncrement())
})

themeBtn.addEventListener('click', ()=>{
    const newTheme = document.body.classList.contains('Light') ? 'dark' : 'light'
store.dispatch(changeTheme(newTheme))
})
