import { useState } from "react";
const products =  [
  {id: 1, name: 'Computadora 1', price: 10},
  {id: 2, name: 'Computadora 1', price: 19.99},
  {id: 3, name: 'Computadora 1', price: 19.99}
];
function App(){
const [cart, setCart] = useState([]);
const addToCart = (products) => {
  setCart([...cart, products]);
};
const removeFromCart = (productId)=>{
  setCart(cart.filter((product) => product.id !== productId));
};
return(
  <div>
    <h1>Carrito de compras</h1>
  </div>
);
}
export default App;