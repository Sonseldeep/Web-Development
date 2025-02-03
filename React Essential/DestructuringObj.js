// 1 way
var obj = {
  name: "ram",
  age: 12,
};

const { age } = obj;
console.log(age);

// another way
var { fullName, major, mail } = {
  fullName: "Ram Bahadur Thapa",
  major: "CSIT",
  mail: "xyz@gamil.com",
};
console.log(fullName, mail);

var obj2 = {
  name: "kakaka",
  social: {
    facebook: {
      first: "ran",
      second: "diiii",
    },
  },
};

// want to access second =  obj2.social.facebook

const { second } = obj2.social.facebook;
console.log(second);

// method 3: index anusar naming change garan ni milxa

var obj4 = [10, function () {}];

var [val, def] = obj4;
// val = 10;
//  def = function(){} hunxa
console.log(val);

// note: ,, : skip garxa bich ko lai [between part is skipped]
var array = [12, function () {}, 13];
const [value, , thirteen] = array;
