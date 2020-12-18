var i = document.getElementById("entrada");
var boton = document.getElementById("boton");
var c = document.getElementById("color");

boton.addEventListener("click", dibujoporclick);

var d = document.getElementById("draw");
var lienzo = d.getContext("2d");
var anch = d.width;

function dibujoporclick(){
  var clr = c.value;

  recuadro(clr,anch,anch);

  var lineas = parseInt(i.value);
  var yi,xf;
  var espacio = anch / lineas;
  
  for(l = 0; l < lineas; l++)
  {
    yi = espacio * l;
    xf = espacio * (l + 1);
    drawALine(clr, 0, yi, xf, anch);
    drawALine(clr, anch,xf ,yi ,0 );
    console.log("Linea " + l);
  }
    
 }

function recuadro(color,ancho,largo){
drawALine(color, 1, 1, ancho,1);
drawALine(color, 1, largo, ancho,largo);
drawALine(color, 1, 1, 1,largo);
drawALine(color, ancho, 1, ancho, largo);
}

function drawALine(color, xinit, yinit, xfin, yfin)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinit, yinit);
  lienzo.lineTo(xfin, yfin);
  lienzo.stroke();
  lienzo.closePath();
}