fetch('https://picsum.photos/v2/list')
  .then(response => response.json()) // Konvertiere die Antwort in JSON-Format
.then(data => {
    // Ausgabe der Liste in der Konsole
    console.log(data);
})
.catch(error => {
    // Behandlung von Fehlern, falls vorhanden
    console.error('Fehler beim Abrufen der Bilderliste:', error);
});




fetch('https://picsum.photos/v2/list')
  .then(response => response.json()) // Konvertiere die Antwort in JSON-Format
.then(data => {
    // Erstelle das HTML für jedes Bild und Autor
    const galleryHTML = data.map(item => createFigureElement(item)).join('');

    // Füge das HTML zum body-Element hinzu
    document.body.innerHTML = `<div class="gallery">${galleryHTML}</div>`;
})
.catch(error => {
    // Behandlung von Fehlern, falls vorhanden
    console.error('Fehler beim Abrufen der Bilderliste:', error);
});

// Funktion zum Erstellen des figure-Elements und Rückgabe des HTML-Codes
function createFigureElement(data) {
return `
    <figure>
    <img src="https://picsum.photos/id/${data.id}/${data.width}/${data.height}" style="width: 50%;">
    <figcaption>${data.author}</figcaption>
    </figure>
`;
}
