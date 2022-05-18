let text = "helLo, world!!!";
let changed_text = "";

changed_text = text.replace("world", "earth");
console.log(changed_text);

console.log(text.replace("!", "?"));
console.log(text.replace("l", "i"));

console.log(text.replace(/l/g, "i"))
console.log(text.replace(/l/gi, "i"))