var twoSum = function(nums, target) {
  let mapObj = {};
  for(let i = 0;i < nums.length; i++){
      if(mapObj.hasOwnProperty(target - nums[i])){
          return [mapObj[target - nums[i]], i]
      }
      mapObj[nums[i]] = i
  }
};
