/*
for(let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    console.log('${i} + ${j} = ${i + j}');
  }
}
*/

let language = "JavaScript";
let text = "";

for (let x of language) {
  text += x;
  console.log(x);
}
console.log(text);