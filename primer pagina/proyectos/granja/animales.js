
var d = document.getElementById("draw");
var papel = d.getContext("2d");

var tile = {
    url:"tile.png",
    cargaOK: false
}
tile.imagen = new Image();
tile.imagen.src = tile.url;
tile.imagen.addEventListener('load', cargarFondo);

var vaca = {
    url: "vaca.png",
    cargaOk: false
}
vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener('load',cargarVacas);


function cargarFondo(){
    tile.cargaOK = true;
    dibujar();
}

function cargarVacas(){
vaca.cargaOk=true;
dibujar();
}

var cantidad = aleatorio(1,10);
console.log(cantidad);

function dibujar(){
    if(tile.cargaOK){
        papel.drawImage(tile.imagen,0,0);
    }
    if(vaca.cargaOk){
        for(var i = 0; i<cantidad; i++){
            var x = aleatorio(0,420);
            var y = aleatorio(0,420);
            papel.drawImage(vaca.imagen,x,y);
        }
    }
}


function aleatorio(min,max){
var resultado = Math.floor((Math.random() * (max - min + 1)) + min);
return resultado;
}

