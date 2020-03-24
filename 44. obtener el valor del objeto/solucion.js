function obtenerValor(obj, prop) {
  if(!obj.hasOwnProperty(prop)) return false
  return obj[prop];
}
