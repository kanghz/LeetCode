var letterCombinations = function(digits) {
    if(digits.length == 0) return [];
    var addStr = function(str1, str2){
      var s = [];
      for(let i = 0;i < str2.length;i++){
        s.push(str1 + str2[i])
      }
      return s;
    }
    var result = [];
    var map = {
      '2':'abc',
      '3':'def',
      '4':'ghi',
      '5':'jkl',
      '6':'mno',
      '7':'pqrs',
      '8':'tuv',
      '9':'wxyz',
    }
    for(let m = 0;m < digits.length;m++){
      if(result.length > 0){
        var temp = []
        for(let j = 0;j < result.length;j++){
          temp = temp.concat(addStr(result[j], map[digits[m]]))
        }
        result = temp;
      } else {
        result = addStr('', map[digits[m]])
      }
    }
    return result
};

var a = "";
