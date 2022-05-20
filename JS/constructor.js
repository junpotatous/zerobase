function FishBread(flavor, price) {
  this.flavor = flavor
  this.price = price
  this.base = "flour";
}

let bread_1 = new  FishBread("cream", 1200);
let bread_2 = new  FishBread("redbean", 1000);
let bread_3 = new  FishBread("milk", 1500);

console.log(bread_1);
console.log(bread_2);
console.log(bread_3);
