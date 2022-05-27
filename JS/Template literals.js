/**
 * Template Literals
 * 1. 멀티라인 (개행)이 자유로움
 * 2. Basic String Formatting => 보간법을 활용 => 표현식을 문자열 포함 가능
 * 3. HTML Escaping: 안전하게 사용하도록 도움 (XSS, SQL Injection)
 * 
 */

 const htmlTemplate =
 '<div>' + '안녕하세요' + '</div>';

body.innerHTML = htmlTemplate;

function genHello(name) {
 // return '안녕하세요\n' + name + '\n님\n 반갑습니다';
 return `안녕하세요
   ${name}
   님
   반갑습니다`;
}

genHello('jun');

function genDivision(innerText) {
 return `<div>${innerText}</div>`;
}

const divTag = genDivision('jun');
body.innerHTML = divTag;