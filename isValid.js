var isValid = function(s) {
  if(s.length % 2 != 0) return false
  var reg = new RegExp(/(\(\))|(\[\])|(\{\})/,'g')
  while(reg.test(s)){
    s = s.replace(reg, '');
  }
  if(s.length > 0){
    return false;
  } else {
    return true;
  }
};

var isValid = function(s) {
  var len = s.length;
  if(len == 0) return true;
  if(len % 2 != 0) return false;
  var left = '({[';
  var map = {
    '(': ')',
    '{': '}',
    '[': ']'
  }
  var arr = [];
  var arrLen = 0;
  for(var i = 0;i < len;i++){
    if(left.includes(s[i])){
      arr.push(s[i])
      arrLen ++;
    } else {
      if(map[arr[arrLen - 1]] == s[i]){
        arr.pop()
        arrLen --;
      } else {
        return false;
      }
    }
  }
  if(arrLen != 0){
    return false;
  } else {
    return true;
  }
};
