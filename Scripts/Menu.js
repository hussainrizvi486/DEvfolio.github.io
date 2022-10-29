let crossIcon = document.querySelector("#cross")
let menuIcon = document.querySelector("#menu")
// crossIcon.style.display="none"



menuIcon.addEventListener('click', ()=>{
    document.querySelector('.slider').classList.toggle('slider-go')
} )
crossIcon.addEventListener('click', ()=>{
    document.querySelector('.slider').classList.toggle('slider-go')
} )

