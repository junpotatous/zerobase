/**
 * 
 * JS Type
 * -원시(primitive)
 * -객체, 참조(Reference)
 */

const object = {
  name: 'jun',
  age: 28,
  arr: [],
  func:function() {},
  child: {}
}


const array = [[], 28, 'jun', function () {}];
function func() {}

console.log(object instanceof Object);
console.log( func instanceof Function);
console.log( array instanceof Array);

console.log(Object.prototype.toString.call(array));
console.log(typeof func);
console.log(typeof array);
