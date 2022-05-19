let fruits = ["apple", "orange", "banana", "orange", "melon"];

console.log(fruits.indexOf("orange"));
console.log(fruits.indexOf("Orange"));
console.log(fruits.indexOf("orange",2));

console.log(fruits.lastIndexOf("orange"));
console.log(fruits.lastIndexOf("orange", -3));
console.log(fruits.lastIndexOf("orange", 0));

console.log(fruits.includes("banana"));
console.log(fruits.includes("watermelon"));