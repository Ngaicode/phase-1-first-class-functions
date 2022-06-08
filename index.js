"use strict";
function receivesAFunction(callback) {
  callback();
}
receivesAFunction();

function returnsANamedFunction() {
  return function namedFn() {
    console.log("this is a named function");
  };
}
returnsANamedFunction();
function returnsAnAnonymousFunction() {
  return () => console.log("this is an anonymous function");
}
returnsAnAnonymousFunction();
