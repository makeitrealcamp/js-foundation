String.prototype.palindrome = function() {
  var string = this.replace(/\s/g, '').toLowerCase();
  var reverseString = string.split('').reverse().join('');

  return string === reverseString;
}
