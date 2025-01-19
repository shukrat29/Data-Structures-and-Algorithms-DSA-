const twoSum = function (nums, target) {
  let arr = [];
  for (i = 0; i < nums.length; i++) {
    for (j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] == target) {
        arr = [i, j];
        return arr;
      }
    }
  }
  return arr;
};
// Test the function:
let nums = [2, 7, 11, 15];
let target = 9;
let result = twoSum(nums, target);
console.log(result);
