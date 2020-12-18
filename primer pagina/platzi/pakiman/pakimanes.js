var imagenes = [];
imagenes['cauchin'] = 'vaca.png',
imagenes['pokacho'] = 'pollo.png',
imagenes['tosinauro'] = 'cerdo.png'

var coleccion = [];
coleccion.push( new pakiman('cauchin', 100, 30));
coleccion.push( new pakiman('pokacho', 80, 50));
coleccion.push( new pakiman('tosinauro', 120, 40));

for(var i of coleccion){
    i.mostrar();
}