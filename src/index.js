import './styles.css'

let state = 0
const subBtn = document.getElementById('sub')
const addBtn = document.getElementById('add')
const counter = document.getElementById('counter')
const asyncBtn = document.getElementById('async')
const themeBtn = document.getElementById('theme')

function render() {
    counter.textContent = state.toString()
}

addBtn.addEventListener('click', () => {
    state++
    render()
})
subBtn.addEventListener('click', () => {
    state--
    render()
})
asyncBtn.addEventListener('click', () => {
    setTimeout(() => {
        state++
        render()
    }, 2000)
})
themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark')
})


render()
