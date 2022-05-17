let list = [
  "jun",
  28,
  function hello_func() {
    console.log("hello");
  },
];

let obj = {
  name: "jun",
  age: 28,
  hello_func() {
    console.log("hello");
  },
}

function hello_func() {
  console.log("hello");
}

hello_func();
obj.hello_func();
list[2]();

console.log(typeof hello_func);
console.log(typeof obj.hello_func);
console.log(typeof list[2]);