// Reduce => reduce the array into one single valuse using some functional logic
// eg: shoping cart;
// mostly used in case of number
// here, instead of one parameter It accepts two parameters => accumulator (temp value is stored sum), currentValue
// calculate the total price of the bill

const products = [
  { name: "Wireless Mouse", price: 19.99, inStock: true },
  { name: "Keyboard", price: 49.99, inStock: false },
  { name: "Monitor", price: 129.99, inStock: true },
  { name: "USB Cable", price: 19.99, inStock: true },
];

const totalPrice = products.reduce((total, price) => total + price.price, 0); // here 0 means initial value i.e total = 0 at the beginning

console.log(`the sum of products is ${totalPrice.toFixed(2)}`);
