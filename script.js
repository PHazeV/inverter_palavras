const form = document.querySelector('.form')
const input = document.querySelector('.input')
const output = document.querySelector('.output')

form.addEventListener('input', (event) => {
    event.preventDefault()
    let reverse = input.value
    let showReverse = Array.from(reverse).reverse().join('')
    console.log(showReverse)
    output.innerHTML = showReverse
})