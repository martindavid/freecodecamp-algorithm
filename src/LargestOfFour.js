function largestOfFour(arr) {
  // You can do this!
  var newArr = arr.map(function(val){
    var result = val.reduce(function(a,b){
      return (a > b) ? a : b;
    });
    return result;
  });
  return newArr;
}

function LargestOfFour = largestOfFour;
