Array.prototype.promedio = function() {
  var length = this.length;
  var sum = this.reduce((sum, val) => {
    return sum + val;
  });

  return sum / length;
}
