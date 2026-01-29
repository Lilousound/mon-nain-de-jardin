import { nainsList } from '../datas/nainsList'
import '../styles/ShoppingList.css'
import GnomeItem from './GnomeItem'

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
        {nainsList.map(({ id, cover, name, resistance, rarity }) => (
          <GnomeItem
            key={id}
						cover={cover}
						name={name}
						resistance={resistance}
						rarity={rarity}
          />
        )
      )}
      </ul>
    </div>

  )
}

export default ShoppingList
