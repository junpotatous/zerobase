function answer(chess) {
  let result = [];

  // 1.각 index 별로 정해진 숫자 <-- 체스 게임을 하기 위한 기물의 개수 
  let refer = [1,1,2,2,2,8];

  // 2. 각 index 별로 정해진 숫자와 비교해서 얼마만큼 부족한지, 혹은 더 많은지 계산하여 result 배열에 업데이트
  let count = 0;
  for (let i = 0; i < chess.length; i++) {
    result[count++] = refer[i] -chess[i];
  }
 



  return result;
}







//탬플릿

let input = [
  //TC 1
  [0,1,2,2,2,7],

  //tc2
  [2,1,2,1,2,1],

  //tc3
  [0,1,1,5,3,6],

];

for(let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1}`);
  console.log(answer(input[i]));
}
