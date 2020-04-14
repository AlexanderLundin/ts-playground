"use strict";
exports.__esModule = true;
var myString;
var myNum;
var myBool;
var myVar;
myString = 'Hello World';
// can be positve, negative, expressions, decimals, hexidecimal
myNum = 1;
myBool = true;
myVar = "This can be anything";
var strArray;
strArray = ['Hello', 'World'];
// can declare arrays with angle brackets
var numArray;
numArray = [1, 2, 3, 4, 5];
var boolArray;
boolArray = [true, false, true];
//tuples
var strNumTuple;
//data has to match whatever pattern is given at declaration, but the IDE will show an error
strNumTuple = ['Association List', 4.0];
console.log(myString + ' ' + myNum + ' ' + myBool
    + ' ' + myVar + ' ' + strArray
    + ' ' + numArray + ' ' + boolArray + ' ' + strNumTuple);
