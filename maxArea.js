var maxArea = function(height) {
  var getArea = function(start, end){
    var min = Math.min(height[start], height[end])
    var len = end - start;
    return min * len
  }
  var start = 0
  var end = height.length - 1
  var maxArea = 0;
  while(start < end){
      maxArea = Math.max(maxArea, getArea(start, end))
      if(height[start] > height[end]){
          end--
      } else {
          start ++
      }
  }
  return maxArea
};
