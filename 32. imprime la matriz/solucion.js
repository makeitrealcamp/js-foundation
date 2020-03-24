const mat = [
  ["Pablo", "Maria", "Pedro"],
  ["Diana", "Juan", "Federico"],
  ["Roberto", "Daniel", "Sandra"]
];

for(let i = 0; i < mat.length; i++) {
  console.log(`Grupo ${i+1}:`);
  for(let j = 0; j < mat[i].length; j++) {
    console.log(`  ${mat[i][j]}`);
  }
}
