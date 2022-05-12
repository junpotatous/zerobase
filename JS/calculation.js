/*
//덧셈 연산자: +
console.log(31+10);
//뺄셈 연산자:-
console.log(31-10);
//곱셈 연산자:*
console.log(31*10);
//나눗셈 연산자:
console.log(31/10);
//몫
console.log(parseInt(31/10));
//나머지 연산자:%
console.log(31 % 10);
//거듭제곱 연산자:**
console.log(2**3);
*/

/*
let num_1 = 123;
let num_2 = 456;
let str_1 = "hello"; 
let str_2 = "world";

let num_3, str_3;

num_3 = num_1 + num_2;
str_3 = str_1 + str_2;

num_1 = num_1 + num_2;

console.log(num_3);
console.log(str_3);

let num_4 = num_1 - num_2;
console.log(num_4);
*/

let num = 10;

let result_1, result_2, result_3, result_4, result_5;
result_1 = result_2 = result_3 = result_4 = result_5 = 31;

//복합 대입 연산자": +=
result_1 += num; 
console.log(result_1)
//복합 대입 연산자": -=
result_2 -= num; ;
console.log(result_2)

//복합 대입 연산자": *=
result_3 *= num;
console.log(result_3)

//복합 대입 연산자": /=
result_4 /= num;
console.log(result_4)

//복합 대입 연산자": %=
result_5 %= num;
console.log(result_5)
