var year = prompt('En que año naciste');

if(year < 1945) {
  console.log('Gran generación')
} else if(year >= 1945 && year < 1965) {
  console.log('Baby boomer');
} else if(year >= 1965 && year < 1982) {
  console.log('X');
} else if(year >= 1982 && year < 1994) {
  console.log('Millenial');
} else {
  console.log('Z');
}
