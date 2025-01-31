var state = { name: "random", age: 21 };
console.log(state);
// sidhai state change garna mildaina React maa due to immutable
// sate.name ="ram bahadur" kasari garaune react maa?
// same logic: [...state ] copy garne and copy maa change garne

var copy = { ...state };
copy.name = "ram bahadur";
console.log(copy);
// sate change garna xa vane aabo balla state maa copy ko value dine
state = copy;

console.log(state);
