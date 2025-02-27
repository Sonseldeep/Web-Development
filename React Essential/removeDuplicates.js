// filter method
const num = [1, 2, 3, 4, 3, 5, 8, 6, 7, 6, 7];
const uniqueNumber = num.filter((item, index) => num.indexOf(item) === index);
// console.log(uniqueNumber);

// Set approach
const uniqueArray = [...new Set(num)];
console.log(uniqueArray);
