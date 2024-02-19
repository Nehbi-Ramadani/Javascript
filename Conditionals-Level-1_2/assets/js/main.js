
const tempInput = document.body.querySelector("input:nth-of-type(1)");
let result = document.body.querySelector("p");
console.log(result)
let pText = "Die Wetterqualität ist: "

function wetter() {
    let temp = Number(tempInput.value)
    if ( 8<= temp && temp<= 10 ) {
        result.textContent = pText + "Super"
    } else if ( 6 === temp || temp === 7) {
        result.textContent = pText + "Gut"
    } else if( 3 <= temp && temp <= 5){
        result.textContent = pText + "Okay"
    } else {
        result.textContent = pText + "Schlecht"
    }
}    