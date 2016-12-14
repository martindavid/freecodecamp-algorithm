function truncate(str, num) {
  // Clear out that junk in your trunk
  var result = "";
  if (num <= 3){
    result = str.slice(0,num) + "...";
  }else if (str.length > num) {
    result = str.slice(0,num - 3) + '...';
  }else{
    result = str;
  }
  return result;
}

exports.TruncateString = truncate;
