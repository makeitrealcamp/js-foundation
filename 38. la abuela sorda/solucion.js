function abuela(string) {
  if(string.trim() === '') {
    return 'Dices algo?';
  }
  if(string.toUpperCase() === string) {
    return 'Ahh si, manzanas!';
  }

  return 'Habla más duro mijito';
}
