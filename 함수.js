// 함수 호출

//function print_min(x, y) {
 // console.log(arguments[0] - arguments[2]);
//}

//print_min(10, 20, 30);


// 함수 반환

/*function add(x, y) {
  return x + y;
}


let result= add(10, 20);
console.log(result);*/

function checkAge(age) {
  if(age >= 18) return true;
  else return false;
}

console.log(checkAge(14));
console.log(checkAge(20));