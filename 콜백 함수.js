function callback_func() {
  console.log("I'm callback function");
}
function higher_order_func(callback) {
  console.log("I'm higher-order function");
  callback();
}

higher_order_func(callback_func);