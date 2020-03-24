function Persona(nombre, peso, altura) {
  this.nombre = nombre;
  this.peso = peso;
  this.altura = altura;
}

// escribe abajo tu solución
Persona.prototype.saludar = function(nombre) {
  return 'Hola ' + nombre + ', me llamo ' + this.nombre;
}

Persona.prototype.bmi = function() {
  return this.peso / Math.pow(this.altura, 2);
}
