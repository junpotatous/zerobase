let nums = [];

nums[0] = "one";
nums[1] = "two";
console.log(nums.length);
console.log(nums);

nums["once"] = "once";
nums["twice"] = "once";
console.log(nums.length);
console.log(nums);


console.log(Object. getOwnPropertyDescriptor(nums));