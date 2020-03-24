function escalera(num) {
  var result = '';

  for(var i = 1; i <= num; i++) {
    var floor = '';
    for(var j = 1; j <= i; j++) {
      floor += '#'
    }

    floor += '\n';
    result += floor;
  }

  return result;
}
