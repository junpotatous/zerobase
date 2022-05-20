function User(name) {
  if (!new.target) {
    return new User(name);
  }
  this.name = name;
}

let result_1 = User("jun");
console.log(result_1);
let result_2 = new User("jun");
console.log(result_2);