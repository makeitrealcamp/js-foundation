var start = prompt('Escribe un número');
var end = prompt('Escribe otro número');

if(start < end) {
  for(let i = start; i <= end; i++) {
    console.log(i);
  }
} else {
  for(let i = start; i >= end; i--) {
    console.log(i);
  }
}
