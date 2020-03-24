function mayoresDiez(arr) {
  let result = [];

  for(let i = 0; i < arr.length; i++) {
    if(arr[i] > 10) {
      result.push(arr[i]);
    }
  }

  return result;
}
