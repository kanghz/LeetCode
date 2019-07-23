/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  if(nums && nums.length < 2){
    return [nums]
  }
  let result = [];
  for(let i = 0; i < nums.length; i++){
    result = insert(nums[i], result)
  }
  return result;
};

let insert = function(num, arr){
  let result = []
  if(arr.length == 0){
    result.push([num])
  }else{
    for(let i = 0; i < arr.length; i++){
      for(let j = 0; j <= arr[i].length; j++){
        let temp = [...arr[i]];
        temp.splice(j, 0, num)
        result.push(temp)
      }
    }
  }
  return result;
}
