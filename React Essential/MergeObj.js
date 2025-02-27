const obj1 = {
  name: "Shyam",
  age: 12,
};
const obj2 = {
  occupation: "Developer",
  city: "KTM",
  ...obj1, // here we have to use ...obj name
};

const combinedObj = { ...obj1, ...obj2 };
console.log(combinedObj);
