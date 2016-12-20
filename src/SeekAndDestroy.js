function destroy(arr) {
    var args = [];
    for (var i = 1; i < arguments.length; i++) {
        args.push(arguments[i]);
    }

    return arr.filter(function(val) {
       return args.indexOf(val) === -1; 
    });
}

exports.SeekAndDestroy = destroy;