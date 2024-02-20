const catElement = document.getElementById("cat");
const allBtn = document.querySelectorAll('button');
let catInterval;
let catSpeedValue = 100; 
let catDirection = 1; 

console.log(catElement);
console.log(allBtn);

const catForward = () => {
    let currentPosition = catElement.offsetLeft;

    if (currentPosition < (window.innerWidth - catElement.width) && catDirection === 1) {
        currentPosition += 10;
    } else if (currentPosition >= (window.innerWidth - catElement.width) && catDirection === 1) {
        clearInterval(catInterval);
    } else {
        currentPosition -= 10;
    }

    catElement.style.left = currentPosition + "px";
};

const catWalk = () => {
    console.log("Start");
    clearInterval(catInterval);
    catInterval = setInterval(catForward, catSpeedValue);
};
const pause = () => {
    console.log("Stop");
    clearInterval(catInterval);
};
    const turn = () => {
        catDirection *= -1; // Richtung umkehren
        catElement.style.transform = `scaleX(${catDirection})`;
    
        // Wenn die Katze gerade gestoppt wurde, starte die Bewegung erneut
        if (!catInterval) {
            catInterval = setInterval(catForward, catSpeedValue);
        }
    };