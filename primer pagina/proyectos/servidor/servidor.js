const express = require('express');
const aplicacion = express();

aplicacion.get('/', pagina
)

function pagina(peticion , respuesta){
    respuesta.send('<h1>PRIMER SERVER CON NODE.JS</h1>');
}

aplicacion.listen(8989);