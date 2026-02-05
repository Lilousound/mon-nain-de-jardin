
'use client';
import '../styles/Layout.css'


function GnomeAttributesScale ({ scaleValue, specificity }) {
  const range =[1, 2, 3]
  const scaleType =
    specificity === 'rarity' ? ('💎') : ('🔨')
  const quantityLabel = {
    1: "faible",
    2: "bonne",
    3: "grande"
  };

  function handleClick(){
    alert( `Ce nain à une ${quantityLabel[scaleValue]} ${specificity === 'rarity' ? ('rareté') : ('résistance')}`)
  }
    return (
      <div className="attributes" onClick={() => {handleClick()}}>
			{range.map((rangeElem) =>
				scaleValue >= rangeElem ? (
					<span key={rangeElem.toString()}>{scaleType}</span>
				) : null
			)}
		</div>
    )
}
export default GnomeAttributesScale
