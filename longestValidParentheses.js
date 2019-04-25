var longestValidParentheses = function(s) {
  var len = s.length;
  if(len <= 1) return 0;
  var index = 0;
  var stack = [];
  var max = 0
  for(var i = 0;i < len;i++){
      if(s[i] == '('){
          stack.push(i)
      } else {
          if(stack.length == 0){
              index = i + 1
          } else {
              stack.pop()
              max = stack.length == 0 ? Math.max(max, i - index + 1) : Math.max(max, i - stack[stack.length - 1])
          }
      }
  }
  return max
};
