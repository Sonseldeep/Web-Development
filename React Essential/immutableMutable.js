// mutable
var arr = [1, 2, 3, 4];
var arr2 = arr;
arr2.pop();
console.log(arr2);
console.log(arr);

//immutable: cant be changed
// in react, in this way we cant to hai !!
// in react, we cant change state in this way
// state lai immutable way maa update garnu parxa
var state = [1, 2, 3];
state.pop();
console.log(state);

// kasari garne ta? React maa

//  yesari chai nagarne
// assume x ko value y maa copy garne
// y bata pop gardaa delete ta hunxa
// tara tara tara, x bata ni hatxa

var x = [1, 2, 3, 4, 5];

var y = x;
y.pop();
console.log(y);
console.log(x);

// what is the soultion?
//spread(...) operator

var a = [1, 2, 3, 4, 5, 6];
var copy = [...a];
copy.pop();
console.log(`value of a: ${a}`);
console.log(`value of copy: ${copy}`);
