/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
  var rows = {}
  var columns = {}
  var boxes = {}
  for(var i = 0;i < 9; i++){
    for(var j = 0;j < 9; j++){
      var num = board[i][j];
      if(num != '.'){
        var boxesIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);
        rows[i] = rows[i] || {};
        columns[j] = columns[j] || {};
        boxes[boxesIndex] = boxes[boxesIndex] || {};
        if(rows[i][num] || columns[j][num] || boxes[boxesIndex][num]){
          return false;
        } else {
          rows[i][num] = true;
          columns[j][num] = true;
          boxes[boxesIndex][num] = true;
        }
      }
    }
  }
  return true;
};
