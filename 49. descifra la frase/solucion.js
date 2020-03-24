function decifrar(string, obj) {
  var chars = string.split('');

  for(var i = 0; i < chars.length; i++) {
    var char = chars[i];
    if(obj.hasOwnProperty(char)) {
      chars[i] = obj[char];
    }
  }

  return chars.join('');
}
