import Banner from './components/Banner'
import Image from 'next/image'
import logo from './assets/logo.png'
// import Cart from './components/Cart'
import ShoppingList from './components/ShoppingList'

export default function Home() {
  return (

      <div>
        <Banner>
          <Image src={logo} alt='Logo' className='banner-logo' />
          <h1>Mon Nain de Jardin</h1>
        </Banner>
        {/* <Cart /> */}
        <ShoppingList />
      </div>
  );
}
