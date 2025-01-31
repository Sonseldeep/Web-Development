const nameFun = () => {};
nameFun();
//euta matra parameter xa vane barces chaidaina hai
const randomFun = (parameter) => {
  console.log(parameter);
};
randomFun(34);

// with implict return;

const abc = () => 12;
console.log(abc() + 1);
// abc() = 12 hunxa
// answer: 12 + 1 = 13;

const name = () => "Ram";
console.log(`hey ${name()}`);

// Trick:
// most frequently used in react
// implict return use garera Object lai kasarai return garne ta??
// => paxi () use garne
const obj = () => ({
  name: "rxyz",
});
console.log(obj());
