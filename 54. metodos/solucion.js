var persona = {
  nombre: "Maria",
  peso: 54,
  altura: 1.7,
  saludar: function(name) {
    return `Hola ${name}, me llamo ${this.nombre}`
  },
  bmi: function() {
    return this.peso / Math.pow(this.altura, 2)
  }
}
