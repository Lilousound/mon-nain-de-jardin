import { useState } from 'react'
import Image from 'next/image'
import '../styles/GnomeItem.css'
import GnomeAttributesScale from './GnomeAttributesScale'
import GnomeModal from './GnomeModal'
import { GnomeItemProps } from '../types'


function GnomeItem({name, cover, id, resistance, rarity, price, description}: GnomeItemProps) {
  const [isModalOpen, setIsModalOpen] = useState(false); // gestion modale avec infos
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return(
     <>
        <li key={id} className='gnome-item' onClick={openModal}>
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

        {/* Modale */}
        <GnomeModal
          isOpen={isModalOpen}
          onClose={closeModal}
          name={name}
          price={price}
          cover={cover}
          resistance={resistance}
          rarity={rarity}
          description={description}
        />
      </>
  )
}
export default GnomeItem
