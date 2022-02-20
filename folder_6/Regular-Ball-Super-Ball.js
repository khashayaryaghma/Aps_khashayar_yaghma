// Create a class Ball. Ball objects should accept one argument for "ball type" when instantiated.

// If no arguments are given, ball objects should instantiate with a "ball type" of "regular."

var Ball = function (ballType = "regular") {
  this.ballType = ballType;
};

///////////test////////////

let obj1 = new Ball()
let obj2 = new Ball("super");
console.log(obj1.ballType);
console.log(obj2.ballType);