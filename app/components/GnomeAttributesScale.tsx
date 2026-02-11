'use client';
import { useState } from 'react';
import '../styles/Layout.css'

interface GnomeAttributesScaleProps {
  scaleValue: number;
  specificity: 'rarity' | 'resistance';
}

function GnomeAttributesScale ({ scaleValue, specificity }: GnomeAttributesScaleProps) {
  const [showTooltip, setShowTooltip] = useState(false); // État pour gérer l'affichage du tooltip
  const range =[1, 2, 3]
  const scaleType =
    specificity === 'rarity' ? ('💎') : ('🔨')
  const quantityLabel = {
    1: "faible",
    2: "bonne",
    3: "grande"
  };


return (
    <div
      className="attributes"
      onMouseEnter={() => setShowTooltip(true)} // Affiche le tooltip au survol
      onMouseLeave={() => setShowTooltip(false)} // Masque le tooltip quand la souris quitte
    >
      {range.map((rangeElem) =>
        scaleValue >= rangeElem ? (
          <span key={rangeElem.toString()}>{scaleType}</span>
        ) : null
      )}
      {showTooltip && ( // Affiche le tooltip uniquement si `showTooltip` est vrai
        <div className="tooltip">
          {`Ce nain a une ${quantityLabel[scaleValue]} ${specificity === 'rarity' ? 'rareté' : 'résistance'}`}
        </div>
      )}
    </div>
  );
}

export default GnomeAttributesScale;
