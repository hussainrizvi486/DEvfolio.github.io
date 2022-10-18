let crossIcon = document.querySelector("#cross")
let menuIcon = document.querySelector("#menu")
// crossIcon.style.display="none"



menuIcon.addEventListener('click', ()=>{
    document.querySelector('.slider').classList.toggle('slider-go')
} )
crossIcon.addEventListener('click', ()=>{
    document.querySelector('.slider').classList.toggle('slider-go')
} )

// document.querySelector(".slider").addEventListener('click',()=>{
//     document.querySelector(".nav").classList.toggle('go')
//     if(document.querySelector(".nav").classList.contains('go')
//     ){
//         menuIcon.style.display='inline'
//         crossIcon.style.display='none'
//     }
//     else{
//         setTimeout(() => {
//         document.querySelector("#cross").style.display='inline';}, 300)
        
//         document.querySelector("#menu").style.display='none'
//     }
// })