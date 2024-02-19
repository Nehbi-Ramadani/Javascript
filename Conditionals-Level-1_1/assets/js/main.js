
let ageInput = document.body.querySelector("input:nth-of-type(1)")
let result = document.body.querySelector("p")
function checkAge() {
    if (Number(ageInput.value) < 18) {
        result.textContent = "Under 18"
    } else if(Number(ageInput.value) === 18){
        result.textContent = "Enjoy your 18"
    } else {
        result.textContent = "Over 18"
    }
}