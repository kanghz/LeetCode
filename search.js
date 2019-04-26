var search = function(nums, target) {
  var len = nums.length;
  if(len == 0) return -1;
  if(target < nums[0]){
    for(var i = len - 1;i > 0; i--){
      if(target == nums[i]){
        return i;
      }
      if(target > nums[i]){
        return -1;
      }
    }
  } else {
    for(var i = 0;i < len; i++){
      if(target == nums[i]){
        return i;
      }
      if(target < nums[i]){
        return -1;
      }
    }
  }
  return -1
};
