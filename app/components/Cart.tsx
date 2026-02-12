'use client';
import '../styles/Cart.css'
import { useState, useEffect } from 'react';
import Image from 'next/image'
import trash from "../assets/trash.png"
import shoppingCart from "../assets/shopping-cart.png"

interface CartProps {
  cart: {
    name: string;
    price: number;
    amount: number;
  }[];
  updateCart: (newCart: CartProps['cart']) => void;
}

function Cart({cart, updateCart}: CartProps) {
  const [isOpen, setIsOpen] = useState(false);
  const totalCart = cart.reduce((acc, item) => acc + item.price * item.amount, 0);
  useEffect(() => {
      document.title = `Panier: ${totalCart}€ d'achats`
  }, [totalCart])

  interface CartItem {
    name: string;
    price: number;
    amount: number;
  }
  function removeItem(item: CartItem) {
    if (item.amount > 1) {
        //nouveau tableau avec la quantité diminuée de 1
    const newCart = cart.map((gnome) => { //parcours le panier
      if (gnome.name === item.name) { //trouve l'article à diminuer
        return { ...gnome, amount: gnome.amount - 1 }; //retourne une copie de l'article avec la quantité diminuée
      } else { //pour les autres articles
        return gnome; //retourne l'article tel quel s'il n'est pas celui à diminuer
      }
    });
    updateCart(newCart); //met à jour le panier
  } else if (item.amount === 1) {
    const itemInCart = cart.filter((gnome) => gnome.name !== item.name);
    updateCart(itemInCart);
  }
  }

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
                    <span className="cart-item-trash" onClick={() => removeItem(item)}><Image src={trash} alt='Poubelle' className='trash' /></span>
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
        <span className="toggle-button" onClick={() => setIsOpen(true)}><Image src={shoppingCart} alt='Panier' className='trolley'/></span>
      </div>
      ))

}

export default Cart
