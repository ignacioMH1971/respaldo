// let name = document.getElementById('name')
// let buttons = document.getElementsByClassName('btn')
// let pes = document.getElementsByTagName('p')

// console.log(name)
// console.log(buttons)
// console.log(pes)

let name = document.querySelector('#name')
let buttons = document.querySelectorAll('.btn')
let button = document.querySelector('.btn')
let parrafo = document.querySelector('p')
let input = document.querySelector('#input')


//funciones

function picarle (){
  name.innerHTML = input.value
}

//eventos
button.onclick = picarle;