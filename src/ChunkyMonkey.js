
function chunkArrayInGroups(arr, size) {
  // Break it up.
  var maxLoop = Math.ceil(arr.length / size);
  var result = [];
  var end = size;
  var start = 0;
  for(var i = 0; i < maxLoop;i++) {
    var temp = arr.slice(start, end);
    result.push(temp);
    start = end;
    end += end;
  }
  return result;
}

exports.ChunkArrayInGroups = chunkArrayInGroups;
