function Entry(wordCount) {
  this.wordCount = wordCount;
}

Entry.prototype.countWords = function(body) {
  var bodyArr = body.split(" ");
  return bodyArr.length;
};

Entry.prototype.countVowels = function(body) {
  var charactersArr = body.toUpperCase().split("");
  var vowelArr = ["A","E","I","O","U"];
  var vowels = 0;
  charactersArr.forEach(function(character) {
    if(vowelArr.includes(character)){
      vowels++;
    }
  });
  return vowels;
};

Entry.prototype.countConsonants = function(body) {
  var charactersArr = body.toUpperCase().split("");
  var vowelArr = ["A","E","I","O","U"];
  var letters = /^[a-z]+$/i;
  var consonants = 0;
  charactersArr.forEach(function(character) {
    if( character.match(letters) && !vowelArr.includes(character)){
      consonants++;
    }
  });
  return consonants;
};

Entry.prototype.getTeaser = function(body) {
  var bodyArr = body.split(" ");
  var teaser = [];
  for (var i = 0; i < 8; i++) {
    teaser.push(bodyArr[i]);
  }
  return teaser.join(" ");
};

exports.entryModule = Entry;
