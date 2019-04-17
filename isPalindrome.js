var isPalindrome = function(x) {
  if(x < 0 || (x % 10 == 0 && x !=0)) return false;
  var str = x.toString()
  var len = str.length
  var loop = (len / 2) >> 0
  for(var i = 0; i < loop; i++){
    if(str[i] != str[len - i - 1]){
      return false
    }
  }
  return true
};

console.log(isPalindrome(121121));
