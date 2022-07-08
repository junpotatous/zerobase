function MAX(x,y) {
  if(x > y) {
    return x;
  } else {
    if(x < y) {
      return y;
    }
  }

}

console.log(MAX(0, 3));
console.log(MAX(-1, 5));
console.log(MAX(100, 7));