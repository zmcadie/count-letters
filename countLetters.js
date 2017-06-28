var input = process.argv.slice(2).join("").toLowerCase().split("");

function countLetters(string) {
  var letterCount = {};

  string.forEach(function(letter) {
    if (letterCount[letter] === undefined) letterCount[letter] = 0
    letterCount[letter] += 1
  });

  return letterCount;
};

console.log(countLetters(input));