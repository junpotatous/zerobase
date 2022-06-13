/* 7. 스팸 메일 */

/* user code */
function answer(str) {
  let spam_flag;

  //1. 대소문자 변환 
  
  //2. advert 단어가 매일 제목 내 포함되는지 판단
  spam_flag = str.toLowerCase().includes("advert");

  return spam_flag;
}

/* main code */
let input = [
  // TC: 1
  "RE: Request documents",
  // TC: 2
  "[Advertisement] free mobile!",
  // TC: 3
  "50% off this week (advertising)",
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${answer(input[i])}`);
}