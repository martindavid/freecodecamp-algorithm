function findLongestWord(str) {
  var arr = str.split(' ');
  var word = arr.reduce(function(contender,champ){
    return (contender.length > champ.length) ? contender: champ;
  });

  return word.length;
}

export FindLongestWord = findLongestWord;
