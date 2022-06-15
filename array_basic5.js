// 배열 정렬/반전
// 배열 정렬:Array.sort(), 배열 반전:Array.reverse()
/*
let nums = [1, -1, 4, 5, 2, 0];
console.log(nums.sort());
console.log(nums.reverse());

let fruits = ["apple", "orange", "banana", "melon"];
console.log(fruits.sort());
console.log(fruits.reverse());
*/

// 배열 변환
// 배열 값을 문자열로 변환:Array.join(separator)

let fruits = ["apple", "orange", "banana", "melon"];
let str = fruits.join();
console.log(str);

let str_separator = fruits.join(";");
console.log(str_separator);
let result = str_separator.split(";")
console.log(result);