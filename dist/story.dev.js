"use strict";

var charactersArr = ['one', 'two', 'three'];

randomIdea = function randomIdea(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};

exports.ideas = {
  characters: randomIdea() // location: randomIdea(),
  // // timeofday: randomIdea(),
  // // kinks: randomIdea(),
  // // mode: randomIdea(),

};