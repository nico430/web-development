
function fecha(){
    var date = new Date();
var day = date.getDay(),
    month = date.getMonth(),
    year = date.getUTCFullYear(),

    dias = ["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado"],
    meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
    
    diaSemana = document.getElementById("diaSemana"),
    dia = document.getElementById("dia"),
    mes = document.getElementById("mes"),
    año = document.getElementById("año"),
    
    diaSemana.textContent = dias[day] + ", ";
    dia.textContent = day + " de ";
    mes.textContent = meses[month] + " del ";
    año.textContent = year;
}

function reloj(){
    var date = new Date();
    var hours = date.getHours(),
    minutes = date.getMinutes(),
    seconds = date.getSeconds();

    var horas = document.getElementById("horas"),
    minutos = document.getElementById("minutos"),
    segundos = document.getElementById("segundos");

    horas.textContent = hours;
    minutos.textContent = minutes;
    segundos.textContent = seconds;
}

fecha();reloj();
setInterval(fecha,3600000)
setInterval(reloj,1000);

var imagenes = ["url('images/f5.jpg')","url('images/f2.jpg')","url('images/f3.jpg')","url('images/f1.jpg')","url('images/f10.jpg')","url('images/f11.png')","url('images/f12.jpg')","url('images/f13.jpg')","url('images/f14.jpg')","url('images/f15.jpg')","url('images/f16.jpg')","url('images/f17.jpg')","url('images/f18.png')","url('images/f19.jpg')","url('images/f20.png')","url('images/f21.jpg')","url('images/f22.jpg')","url('images/f23.jpg')"];

var x = 0;
document.body.style.backgroundImage = imagenes[x];

function anterior(){
    if(x == -1){
        x = imagenes.length - 1;
        document.body.style.backgroundImage = imagenes[x];
    }
    else{
        x--
        document.body.style.backgroundImage = imagenes[x];
    }
}

function siguiente(){
    if(x>=imagenes.length){
        x=0;
        document.body.style.backgroundImage = imagenes[x];
    }
    else{
        x++
        document.body.style.backgroundImage = imagenes[x];
    }
}


