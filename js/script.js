var a = prompt("enter first digit");
var b = prompt("enter second digit");
var value = (a * a) - (2 * a * b) - (b * b);
alert("(a * a) - (2 * a * b) - (b * b) is eqal to: " + value);
console.log(value);
if (value === 0) {
  alert("result is equal 0");
  console.log("result is equal 0");
} else if (value <= 0){
  alert("negative result");
  console.log("negative result");
} else {
  alert("positive result");
  console.log("positive result");
}
