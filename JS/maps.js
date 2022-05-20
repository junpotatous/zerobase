/*
let map = new Map();

map.set("name", "john");
map.set(123,456);
map.set(true, "bool type");
console.log(map);

console.log(map.get(123));
console.log(map.get("name"));
console.log(map.get(true));
console.log(map.size);

map.delete(123);
console.log(map);
map.clear();
console.log(map);


map.set(123, 456, 789).set(false, "bool_type").set("fruit", "banana");
console.log(map);
*/

//map 반복문

let recipe_juice = new Map([
  ["strawberry", 50],
  ["banana", 100],
  ["ice", 150],

]);

/*
for (let item of recipe_juice.keys()) {
  console.log(item);
}
for (let amount of recipe_juice.values()) {
  console.log(amount);
}

for (let entity of recipe_juice) {
  console.log(entity);
}
*/

//maps=>object로 변환

console.log(recipe_juice);

let recipe_juice_obj = Object.fromEntries(recipe_juice);
let recipe_juice_kv = Object.entries(recipe_juice_obj);
let recipe_juice_map = new Map(recipe_juice_kv);


console.log(recipe_juice_obj);
console.log(recipe_juice_kv);
console.log(recipe_juice_map);