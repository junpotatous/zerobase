/*
let input = [1,2,3,4];
let count = 0;

function combination(arr) {
  //for-> 뽑는 개수 ==> r ==> 2 
  for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        count++;
        console.log(arr[i], arr[j]);

    }
  }
}

  combination(input);
  console.log(count);
  */

  //재귀함수로

let input = [1,2,3,4];
let output = [];
let count = 0; 
function combination(arr,data, s, idx, r ) {
  if (s == r) {
    count++;
    console.log(data);
    return;
  }

  for(let i=idx; arr.length - i >= r - s; i++) {
    data[s] = arr[i];
    combination(arr, data, s + 1, i+1,r);
  }

}
combination(input, output, 0, 0, 2);
console.log(count);
