var boton = document.getElementById("boton");
boton.addEventListener('click',start);
var kilos = document.getElementById('peso');
peso = kilos.Value;

var planeta = document.getElementById('planeta');
var eleccion = planeta.value;

function start(){

document.write("el peso ingresado es: <strong>" + peso + " kg</strong><br />");
    

var resultado = 0;

if (eleccion == 1) 
{ 
    resultado = parseInt (peso * 3.7 / 9.8) ;
    
    document.write("el peso en mercurio equivale a :<strong>" + resultado + " kg</strong><br />");
}

else if (eleccion == 2)
{
    resultado = parseInt(peso * 8.87 / 9.8);
    document.write("el peso en venus equicale a:<strong>" + resultado + "</strong><br />");
}

else if (eleccion == 3)
{
    resultado = parseInt(peso * 1.62 / 9.8);
    document.write("el peso en la luna equicale a: <strong>" + resultado + "</strong><br />");
}

else if (eleccion == 4)
{   
    resultado = parseInt(peso * 3.7 / 9.8);
    document.write("el peso en marte equicale a: <strong>" + resultado + "</strong><br />");
}

else if (eleccion == 5)
{
    resultado = parseInt(peso * 24.8 / 9.8);
    document.write("el peso en jupiter equicale a: <strong>" + resultado + "</strong><br />");
}

else if (eleccion == 6)
{
    resultado = parseInt(peso * 1.44 / 9.8);
    document.write("el peso en saturno equicale a: <strong>" + resultado + "</strong><br />");
}

else if (eleccion == 7)
{
    resultado = parseInt(peso * 8.7 / 9.8);
    document.write("el peso en urano equicale a: <strong>" + resultado + "</strong><br />");
}

else if (eleccion == 8)
{
    resultado = parseInt(peso * 11.15 / 9.8);
    document.write("el peso en neptuno equicale a: <strong>" + resultado + "</strong><br />");
}
else{
    alert("Lo sentimos esa no es una entrada correcta")
}
}