var number = Math.ceil(Math.random()*10);
var guess = prompt('Escribe un número');

if (number === guess) {
  console.log('Felicitaciones, ese era!');
} else {
  console.log('Lo siento, intenta nuevamente!');
}
