// import { useState } from "react";

import { useState } from "react";
import Nav from "./components/Nav";
import Cart from "./components/Cart";

// const App = () => {
//   const [game, setGame] = useState({
//     id: 1,
//     player: {
//       name: "John",
//     },
//   });
// const handleClick = () => {
//   setGame({ ...game, player: { ...game.player, name: "Bob" } });
// };

// const [pizza, setPizza] = useState({
//   name: "Spicy Pepperoni",
//   toppings: ["Mushroom"],
// });
// const handleClick = () => {
//   setPizza({ ...pizza, toppings: [...pizza.toppings, "Cheese"] });
// };

// const [cart, setCart] = useState({
//   discount: 0.1,
//   items: [
//     { id: 1, title: "product 1 ", qty: 1 },
//     { id: 1, title: "product 1 ", qty: 1 },
//   ],
// });
// const handleClick = () => {
//   setCart({
//     ...cart,
//     items: cart.items.map((item) =>
//       item.id === 1 ? { ...item, qty: item.qty + 1 } : item
//     ),
//   });
// };

//   const [bugs,setBugs] = useState(
//     [
//       {id:1,title:'Bug 1 ',fixed:false},
//       {id:2, title:'Bug 2', fixed: false}
//     ]
//   )
//   const handleClick = ()=>{
//     setBugs(bugs.map(bug=> bug.id === 1 ? {...bug, fixed:true}: bug))
//   }

//   return (
//     <div>
//       <button onClick={handleClick}>click</button>
//     </div>
//   );
// };

// export default App;

const App = () => {
  const [cartItems, setCartItems] = useState(["Product 1", "Product 2"]);
  return (
    <>
      <Nav cartItemsCount={cartItems.length} />
      <Cart cartItems={cartItems} onClear={() => setCartItems([])} />
    </>
  );
};

export default App;
