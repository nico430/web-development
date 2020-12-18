document.addEventListener("keyup",teclaUp);
var d = document.getElementById("draw");
var lienzo = d.getContext("2d");
var colorcito = "red";
var anchoLinea = 3;
var movimiento = 5;
var x = 250;
var y = 250;
drawALine(colorcito, x-1, y-1, x+1, y+1);

var teclas = {
    LEFT : 37,
    UP : 38,
    RIGHT : 39,
    DOWN : 40
};

function teclaUp(evento){
    switch(evento.keyCode){
        case teclas.UP:
            console.log("arriba");
            drawALine(colorcito, x, y, x, y-movimiento);
            y -= movimiento;
        break;

        case teclas.DOWN:
             console.log("abajo");
             drawALine(colorcito, x, y, x, y+movimiento);
             y += movimiento;
        break;

        case teclas.LEFT:
            console.log("izquierda");
            drawALine(colorcito, x, y, x-movimiento, y);
            x -= movimiento;
        break;

        case teclas.RIGHT:
            console.log("derecha");
            drawALine(colorcito, x, y, x+movimiento, y);
            x += movimiento;
        break;
    }
}
function drawALine(color, xinit, yinit, xfin, yfin)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = anchoLinea;
  lienzo.moveTo(xinit, yinit);
  lienzo.lineTo(xfin, yfin);
  lienzo.stroke();
  lienzo.closePath();
}
