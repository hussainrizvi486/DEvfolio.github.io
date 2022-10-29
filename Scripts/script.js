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






