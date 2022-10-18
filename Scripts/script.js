const text = document.getElementById("text")
const Phrases = ["A Developer. ", "A Designer. ", "A Freelancer. "]
let i = 0
let j = 0
let current = []
let isDeleting = false
let isEnd = false

function loop() {
    isEnd = false
    text.innerHTML = current.join("")
    
    if (i < Phrases.length) {
        console.log(Phrases[i])

        if (!isDeleting && j <= Phrases[i].length) {
            current.push(Phrases[i][j])
            j++
            text.innerHTML = current.join("")
        }
        if (isDeleting && j <= Phrases[i].length) {
            current.pop(Phrases[i][j])
            j--
            text.innerHTML = current.join("")
        }

        if (j == Phrases[i].length) {
            isEnd = true
            isDeleting = true
        }

        if (isDeleting && j == 0) {
            current = []
            isDeleting = false
            i++
            if (i === Phrases.length) {
                i = 0
            }
        }
    }
    
    const spedUp = Math.random() * (80 -50) + 50
    const normalSpeed = Math.random() * (300 -200) + 200
    const time = isEnd ? 2000 : isDeleting ? spedUp : normalSpeed
    setTimeout(loop, time)
}

loop()







// let crossIcon = document.querySelector("#cross")
// let menuIcon = document.getElementById("menu")

// crossIcon.style.display="none"

// document.querySelector(".slider").addEventListener('click',()=>{
//     document.querySelector(".sidebar-nav").classList.toggle('sidebar-go')
//     if(document.querySelector(".sidebar-nav").classList.contains('sidebar-go')
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