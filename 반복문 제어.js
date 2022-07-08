// break
let text = "";

for (let i = 0; i < 10; i++){
  if(i === 3) break;
  text += i;// text = text + i 와 같다
}
console.log(text);

// continue
text = "";

for (let i = 0; i < 10; i++){
  if(i === 3) continue;
  text += i;// 
}
console.log(text);