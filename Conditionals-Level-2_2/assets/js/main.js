const range = document.body.querySelector("input[type=range]");
const rangeOn = document.body.querySelector("span");
const concern = document.body.querySelector("p:nth-of-type(1)")
const effect = document.body.querySelector("p:nth-of-type(2)")

rangeOn.textContent = range.value;





function checkAirQuality() {
    let rangeNum = Number(range.value);
    rangeOn.textContent = rangeNum;
    if (rangeNum <= 50) {
        concern.textContent = "Level of health concern: Good";
        effect.textContent = "Level of health effect: Little or no risk";
        document.body.classList.add("good");
        document.body.classList.remove("nothealthy");
        document.body.classList.remove("moderate");
    } else if (51 <= rangeNum && rangeNum < 100){
        concern.textContent = "Level of health concern: Moderate";
        effect.textContent = "Level of health effect: Acceptable";
        document.body.classList.add("moderate");
        document.body.classList.remove("nothealthy");
        console.log(range.value)
    }else if (rangeNum>100){
        document.body.classList.remove("good")
        document.body.classList.remove("moderate");
        document.body.classList.add("nothealthy");
        concern.textContent = " Level of health concern: Unhealthy for sensitive groups";
        effect.textContent = "Level of health effect: Generable publics not likely affected";
    }
}    


