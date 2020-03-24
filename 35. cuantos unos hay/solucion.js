function contarUnos(list) {
  var count = 0;

  for(var i = 0; i < list.length; i++) {
    if(list[i] === 1) {
      count++;
    }
  }

  return count;
}
