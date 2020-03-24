var random = Math.ceil(Math.random() * 10);
var num = prompt('Adivina el número');

while(random !== num) {
  num = prompt('Adivina el número')
}
