/*
let result;

function forloop(s, t, number) {
  let acc = 0;

  for (let i = 1; i <=number; i++) {
      if(i == 1) {
        acc += s;
      } else {
        acc += t;
      }

      console.log(i, acc);
  }
  return acc;

}

result - forloop(3, 2, 5);
console.timeLog(result);
*/

//재귀로 변환
let result;

function recursive(s, t, number) {
  //멈출 조건
  if (number == 1) {
    return s;
  }

  //반복할 코드
  return recursive(s, t, number - 1) + t;
};

//number: 5 recursive(s, t, r) + 2
//number: 4 recursive(s, t, r) + 2
//number: 3 recursive(s, t, r) + 2
//number: 2 recursive(s, t, r) + 2
//number: 1 => 3
result = recursive(3,2,5);
console.log(result);