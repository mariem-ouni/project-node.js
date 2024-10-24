// Importation du module HTTP
const http = require("http");

// Création du serveur
const server = http.createServer((req, res) => {
    // Réponse pour chaque requête
    res.statusCode = 200; // Code de statut 200 : OK
    res.setHeader('Content-Type', 'text/html'); // Type de contenu : HTML
    res.end('<h1>Hello Node !!!!</h1>\n'); // Réponse
});

// Le serveur écoute sur le port 3000
server.listen(3000, () => {
    console.log("Serveur en cours d'exécution sur http://localhost:3000");
});
