
import GnomeAttributesScale from './GnomeAttributesScale'
import Image from 'next/image'
import '../styles/GnomeItem.css'



function GnomeItem({name, cover, id, resistance, rarity, price}) {

  return(
    <li key={id} className='gnome-item'>
      <Image className='gnome-item-cover' src={cover} alt={`${name} cover`}/>
      <div className='gnome-item-infos'>
        <h3>{name}</h3>
        <p>{price}€</p>
      </div>
      <div>
				<GnomeAttributesScale specificity='resistance' scaleValue={resistance} />
				<GnomeAttributesScale specificity='rarity' scaleValue={rarity} />
			</div>
    </li>
  )
}
export default GnomeItem
