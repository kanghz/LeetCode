/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  if (nums && nums.length < 2) {
    return [nums]
  }
  nums.sort();
  let result = [];
  let used = {}
  var backtrack = function (nums, arr) {
    if (nums.length == 0) {
      result.push(arr)
    } else {
      for (let i = 0; i < nums.length; i++) {
        if(i > 0 && nums[i] == nums[i - 1] && used[nums[i]]){
          continue;
        }
        used[nums[i]] = true;
        let newArr = [...arr, nums[i]]
        let newNums = [...nums]
        newNums.splice(i, 1)
        backtrack(newNums, newArr)
      }
    }
  }
  backtrack(nums, [])
  return result;
}
