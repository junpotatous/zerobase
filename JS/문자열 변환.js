let text = "helLo, world!!";
let changed_text = "";

changed_text = text.replace("world","earth");
console.log(changed_text);

console.log(text.replace("!","?"));

console.log(text.replace(/l/gi, "i"));//g는 글로벌 gi는 대소문자 모두
console.log(text.replace(/!/g, "?"));