
function GnomeAttributesScale ({ scaleValue, specificity }) {
  const range =[1, 2, 3]
  const scaleType =
    specificity === 'rarity' ? ('💎') : ('🔨')

    return (
      <div>
			{range.map((rangeElem) =>
				scaleValue >= rangeElem ? (
					<span key={rangeElem.toString()}>{scaleType}</span>
				) : null
			)}
		</div>
    )
}
export default GnomeAttributesScale
