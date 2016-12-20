function getIndexToIns(arr, num) {
    arr.sort(function(a, b){
        return a - b;
    });
    var initVal = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (num <= initVal) {
            return i - 1;
        }
        else if (num < arr[i]) {
            return i;
        }
        initVal = arr[i];
    }

    if (num > initVal) {
        return arr.length;
    }
}

exports.GetIndexToInsert = getIndexToIns;
//console.log(getIndexToIns([10, 20, 30, 40, 50], 35));