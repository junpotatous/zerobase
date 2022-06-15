// 배열 탐색
// index 탐색(앞에서부터):Array.indexOf(item, from)
// index 탐색(뒤에서부터):Array.lastIndexOf(item, from)
// 값 포함 여부 확인:Array.includes(item, from)

let fruits = ["apple", "orange", "banana", "orange", "melon"];

console.log(fruits.indexOf("orange"));
console.log(fruits.indexOf("Orange"));
console.log(fruits.indexOf("orange", 2));

console.log(fruits.lastIndexOf("orange"));
console.log(fruits.lastIndexOf("orange",-3));
console.log(fruits.lastIndexOf("orange",0));

console.log(fruits.includes("banana"));
console.log(fruits.includes("Banana"));
console.log(fruits.includes(0));