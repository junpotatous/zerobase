/*
let fruits = ["apple", "orange","melon"]; 

console.log(fruits.slice(1));
console.log(fruits);

console.log(fruits.slice(1,2));
console.log(fruits.slice(-2));
*/

/*
let fruits = ["apple", "orange","melon"]; 
let fruits_add=["cherry", "banana"];

console.log(fruits.concat(fruits_add));
console.log(fruits);
*/

let fruits = ["apple" , "orange", "melon"];

for (let i = 0; i<fruits.length; i++) {
  console.log(fruits[i]);
}

for (let fruit of fruits) {
  console.log(fruit);
}

for (let key in fruits) {
  console.log(key)
  console.log(fruits[key]);
}