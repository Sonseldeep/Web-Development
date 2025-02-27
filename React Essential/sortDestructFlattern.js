const products = [
  { name: "Wireless Mouse", price: 19.99, inStock: true },
  { name: "Keyboard", price: 49.99, inStock: false },
  { name: "Monitor", price: 129.99, inStock: true },
  { name: "USB Cable", price: 19.99, inStock: true },
];

// const sortProducts = products.sort();
// here it wont works
// we have to slice it
// sort with custom logic a.price - b.price where a and b are arguments

const sortProducts = products.slice().sort((a, b) => a.price - b.price);
console.log(sortProducts);
