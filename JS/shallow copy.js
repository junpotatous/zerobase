/*
let user = {
  name: "jun",
  age : 28,

};

console.log(typeof user);
console.log(typeof user.name);
console.log(typeof user.age);

console.log(user);
console.log(user.name);
console.log(user.age);

user.age = 30;
console.log(user.age);
*/

let user = {
  name: "jun",
  age : 28,
  sizes: {
    height: 190,
    wegith: 90,
  },

};

//let admin = { ... user}; // (user,name, user.age)

let admin = JSON.parse(JSON.stringify(user));

admin.sizes.height = admin.sizes.height+1;
console.log(admin.sizes.height);
console.log(user.sizes.height);

/* using Object
let admin = Object.assign({}, user);
*/

/* for loop
let admin = {};

for (let key in user) {
  admin[key] = user[key];
}
*/


admin.name="choi";
console.log(admin.name);
console.log(user.name); // jun-> choi why?

user.age =25;
console.log(user.age);
console.log(admin.age); //28->25 why?
