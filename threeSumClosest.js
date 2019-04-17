var threeSumClosest = function(nums, target) {
    nums = nums.sort((a, b) => a - b)
    let diff = Infinity;
    let sum = 0;
    let len = nums.length
    reasult = []
    for(let i = 0;i < len - 2;i++){
      let min = i + 1;
      let max = len - 1;
      do{
        let tempSum = nums[i] + nums[min] + nums[max]
        let temp = target - tempSum
        if(temp > 0) {
          min ++
        } else if(temp < 0) {
          max --
        } else {
          return tempSum
        }
        if(Math.abs(temp) < diff){
          diff = Math.abs(temp)
          sum = tempSum
        }
      } while(min < max)
    }
    return sum
};

var arr = [0,2,1,-3]
var target = 1
