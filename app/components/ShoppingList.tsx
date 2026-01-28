import { nainsList } from '../datas/nainsList'
import '../styles/ShoppingList.css'

export function ShoppingList() {
  const categories = nainsList.reduce(
    (acc, nain) =>
      acc.includes(nain.category) ? acc : acc.concat(nain.category),
    []
  )
  return (
    <div>
      <ul>
        {categories.map((cat) =>
        <li key={cat}>{cat}</li> )}
      </ul>
      <ul className="nains-list">
        {nainsList.map((nain) =>
          <li key={nain.id} className="nain-item">
            {nain.name}
            {nain.isSpecialOffer && <div className="special-offer">Offre spéciale</div>}
          </li>
          )}
      </ul>
    </div>

  )
}

export default ShoppingList
