var weight = prompt('Escribe tu peso');
var height = prompt('Escribe tu estatura');

var bmi = parseFloat(weight) / Math.pow(parseFloat(height), 2);

console.log('tu BMI es ' + bmi);
