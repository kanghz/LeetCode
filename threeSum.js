/*
var threeSum = function(nums) {
  nums = nums.sort((a, b) => a - b)
  var len = nums.length;
  var result = []
  if(len < 3) return [];
  for(var i = 0; i < len; i++){
      if(i > 0 && nums[i] == nums[i - 1]) continue;
      if(nums[i] > 0) return result;
      for(var j = i+1;j<len;j++){
        if(j > i + 1 && nums[j] == nums[j - 1]) continue;
        var sum = 0 - (nums[i] + nums[j]);
        if(nums[j] > 0 && sum < 0) continue;
          if(nums.indexOf(sum, j + 1) > j){
              result.push([nums[i], nums[j], sum])
          }
      }
  }
  return result;
};*/


var threeSum = function(nums) {
  nums = nums.sort((a, b) => a - b)
  var len = nums.length;
  var result = []
  var index = 0;
  let min = index + 1;
  let max = len - 1
  var calculation = function(num, type){
    if(type == "add"){
      num++
      while(nums[num] == nums[num - 1]){
        num ++
      }
    } else {
      num--
      while(nums[num] == nums[num + 1]){
        num --
      }
    }
    return num;
  }
  while( index < len - 2){
    if(min < max){
      if(nums[min] + nums[max] + nums[index] > 0){
        max = calculation(max, 'sub')
      } else if(nums[min] + nums[max] + nums[index] < 0){
        min = calculation(min, 'add')
      } else {
        result.push([nums[index], nums[min], nums[max]]);
        max = calculation(max, 'sub')
        min = calculation(min, 'add')
      }
    } else {
      index = calculation(index, 'add')
      min = index + 1;
      max = len - 1;
    }
  }
  return result;
};
