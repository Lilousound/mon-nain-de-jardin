import Image from 'next/image'
import GnomeAttributesScale from './GnomeAttributesScale'
import '../styles/GnomeModal.css'
import React from 'react'

interface GnomeModalProps {
  isOpen: boolean;
  onClose: () => void;
  name: string;
  price: number;
  cover: string;
  resistance: number;
  rarity: number;
  description: string;
}

export default function GnomeModal({isOpen, onClose, name, price, cover, resistance, rarity, description}: GnomeModalProps) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>&times;</button>
        <div className="modal-header">
          <Image src={cover} alt={name}/>
          <div className="modal-title">
            <h2>{name}</h2>
            <p className="modal-price">{price}€</p>
          </div>
        </div>
        <div className="modal-body">
          {description.split('\n').map((line, index) => ( // Permet de gérer les retours à la ligne dans la description
            <React.Fragment key={index}>
              {line}
              <br />
            </React.Fragment>
          ))}
          <div className="modal-attributes">
            <div className="attribute">
              <h4>Résistance :</h4>
              <GnomeAttributesScale specificity="resistance" scaleValue={resistance} />
            </div>
            <div className="attribute">
              <h4>Rareté :</h4>
              <GnomeAttributesScale specificity="rarity" scaleValue={rarity} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
