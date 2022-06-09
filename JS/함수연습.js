/*
function print_add(x, y = 10) {
  console.log(x + y);
}

print_add(10);
*/

/*
function print_min(x, y){
   console.log(arguments[1] - arguments[2]);
}

print_min(10, 20, 30)
*/

//return

/*
function add(x, y) {
  return x + y;
}

let result = add(10,20 );
console.log(result);
*/

function checkAge(age) {
  if(age >= 18) return true;
  else return false;

}

console.log(checkAge(14));
console.log(checkAge(20));

