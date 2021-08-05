import './styles.css'
import {rootReducer} from "./redux/rootReducer";
import {applyMiddleware, createStore} from 'redux'
import thunk from "redux-thunk";
import logger from 'redux-logger'
import {asyncIncrement, changeTheme, decrement, increment} from "./redux/actions";
// const {createStore} = require("./createStore");
// import {DECREMENT, INCREMENT} from "./redux/types";
const subBtn = document.getElementById('sub')
const addBtn = document.getElementById('add')
const counter = document.getElementById('counter')
const asyncBtn = document.getElementById('async')
const themeBtn = document.getElementById('theme')

// function logger(state) {
//     return function (next) {
//         return function (action) {
//             console.log('act',action);
//             console.log('st',state)
//             return next(action)
//         }
//     }
// }

const store = createStore(rootReducer,
    applyMiddleware(thunk, logger))


addBtn.addEventListener('click', () => {
    store.dispatch(increment())

})
subBtn.addEventListener('click', () => {
    store.dispatch(decrement())

})
asyncBtn.addEventListener('click', () => {
// setTimeout(()=>{
//     store.dispatch(increment())
// },2000)
    store.dispatch(asyncIncrement())
})
themeBtn.addEventListener('click', () => {
    // document.body.classList.toggle('dark')
    const newTheme = document.body.classList.contains('light') ? 'dark' : 'light'
    store.dispatch(changeTheme(newTheme))
})

store.subscribe(() => {
    // console.log(store.getState())
    const state = store.getState()
    counter.textContent = state.counter
    document.body.className = state.theme.value
})
store.dispatch({type: 'INIT__APP'})
