class billete{
    constructor(v, c){
        this.valor = v;
        this.cantidad = c;
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



let entregado = [];
let caja = [];



let dinero = 0;
let div = 0;
let papeles = 0;