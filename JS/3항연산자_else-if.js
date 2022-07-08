let age = 20;
//조건문 : is-else
if (age <19) {
  msg = "The user is not an adult";
} else {
  msg = "The user is an adult"
}

console.log(msg);

//조건문 : 3항 연산자 
msg_another = age < 21 ? "The user is not an adult." : "The user is an adult.";
console.log(msg_another)