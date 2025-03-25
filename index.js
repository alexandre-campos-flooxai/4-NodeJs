// carrega os módulo
const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');

let app = express();

app.use(bodyParser.urlencoded({ extended: false }));
// todos dados recebidos converte em json
app.use(bodyParser.json());
app.use(expressValidator());

// chamando consign, incluindo a pasta routes no app
consign().include('routes').include('utils').into(app);

app.listen(3000, '127.0.0.1', () => {
  console.log('Servidor rodando!');
});
