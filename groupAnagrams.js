/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  if (strs.length < 2) {
    return [strs]
  }
  let map = {}
  for (let i = 0; i < strs.length; i++) {
    let str = strs[i]
    let sortStr = str.split('').sort().join('');
    if (map[sortStr]) {
      map[sortStr].push(str)
    } else {
      map[sortStr] = [str]
    }
  }
  let result = [];
  for (let key in map) {
    result.push(map[key])
  }
  return result
};

let myArr = ["eat","tea","tan","ate","nat","bat"];
let res = groupAnagrams(myArr)
console.log(res);