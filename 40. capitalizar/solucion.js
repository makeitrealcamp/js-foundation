function capitalizar(string) {
  var words = string.split(' ');

  for(var i = 0; i < words.length; i++) {
    var chars = words[i].split('');

    chars[0] = chars[0].toUpperCase();

    words[i] = chars.join('');
  }

  return words.join(' ');
}
