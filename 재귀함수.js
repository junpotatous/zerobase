/*function factorial(num) {
  if (num == 0) return 1;
  return num * factorial(num-1);

}
//

console.log(factorial(3));*/

//3! 3 * 2 * 1

//2. factorial function
function factorial(x) {
  if (x === 0) return 1;

  return x * factorial(x - 1);
}

const num = 3;

let result = factorial(num);

console.log(`The factorial of ${num} is ${result}`);