"use client";
import Banner from './components/Banner'
import Image from 'next/image'
import logo from './assets/logo.png'
import Cart from './components/Cart'
import ShoppingList from './components/ShoppingList'
import Footer from './components/Footer'
import './styles/Layout.css'
import { useState, useEffect } from 'react'

export default function Home() {
  // Initialise le state avec une valeur par défaut (côté serveur)
  const [cart, updateCart] = useState([]);

  // Charge les données depuis localStorage après le rendu initial (côté client)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedCart = localStorage.getItem('cart');
      if (savedCart) {
        updateCart(JSON.parse(savedCart));
      }
    }
  }, []); // Le tableau vide [] signifie que ce useEffect ne s'exécute qu'une fois, après le rendu initial

  // Met à jour localStorage quand le panier change
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('cart', JSON.stringify(cart));
    }
  }, [cart]); // Ce useEffect s'exécute à chaque fois que cart change

  return (

      <div>
        <Banner>
            <Image src={logo} alt='Logo' className='banner-logo' />
            <div className="banner-title">
              <h1>Mon Nain de Jardin</h1>
              <p>Choisissez le nain qui vous convient</p>
             </div>

        </Banner>
        <div className="main-layout">
          <Cart cart={cart} updateCart={updateCart}/>
          <ShoppingList cart={cart} updateCart={updateCart}/>
        </div>
        <Footer />
      </div>

  );
}
