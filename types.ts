// tsc types.ts -w
export {};
let myString: string;
let myNum: number;
let myBool: boolean;
let myVar: any;

myString = 'Hello World';
// can be positve, negative, expressions, decimals, hexidecimal
myNum = 1;
myBool = true;
myVar = "This can be anything";

let strArray: string[];
strArray = ['Hello', 'World']
// can declare arrays with angle brackets
let numArray: Array<number>;
numArray = [1,2,3,4,5];
let boolArray: boolean[];
boolArray = [true,false,true];
//tuples
let strNumTuple: [string, number];
//data has to match whatever pattern is given at declaration, but the IDE will show an error
strNumTuple = ['Association List', 4.0];

console.log(myString + ' ' + myNum + ' ' + myBool 
    + ' ' + myVar + ' ' + strArray 
    + ' ' + numArray + ' ' + boolArray + ' ' + strNumTuple
)