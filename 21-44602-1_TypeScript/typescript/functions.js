// Functions 
function addNumbers(a, b) {
    return a + b;
}
console.log(addNumbers(10, 20));
// Arrow Functions
var addNumbersr5 = function (a, b) { return a + b; };
console.log(addNumbersr5(10, 20));
//Optional Parameters
function addNumbers1(a, b, c) {
    return a + b + (c !== null && c !== void 0 ? c : 0); // c ?? means if c is undefined then use 0
}
//Default Parameters
function addNumbers2(a, b, c) {
    if (c === void 0) { c = 0; }
    return a + b + c;
}
// Rest Parameters 
function addNumbers3() {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    var sum = 0;
    for (var _a = 0, nums_1 = nums; _a < nums_1.length; _a++) {
        var num = nums_1[_a];
        sum += num;
    }
    return sum;
}
function addNumbers4(a, b) {
    return a + b;
}
console.log(addNumbers4(10, 20));
