import GnomeAttributesScale from './GnomeAttributesScale'
import Image from 'next/image'
import '../styles/GnomeItem.css'

function GnomeItem({name, cover, id, resistance, rarity}) {
  return(
    <li key={id} className='gnome-item'>
      <Image className='gnome-item-cover' src={cover} alt={`${name} cover`}/>
      {name}
      <div>
				<GnomeAttributesScale specificity='resistance' scaleValue={resistance} />
				<GnomeAttributesScale specificity='rarity' scaleValue={rarity} />
			</div>
    </li>
  )
}
export default GnomeItem
