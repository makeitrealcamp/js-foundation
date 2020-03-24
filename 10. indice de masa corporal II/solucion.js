var weight = prompt('Ingresa tu peso');
var height = prompt('Ingresa tu altura');

var bmi = parseFloat(weight) / parseFloat(height) ** 2;

if(bmi < 18.5) {
  console.log('Bajo de peso');
} else if(bmi >= 18.5 && bmi < 24.9) {
  console.log('Normal');
} else if(bmi >= 24.9 && bmi < 29.9) {
  console.log('Sobrepeso');
} else {
  console.log('Obeso');
}
