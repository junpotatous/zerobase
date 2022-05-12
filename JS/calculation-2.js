let num, result;

num = 10;
result = num++;
console.log(result);
console.log(num);

num = 10;
result = ++num;
console.log(result);
console.log(num);

num = 10;
result = num--; //10
console.log(result);
console.log(num);

num = 10; //9
result = --num;
console.log(result);
console.log(num);