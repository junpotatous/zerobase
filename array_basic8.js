//2차원 배열은 array[N][M]으로 접근하며, 배열(Array) 전체를 push(), pop() 가능
let array = [ [101, 102, 103], [201, 202, 203], [301, 302, 303],];
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

for (let i = 0; i < array.length; i++) {
  for (let j = 0; j < array[i].length; j++){
    array[i][j] += 1000;
    console.log(array[i][j]);
  }
}