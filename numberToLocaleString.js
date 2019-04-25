var numberToLocaleString = function(num){
  if(num < 1000 && num > -1000){
    return num.toString();
  }
  var str = num.toString();
  return str.replace(/(\d)(?=(\d{3})+(\.\d+)?$)/g, '$1,')
}
