/*
let input = ["a","b", "c"];
let count = 0;

function permutation(arr) {
  //for i -> 첫번째 위치시킬 요소 a, b, c
  for (let i = 0; i < arr.length; i++) {
      // for j => 두번째 index 위치시킬 요소 (i, j, 0)
      for ( let j = 0; j < arr.length; j++) {
        if(i==j) continue;
        //for k => 세번째 index 위치시킬 요소 [i, j, k]
        for (let k = 0; k < arr.length; k++) {
          if (i==k) continue;
          if (j==k) continue;

          console.log(arr[i], arr[j], arr[k]);
        }
      }
  }
}

permutation(input);
console.log(count);
*/

let input = ["a", "b", "c"];
let count = 0;

function permutation(arr, s, r) {
  //1.재귀함수를 멈춰야할 조건
  if (s == r) {
    count++;
    console.log(arr.join(" "));
    return;
  }

  //2. 재귀를 돌면서 변경되어야 될  부분/메인로직

  //s = 1
  for (let i = s; i < arr.length; i++) {
    [arr[s], arr[i]]= [arr[i], arr[s]]//swap
    permutation(arr, s + 1, r);
    [arr[s], arr[i]]= [arr[i], arr[s]]//원상복귀
  
  } 
}

permutation(input, 0, 2);
console.log(count);
