function caesarEncode(text, shift) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    return text.split('').map(char => {
        const index = alphabet.indexOf(char);
        if (index !== -1) {
            const newIndex = (index + shift) % alphabet.length;
            return alphabet[newIndex];
        } else {
            return char;
        }
    }).join('');
}

function caesarDecode(text, shift) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    return text.split('').map(char => {
        const index = alphabet.indexOf(char);
        if (index !== -1) {
            const newIndex = (index - shift + alphabet.length) % alphabet.length;
            return alphabet[newIndex];
        } else {
            return char;
        }
    }).join('');
}

// Beispiel:
const inputText = "wikipedia";
const shiftKey = 3;
const encodedText = caesarEncode(inputText, shiftKey);
console.log(encodedText); // Gibt das verschlüsselte Ergebnis in der Konsole aus