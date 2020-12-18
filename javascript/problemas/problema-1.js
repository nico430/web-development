/*problema 1: crear una maquina que deje pasar
 solo a las personas mayores de edad y el primero
 que pase despues de las 2 Am no paga*/

// para saber si ya se dio el boleto gratis
let free = false;

function validacion(time){
  let edad = prompt("¿cual es tu edad?");
  if(edad < 18){
  alert("capo, sos menor de edad, no podes pasar");
  }
  else if (time > 2 && time < 7 && free == false){
    alert("son las 2, Te ganaste la entrada gratis por ser el primero¡¡");
    free = true;
  }
  else {
    alert("Boleto? Pasa");
  }
}

validacion(00);
validacion(1);
validacion(3);
validacion(5);
