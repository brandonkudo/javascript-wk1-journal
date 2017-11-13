(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}],2:[function(require,module,exports){
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

},{"./../js/journal.js":1}]},{},[2]);
