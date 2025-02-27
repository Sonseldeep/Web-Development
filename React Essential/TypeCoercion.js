// Type Coercion means implict conversion of values from one data type into another
// Number to String, String to Number Boolean to Number

let shoppingCart = [
  {
    name: "Wireless Mouse",
    price: "19.99",
  },
  {
    name: "Wireless Keyboard",
    price: "79.99",
  },
  {
    name: "Monitor",
    price: "379.99",
  },
];

const totalPrice = shoppingCart.reduce(
  (sum, value) => sum + Number(value.price),
  0
);

// here we set sum = 0 as number inination but in object price is string so toFixed(2)
// throw an error

console.log(`the totalPrice: ${totalPrice.toFixed(2)}`);
console.log(typeof totalPrice);
