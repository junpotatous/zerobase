//반복문 for를 이용하여 0부터 10까지의 정수 중 짝수의 합을 구한뒤 출력해주는 코드를 작성하시오.

const UNTIL_NUM = 10;
let sum = 0;

for(let i =1; i <=10; i++) {
  if(i % 2 == 0) {
    sum += i;
  }
}
//구현 필요

//0~10: 10 8 6 4 2 -> 30
console.log(sum);