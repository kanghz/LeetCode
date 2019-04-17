var strStr = function(haystack, needle) {
  var hl = haystack.length;
  var nl = needle.length
  if(nl == 0) return 0
  if(nl > hl) return -1
  if( nl == hl) return haystack == needle ? 0 : -1
  var i = 0
  for(; i < hl - nl + 1;i++){
      if(haystack[i] == needle[0]){
          if(haystack.substr(i, nl) == needle)
          return i
      }
  }
  return -1
};
