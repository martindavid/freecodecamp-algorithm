function titleCase(str) {
  var strArr = str.toLowerCase().split(" ");
  var newArr = strArr.map(function(val){
    var a = val.split('');
    a[0] = a[0].toUpperCase();
    return a.join('');
  });
  return newArr.join(' ');
}

exports TitleCase = titleCase;
