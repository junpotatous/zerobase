/*
//배열 삭제/변경(index) 
// -배열 요소 삭제/변경 : Array.splice(index[, deleteCount, elem1, ..., elemN])

let fruits = ["apple", "orange", "melon"];

console.log(fruits.splice(1));
console.log(fruits);

fruits = ["apple", "orange", "melon", "strawberry"];
console.log(fruits.splice(1,1));
console.log(fruits);

console.log(fruits.splice(1,1, "mango","kiwi"));
console.log(fruits);
*/


// 배열 삭제 (index) 배열 요소 삭제 : Array.slice([start], [end])

let fruits = ["apple", "orange", "melon"];

console.log(fruits.slice(1));
console.log(fruits);

console.log(fruits.slice(1, 2));
console.log(fruits.slice(-2));


