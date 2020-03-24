function cambiarPeso(obj) {
  if(!obj.hasOwnProperty('peso')) {
    return null;
  }
  obj.peso = obj.peso * 2;
  return obj
}
