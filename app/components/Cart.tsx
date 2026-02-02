'use client';
import '../styles/Cart.css'
import { useState } from 'react';

function Cart({cart, updateCart}) {
  const [isOpen, setIsOpen] = useState(false);
  const totalCart = cart.reduce((acc, item) => acc + item.price * item.amount, 0);


  return ( isOpen ? (<div className="cart">
            <button className="toggle-button" onClick={() => setIsOpen(false)}>X Fermer le panier</button>
            <h2>Panier</h2>
            <div className="cart-items">
              {cart.map((item) => (
                <div key={item.name} className="cart-item">
                  <div className="cart-item-name">
                    <span>{item.name}</span>
                    <span className="cart-item-amount">{item.amount}</span>
                  </div>
                  <div className="cart-item-price">
                    <span><em>{item.price}€</em></span>
                    <span className="cart-item-trash">✗</span>
                  </div>

                </div>
              ))}
            </div>
            <div id="cart-total">Total: {totalCart.toFixed(2)}€</div>  {/* limité à 2 chiffres après la virgule */}
            <div><em>Articles dans le panier: {cart.reduce((acc, item) => acc + item.amount, 0)}</em></div>
            <button className="button" onClick={() => updateCart([])}>Vider le panier</button>
          </div>
    ) : (
      <div className="cart-closed">
        <button className="toggle-button" onClick={() => setIsOpen(true)}>🛒</button>
      </div>
      ))

}

export default Cart
