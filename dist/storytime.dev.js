"use strict";

var charactersArr = ['Snuffy'];

var randomIdeas = function randomIdeas(subjarr) {
  return subjarr[Math.floor(Math.random() * subjarr.length)];
};

var idea = {
  characters: randomIdeas(charactersArr)
};