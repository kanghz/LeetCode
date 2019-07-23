/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
  if(matrix.length == 1){
    return matrix;
  }
  let len = matrix.length;
  for(let i = 0; i < len; i++){
    for(let j = i; j < len - i - 1; j++){
      let temp = matrix[i][j];
      matrix[i][j] = matrix[len - j - 1][i];
      matrix[len - j - 1][i] = matrix[len - i - 1][len - j - 1];
      matrix[len - i - 1][len - j - 1] = matrix[j][len - 1 -i];
      matrix[j][len - 1 -i] =  temp;
    }
  }
  return matrix;
};


let arr = [[1,2,3],[4,5,6],[7,8,9]]

rotate(arr)
console.log(arr);