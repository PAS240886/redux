const counter = document.getElementById('counter')
const addBtn = document.getElementById('add')
const subBtn = document.getElementById('sub')
const asyncBtn = document.getElementById('async')
const themeBtn = document.getElementById('theme')
let count = 0


function render () {
   counter.textContent = count.toString()
}

render ()

addBtn.addEventListener('click', ()=>{
    count++
    render()
})

subBtn.addEventListener('click', ()=>{
    count--
    render()
})

asyncBtn.addEventListener('click', ()=>{

    setTimeout(() => {
        count++;
        render();
      }, 1000)
})

themeBtn.addEventListener('click', ()=>{
    document.body.classList.toggle('dark')
    render()
})
