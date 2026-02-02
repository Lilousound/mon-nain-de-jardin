"use client";
import Banner from './components/Banner'
import Image from 'next/image'
import logo from './assets/logo.png'
import Cart from './components/Cart'
import ShoppingList from './components/ShoppingList'
import Footer from './components/Footer'
import './styles/Layout.css'
import { useState } from 'react'

export default function Home() {
  const [cart, updateCart] = useState([]);
  return (

      <div>
        <Banner>
          <Image src={logo} alt='Logo' className='banner-logo' />
          <h1>Mon Nain de Jardin</h1>
        </Banner>
        <div className="main-layout">
          <Cart cart={cart} updateCart={updateCart}/>
          <ShoppingList cart={cart} updateCart={updateCart}/>
        </div>
        <Footer />
      </div>

  );
}
