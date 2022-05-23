/*
let result;

function recursive(number) {
   if (number == 1){
     return 1;
   }
   return recursive(number -1) * number;
  
}

result = recursive(5); // 5! => 5*4*3*2*1
console.log(result);
*/
//피보나치 수열

let result;

function recursive(number) {
  if(number ==1 || number == 0) {
    return number;
  }


  return recursive(number -1) + recursive(number -2);
}

result = recursive(6);
console.log(result);