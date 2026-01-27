import { nainsList } from '../datas/nainsList'

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
      <ul>
        {nainsList.map((nain) =>
          <li key={nain.id}>{nain.name}</li>
        )}
      </ul>
    </div>

  )
}

export default ShoppingList
