/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  var len = nums.length;
  if(len == 0) return 0;
  if(len == 1){
      if(target > nums[0]){
          return 1
      } else {
          return 0;
      }
  }
  var flag = nums[1] > nums[0]
  for(var i = 0;i < len;i++){
      if(target == nums[i]){
          return i;
      }
      if(flag && target < nums[i]){
          return i
      }
      if(!flag && target > nums[i]){
          return i
      }
  }
  return len;
};
