var Entry = require('./../js/journal.js').entryModule;

$(document).ready(function(){
  var newEntry = new Entry();

  $("#journal").submit(function(event){
    event.preventDefault();
    var body = $("#body").val();
    var bodyCount = newEntry.countWords(body);
    var vowelCount = newEntry.countVowels(body);
    var conCount = newEntry.countConsonants(body);
    var teaser = newEntry.getTeaser(body);
    $("#output").append("<li>" + teaser + "<br>There are " + bodyCount + " words, " + conCount + " consonants and " + vowelCount + " vowels in your entry.</li>");
  });
});
