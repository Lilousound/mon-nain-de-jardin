import '../styles/Banner.css'
import Image from 'next/image'
import logo from '../assets/logo.png'

function Banner() {

    return <div className="banner">
      <Image src={logo} alt="Logo" className="banner-logo" />
      <h1>Mon Nain de Jardin</h1>

      </div>

}


export default Banner
