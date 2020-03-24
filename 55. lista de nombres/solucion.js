function extraerNombres(list) {
  var names = list.map(p => p.nombre);
  var namesIncludingA = names.filter(name => name.toLowerCase().includes('a'));

  return namesIncludingA;
}
