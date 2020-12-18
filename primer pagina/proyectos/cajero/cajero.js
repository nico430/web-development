class billete{
    constructor(v, c){
        this.valor = v;
        this.cantidad = c;
    }
}

let entregado = [];
let caja = [];



let dinero = 0;
let div = 0;
let papeles = 0;

function extraerDinero(){
    dinero = parseInt(t.value);

    for(var bi of caja){
        if(dinero > 0){
            div = Math.floor(dinero / bi.valor);
            if(div > bi.cantidad){
                papeles = bi.cantidad;
            }
            else{
                papeles = div;
            }
            entregado.push( new billete( bi.valor, papeles ) );
            dinero = dinero - (bi.valor * papeles)
        }
        
    }

    if(dinero > 0){
        resultado.innerHTML = 'no hay plata :´('
    }
    else{
        for(var e of entregado){
            if(e.cantidad > 0){
                resultado.innerHTML += `${e.cantidad} billetes de $ ${e.valor} <br />`
            }
        }
    }
}
let t = document.getElementById('dinero');
let b = document.getElementById("extraer");
b.addEventListener('click',extraerDinero);
let resultado = document.getElementById('resultado');

let recarga = document.getElementById('recarga');
recarga.addEventListener('click', recargar);

caja.push( new billete( 100 , 7 ) );
caja.push( new billete( 50 , 10 ) );
caja.push( new billete( 20 , 15 ) );
caja.push( new billete( 10 , 20 ) );
