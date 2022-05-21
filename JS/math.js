console.log(Math.max(1,-1));
console.log(Math.min(1,-1));

console.log(Math.max(1,-1,5,23,17,-4));
console.log(Math.min(1,-1,5,23,17,-4));

let nums = [1,-1,5,23,17,-4];
//apply
console.log(Math.max.apply(null,nums));
console.log(Math.min.apply(null,nums));
//spread
console.log(Math.max(...nums));
console.log(Math.min(...nums));

console.log(Math.abs(1));
console.log(Math.abs(-1));
console.log(Math.abs(-Infinity));