const form = document.querySelector('.form')
const input = document.querySelector('.input')
const p = document.querySelector('.p')

form.addEventListener('input', (event) => {
    event.preventDefault()
    let reverse = input.value
    let showReverse = Array.from(reverse).reverse().join('')
    console.log(showReverse)
    p.innerHTML = showReverse
})