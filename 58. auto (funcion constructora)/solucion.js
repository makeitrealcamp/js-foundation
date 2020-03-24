function Auto() {
  this.velocidad = 0;
  this.acelerar = function(val) {
    this.velocidad += val;
  }
  this.frenar = function(val) {
    var velocidad = this.velocidad - val;
    if(velocidad > 0) {
      this.velocidad = velocidad;
    } else {
      this.velocidad = 0;
    }
  }
}
