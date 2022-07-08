let fruits = ["apple", "orange", "banana", "orange", "melon"];
console.log(fruits.indexOf("orange"));
console.log(fruits.indexOf("Orange"));// false > -1 반환
console.log(fruits.indexOf("orange", 2));


console.log(fruits.lastIndexOf("orange"));
console.log(fruits.lastIndexOf("orange",-3));

console.log(fruits.includes("orange"));
console.log(fruits.includes("Orange"));