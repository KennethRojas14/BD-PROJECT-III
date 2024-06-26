//En este archivo se hacen las configuraciones de express
const express = require('express');
const cors = require('cors');
//const session = require('express-session'); // Importar el módulo de sesión
const { portalRouter } = require('./routes/portal.routes'); 
const { accStateRouter } = require('./routes/accountStatus.routes'); 
const port = require('./config');

const app = express();

// settings
app.set('port', port);
app.set('view engine', 'ejs');

// middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Configuración de middleware para habilitar solicitudes CORS
app.use(cors());

// Configuración de middleware de sesión
// app.use(session({
//   secret: 'QKRJ12345', 
//   resave: false,
//   saveUninitialized: false,
// }));

// Rutas
app.use(portalRouter); 
app.use(accStateRouter); 

app.use(express.static('views'));

module.exports = app;
