/* 2차원 배열 예제
let array = [
  [101, 102, 103,],
  [201, 202, 203,],
  [301, 302, 303,],
];

console.log(array);
console.log(array[0]);
console.log(array[1][0]);
console.log(array[2][2]);

let arr_2 = array.pop();
console.log(array.length);
console.log(arr_2);
console.log(array);

let array_num = array.push([401, 402, 403]);
console.log(array.length);
console.log(array_num);
console.log(array);
*/

//2차원 배열 반복문 예제 이중 for loop를 사용한 2차원 배열 접근

let array = [
  [101, 102, 103, 104],
  [201, 202, 203, 204],
  [301, 302, 303, 304],
  [401, 402, 403, 404],
];

for(let i = 0; i < array.length; i++) {
  //array.length == 3, i:0~2
  for(let j = 0; j < array[i].length; j++) {
    //array[i].length == 3, j:0~2
    console.log(array[i][j]);
  }
}

let fruits = [
  ["strawberry", 50],
  ["banana", 100],
  ["ice", 150],
];

for(let i=0; i<fruits.length; i++) {
  console.log(`fruit: ${fruits[i][0]}, amount: ${fruits[i][1]}}`)
}
