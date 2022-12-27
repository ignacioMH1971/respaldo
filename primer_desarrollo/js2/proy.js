let buttons = document.getElementsByClassName('btn');

// let buttonRed = buttons[0]
// let buttonBlue = buttons[1]
// let buttonBlack = buttons[2]

console.log(buttons)
// variables
let buttonRed = document.querySelector('button.btn.red')
let buttonBlue = document.querySelector('button.btn.blue')
let buttonBlack = document.querySelector('button.btn.black')
let buttonYellow = document.querySelector('button.btn.yellow')


let buttonsolid1 = document.querySelector('button.btn.solid1')
let buttonsolid2 = document.querySelector('button.btn.solid2')
let buttonsolid3 = document.querySelector('button.btn.solid3')


let car = document.querySelector('div.car')
let ruedadel = document.querySelector('img.ruedadel')
let ruedatras = document.querySelector('img.ruedatras')


//funciones

// function changeToRed() {
//   //element.style.property = new style
//   car.style.backgroundColor = 'red'
// }

// function changeToBlue() {
//   car.style.backgroundColor = 'blue'
// }

// function changeToBlack() {
//   car.style.backgroundColor = 'black'
// }

function changeColor(color){
  car.style.backgroundColor = color;
}
function changeBorder(border){
    ruedadel.style.border = border;
    ruedatras.style.border = border;
}


//eventos

buttonRed.onclick = function(){
  changeColor('red')
}
buttonBlue.onclick = function(){
  changeColor('blue')
}
buttonBlack.onclick = function(){
  changeColor('black')
}
buttonYellow.onclick = function(){
  changeColor('yellow')
}

buttonsolid1.onclick = function(){
    //changeBorder('thick solid red')
    changeBorder('20px solid black')
}
buttonsolid2.onclick = function(){
    //changeBorder('thick solid red')
    changeBorder('30px solid black')
}
buttonsolid3.onclick = function(){
    //changeBorder('thick solid red')
    changeBorder('40px solid black  ')
}
