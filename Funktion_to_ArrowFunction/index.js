// function addiere(zahl1, zahl2) {
//     const summe = zahl1 + zahl2;
//     console.log("Die Summe von " + zahl1 + " und " + zahl2 + " ist: " + summe);
//     return summe;
// }

// addiere(5, 3);

// function findeMaximalwert(liste) {
//     const maximalwert = Math.max(...liste);
//     console.log("Der größte Wert in der Liste ist: " + maximalwert);
//     return maximalwert;
// }

// findeMaximalwert([2, 8, 5, 12, 3]);

// function istGerade(zahl) {
//     const gerade = zahl % 2 === 0;
//     console.log(zahl + " ist gerade: " + gerade);
//     return gerade;
// }

// istGerade(7);

//=================================================================================================================

const addiere = (zahl1, zahl2) => {
    const summe = zahl1 + zahl2;
    console.log(`Die Summe von ${zahl1} und ${zahl2} ist: ${summe}`);
    return summe;
};

addiere(5, 3);



const findeMaximalwert = (liste) => {
    const maximalwert = Math.max(...liste);
    console.log(`Der größte Wert in der Liste ist: ${maximalwert}`);
    return maximalwert;
};

findeMaximalwert([2, 8, 5, 12, 3]);


const istGerade = (zahl) => {
    const gerade = zahl % 2 === 0;
    console.log(`${zahl} ist gerade: ${gerade}`);
    return gerade;
};

istGerade(7);



const subtraktion = (zahl1, zahl2) => {
    const minus = zahl1 - zahl2;
    console.log(`${zahl1} minus ${zahl2} ist = ${minus}`);
    return minus;
};

subtraktion(7, 3);
