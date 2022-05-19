/*
//find
let users = [
  {name: "bob", age:17, job: false},
  {name: "alice", age:20, job: false},
  {name: "john", age:27, job: true},
];

let find_job = users.find(function (user) {
  return user.job == false;
});
console.log(find_job);

let find_age = users.find(function (user) {
  return user.age >=19;
});
console.log(find_age);
*/

//reduce
let nums = [1,2,3,4,5];
let call_count = 0;

console.log("result\tvalue\tindex");
let sum = nums.reduce(function (accumulator, item, index, array) {
  console.log(accumulator, "\t\t", item, "\t\t", index);
  call_count++;
  return accumulator + item;
});

console.log(call_count);
console.log(sum);