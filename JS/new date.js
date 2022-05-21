/* 날짜 정보 얻기
let date = new Date(Date.UTC(2022,0,1));

console.log(date);

console.log(date.getFullYear());

console.log(date.getMonth());

// 일요일(0) ! 토요일(6)
console.log(date.getDay()); // 6- > 토요일

console.log(date.getHours());
console.log(date.getUTCHours());

console.log(date.getTime());
console.log(date.getTimezoneOffset());
console.log(new Date(date.getTime()));
*/


//날짜 정보 설정
/*
let date = new Date();

console.log(date);

let ms_year = date.setFullYear(2020, 3,15);
console.log(date);
console.log(new Date(ms_year));

date.setDate(1);
console.log(date);
date.setDate(0);
console.log(date);

date.setHours(date.getHours()+2);
console.log(date);
*/

let ms_parse = Date.parse("2022-05-21T00:00:00.000");

console.log(ms_parse);
console.log(new Date(ms_parse));

console.log(new Date(Date.parse("2022-05-21T00:00:00.000Z")))