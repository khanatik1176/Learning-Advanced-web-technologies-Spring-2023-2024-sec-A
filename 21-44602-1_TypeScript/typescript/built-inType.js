// any Type
var data;
data = 'Something';
console.log(data);
// Enum Type
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var color = Color.Red;
console.log(color);
//Tuple Type 
var employee;
employee = [1, "Steve"];
console.log(employee);
