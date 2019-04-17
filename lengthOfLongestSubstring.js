const lengthOfLongestSubstring = function(s) {
  const mapObj = {};
  let maxLength = 0
  let start = -1
  for(let i = 0; i < s.length; i++){
    let temp = s[i];
    if(mapObj.hasOwnProperty(temp) && mapObj[temp] > start){
      if(i - mapObj[temp] > maxLength){
        maxLength = i - mapObj[temp]
      }
      start = mapObj[temp]
      map = {}
    }else{
      if(i - start> maxLength){
        maxLength = i - start
      }
    }
    mapObj[temp] = i
  }
  return maxLength
};
