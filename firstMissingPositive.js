/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
  var len = nums.length;
  if(len == 0) return 1;
  var temp = []
  for(var i = 0; i < len; i++){
     if(nums[i] > 0 && nums[i] <= len){
         var value = nums[i];
         temp[value] = value;
     }
  }
  if(temp.length == 0) return 1
  for(var i = 1; i < temp.length; i++){
      if(temp[i] != i){
          return i
      }
  }
  return temp.length
};
