let ascending_order = function(x,y) {
  if(typeof x === "string")x = x.toUpperCase();
  if(typeof y === "string")y = y.toUpperCase();
  return x>y ? 1:-1;
};

let descending_order = function(x,y) {
  if(typeof x === "string")x = x.toUpperCase();
  if(typeof y === "string")y = y.toUpperCase();
  return x<y ? 1:-1;
};

 let nums = [1,-1,4,0,10,20,12];//case 1
let fruits = ["apple","Orange","orange","melon"];//case 2

console.log(nums.sort(ascending_order))
console.log(nums.sort(descending_order))

console.log(fruits.sort(ascending_order))
console.log(fruits.sort(descending_order))