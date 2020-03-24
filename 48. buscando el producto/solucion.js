function buscarProducto(arr, id) {
  for(var i = 0; i < arr.length; i++) {
    if(arr[i].id === id) {
      return arr[i];
    }
  }

  return null;
}
