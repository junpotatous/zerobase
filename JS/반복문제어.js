//break

let text = "";

for (let i = 0; i < 10; i++) {
  if (i === 3) break;
  text = text + i;

}
console.log(text);

//continue
 text = "";

for (let i = 0; i < 10; i++) {
  if (i === 3) continue;
  text = text + i;

}
console.log(text);