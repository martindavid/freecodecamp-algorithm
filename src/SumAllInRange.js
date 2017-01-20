
function sumAll(arr) {
  var max = Math.max.apply(null, arr);
  var min = Math.min.apply(null,arr);
  var result = 0;
  for (var i = min; i <= max;i++) {
    result += i;
  }
  return result;
}

exports.SumAllInRange = sumAll;