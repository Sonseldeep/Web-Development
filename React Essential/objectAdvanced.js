const person = {
  name: "Ram",
  age: 21,
  hobbies: ["reading", "writing", "coding"],
};
console.log(typeof person);

// converts JSON into javascript string
const serializedData = JSON.stringify(person);
console.log(serializedData);
console.log(typeof serializedData);

// converts string into object

const deSerializedData = JSON.parse(serializedData);
console.log(deSerializedData);
