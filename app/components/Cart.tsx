'use client';
import '../styles/Cart.css'
import { useState } from 'react';

function Cart() {
  const lampePrice = 12
  const [cart, setCart] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  return ( isOpen ? (<div className="cart">
            <button className="toggle-button" onClick={() => setIsOpen(false)}>X Fermer le panier</button>
            <h2>Panier</h2>
            <div className="cart-items">Nain à la Lampe : {lampePrice}€</div>
            <button className="button" onClick={() => {setCart(cart + 1)}}>Ajouter</button>
            <div id="cart-total">Total: {lampePrice * cart}€</div>
            <div><em>Articles dans le panier: {cart}</em></div>
            <button className="button" onClick={() => setCart(0)}>Vider le panier</button>
          </div>
    ) : (
      <div className="cart-closed">
        <button className="toggle-button" onClick={() => setIsOpen(true)}>🛒</button>
      </div>
      ))

}

export default Cart
