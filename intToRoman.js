var intToRoman = function(num) {
  var arrMap = [
    {
      key: 'I',
      middle: 'V',
      number: 1
    },
    {
      key: 'X',
      middle: 'L',
      number: 10
    },
    {
      key: 'C',
      middle: 'D',
      number: 100
    },
    {
      key: 'M',
      number: 1000
    }
  ]
  var len = arrMap.length;
  var romanStr = '';
  var myNumber = num
  while(len > 0){
    var index = len - 1
    if(myNumber >= arrMap[index].number){
      var loop = Math.floor(myNumber/arrMap[index].number)
      if(loop == 4){
        romanStr += arrMap[index].key + arrMap[index].middle
      } else if(loop == 5){
        romanStr += arrMap[index].middle
      } else if(loop > 5 && loop < 9){
        romanStr += arrMap[index].middle + arrMap[index].key.repeat(loop - 5)
      } else if(loop == 9){
        romanStr += arrMap[index].key + arrMap[index + 1].key
      } else {
        romanStr += arrMap[index].key.repeat(loop)
      }
      myNumber = myNumber - arrMap[index].number * loop
    }
    len --;
  }
  return romanStr;
};

console.log(intToRoman(1));
