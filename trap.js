var trap = function(height) {
  var len = height.length;
  if(len < 3) return 0;
  var index = []
  var sum = 0;
  for(var i = 0;i < len;i++){
    if(i == 0 || (height[i] > height[i + 1] && height[i] > height[i - 1]) || i == len -1){
      index.push(i)
    }
    if(index.length == 2){
        var min = Math.min(height[index[0]], height[index[1]]);
        var width = index[1] - index[0] - 1
        var temp = min * width
        for(var j = index[0] + 1;j < index[1];j++){
          if(height[j] > min){
            temp -= min
          } else {
            temp -= height[j]
          }
        }
        sum += temp
        index.shift();
        subSum = 0;
    }
  }
  return sum
};
