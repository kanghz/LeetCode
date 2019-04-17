var isMatch = function(x, p){
  var reg = new RegExp('^' + p + '$','g')
  return reg.test(x)
}
