const ageJohn = 22;
const heightJohn = 170;
const ageMeike = 34;
const heightMeike = 168;

const punkteJohn = (ageJohn * 5 ) + heightJohn;
console.log("John score: " + punkteJohn)
const punkteMeike = (ageMeike * 5 ) + heightMeike;
console.log("Meike Score: " + punkteMeike)

function vergleich() {
    if (punkteJohn > punkteMeike) {
        console.log("John gewinnt das Spiel mit  " + punkteJohn + " Punkten!");
    } else if(punkteJohn === punkteMeike) {
        console.log("Unentschieden!!! versucht es in paar Jahren wieder.")
    }else {
        console.log("Meike gewinnt das Spiel mit  " + punkteMeike + " Punkten!")
    }
}

vergleich();