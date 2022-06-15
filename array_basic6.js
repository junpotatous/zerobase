// sort()
// .sort() 함수의 매개변수로 함수를 넣어 고차함수를 이용한 정렬 수행 가능
/*
let nums = [1, -1, 4, 0, 10, 20, 12];
console.log(nums.sort());
console.log(nums.reverse());

// ->앞 숫자기준으로 정렬되서 정렬이 제대로안됨

let ascending_order = function (x, y) {return x - y};
let descending_order = function (x, y) {return y - x};

let nums = [1, -1, 4, 0, 10, 20, 12];
console.log(nums.sort(ascending_order));
console.log(nums.sort(descending_order));
*/

// forEach()
// 배열 요소 별 콜백 함수 각각에 실행:Array.forEach(function(item, index, array){})
//item:배열요소, index:배열위치,array:배열

// use for loop
/*
let nums = [1, 2, 3];
for (let i = 0; i < nums.length; i++){
  console.log(nums[i]);
}
*/
// use forEach
/*
nums.forEach(function (i) {
  console.log(i);
})
*/
// use for loop
/*
let nums = [1, 2, 3, 4, 5];
let use_for_loop = [];
for (let i = 0; i < nums.length; i++) {
  use_for_loop.push(nums[i] * 2);
}
console.log(use_for_loop);
*/
// use map
let nums = [1, 2, 3, 4, 5];
let use_map = nums.map(function (item) {
  return item * 2;
})
console.log(use_map);