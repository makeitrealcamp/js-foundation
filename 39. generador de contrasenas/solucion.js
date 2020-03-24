function contrasena(string) {
  var password = '';

  for(var i = 0; i < string.length; i++) {
    var char = string[i].toLowerCase();

    if(char === ' ') {
      char = '';
    } else if(char === 'a') {
      char = 4;
    } else if(char === 'e') {
      char = 3;
    } else if(char === 'i') {
      char = 1;
    } else if(char === 'o') {
      char = 0
    }

    password += char
  }

  return password;
}
