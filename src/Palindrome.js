function palindrome(str) {
  // Remove non-alphanumeric values and make it into an array
  var cleanStr = str.replace(/[\W_]+/g,'').toLowerCase();
  var strArr = cleanStr.split('');
  // Reverse the array
  var reverseStr = strArr.reverse().join('');

  return cleanStr === reverseStr;
}

exports.Palindrome = palindrome;
