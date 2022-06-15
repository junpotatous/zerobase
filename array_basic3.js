// 배열 반복문
// 반복문 문법 : for...length(index접근), for...of(element접근), for ...in(key접근)

let fruits = ["apple", "orange", "melon"];

// 1. use for (index)

for (let i = 0; i < fruits.length; i++){
  console.log(fruits[i]);
}

// 2. use for ...(element) of

for (let fruit of fruits) {
  console.log(fruit);
}

// 3. use for ...(key) in

for (let key in fruits) {
  console.log(fruits[key]);
}