//Importacion de libreria emailjs
const emailjs = require('emailjs-com');
const data = require('data/data.json');

// Inicialización de emailjs
emailjs.init(data.emailjs.userId);

