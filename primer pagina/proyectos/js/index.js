const options = {weekday : "long", month:"short", day:"numeric"};
const today = new Date();

console.log( today.toLocaleDateString("es-AR", options))