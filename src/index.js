import './styles.css'
import {rootReducer} from "./redux/rootReducer";
import {applyMiddleware, createStore} from 'redux'
import thunk from "redux-thunk";
import {asyncIncrement, decrement, increment} from "./redux/actions";
// const {createStore} = require("./createStore");
// import {DECREMENT, INCREMENT} from "./redux/types";
const subBtn = document.getElementById('sub')
const addBtn = document.getElementById('add')
const counter = document.getElementById('counter')
const asyncBtn = document.getElementById('async')
const themeBtn = document.getElementById('theme')

const store = createStore(rootReducer,
    0,
    applyMiddleware(thunk))


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
})

store.subscribe(() => {
    // console.log(store.getState())
    const state = store.getState()
    counter.textContent = state
})
store.dispatch({type: 'INIT__APP'})
