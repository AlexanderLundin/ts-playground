//functions can be defined without types on returns and args
function getSum(num1, num2) {
    return num1 + num2;
}
console.log(getSum(1, 4));
// can save functions into variables
var mySum = function (num1, num2) {
    if (typeof num1 != 'number') {
        num1 == parseInt(num1);
    }
    if (typeof num2 != 'number') {
        num2 == parseInt(num2);
    }
    return num1 + num2;
};
console.log(mySum('1', 4));
