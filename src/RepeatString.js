function repeat(str, num) {
  // repeat after me
  var result = "";
  if (num < 0){
    return "";
  }else{
    for (var i = 0;i < num;i++){
      result += str;
    }
  }

  return result;
}

exports.RepeatString = repeat;
