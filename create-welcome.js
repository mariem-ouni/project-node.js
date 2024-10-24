const fs = require('fs');

// Utilisation de la méthode writeFile pour créer le fichier "welcome.txt"
fs.writeFile('welcome.txt', 'Hello Node', (err) => {
    if (err) throw err;
    console.log('Fichier "welcome.txt" créé avec succès contenant "Hello Node"');
});
