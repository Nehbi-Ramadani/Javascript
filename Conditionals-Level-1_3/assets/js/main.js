


const ageInput = document.body.querySelector("input:nth-of-type(1)");
const result = document.body.querySelector("p");


function greaterThan() {
    let age = Number(ageInput.value);
    if (age < 18) {
        result.textContent = "Du darfst noch nicht Shisha rauchen";
    } else if(age === 18){
        result.textContent = "Genieß es, übertreib es aber nicht ;)";
    } else {
        result.textContent = "Ja, Du kannst Shisha rauchen";
    }
}