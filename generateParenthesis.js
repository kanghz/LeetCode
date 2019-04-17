
var generateParenthesis = function(n) {
  if(n == 0) return [];
  if(n == 1) return ['()'];
  var generate = function(list, str, left, right, max){
    if(str.length == max *2){
      list.push(str);
      return;
    }
    if(left < max){
      generate(list, str + '(', left + 1, right, max)
    }
    if(right < left){
      generate(list, str + ')', left, right + 1, max)
    }
  }
  var result = [];
  generate(result, '', 0, 0, n)
  return result;
};
