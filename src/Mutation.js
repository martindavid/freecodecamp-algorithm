function mutation(arr) {
  var splitString = arr[1].split("");
  for (var i = 0; i < splitString.length; i++){
    if (arr[0].toLowerCase().indexOf(splitString[i].toLowerCase()) === -1){
      return false;
    }
  }
  return true;
}

exports.Mutation = mutation;
