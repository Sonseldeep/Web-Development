var arr = [1, 2, 3, 4, 5, 6, 10, 7, 9];
arr.filter((x) => true);
// filter maa either true hunxa or false
// explictly true gare maa original array copy hunxa kina? sabai
// lai true hunxa
// condition lekhne hai ta instead of true
//i.e
const arrFilter = arr.filter((x) => x > 5);
console.log(arrFilter);

var peopleDetails = [
  { name: "Sashank", gender: "male" },
  { name: "Sanku", gender: "female" },
  { name: "Ovan", gender: "male" },
  { name: "Radha", gender: "female" },
  { name: "Ramaiya", gender: "female" },
  { name: "Keshav", gender: "male" },
];

// return those gender =male
// use filter.
const malePerson = peopleDetails.filter((elem) => elem.gender === "male");
console.log(malePerson);

const femalePerson = peopleDetails.filter((elem) => elem.gender === "female");
console.log(femalePerson);

var arr = [
  {
    products: "iphone",
    price: 170000,
  },
  {
    products: "laptop",
    price: 130000,
  },
  {
    products: "macbook",
    price: 170000,
  },
  {
    products: "DSLR",
    price: 70000,
  },
];

const productItemLessThanMillion = arr.filter((elem) => elem.price < 100000);
console.log(productItemLessThanMillion);
