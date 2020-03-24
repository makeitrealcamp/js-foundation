function contarAs(string) {
  var count = 0;

  for(var i = 0; i < string.length; i++) {
    if(string[i] === 'a') {
      count++;
    }
  }

  return count;
}
