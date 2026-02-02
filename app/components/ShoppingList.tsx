// @ts-nocheck
// "use client";
import { nainsList } from '../datas/nainsList'
import '../styles/ShoppingList.css'
import GnomeItem from './GnomeItem'

export function ShoppingList({ cart, updateCart }) {
  const categories = nainsList.reduce(
    (acc, nain) =>
      acc.includes(nain.category) ? acc : acc.concat(nain.category),
    []
  )
  function addToCart(name, price) {
    //vérifie si l'article est déjà dans le panier
    const cartItem = cart.find((item) => item.name === name)
    if (cartItem) {
      //si oui, on augmente la quantité
      const newCart = cart.map((item) => {
        if (item.name === name) {
          return { ...item, amount: item.amount + 1 }
        } else {
          return item
        }
      })
      updateCart(newCart)
    } else {
      //si non, on l'ajoute au panier
      updateCart([...cart, { name, price, amount: 1 }])
    }

  }
  return (
    <div>
      <ul>
        {categories.map((cat) =>
        <li key={cat}>{cat}</li> )}
      </ul>
      <ul className="nains-list">
        {nainsList.map(({ id, cover, name, resistance, rarity, price }) => (
          <div key={id}>
            <GnomeItem key={id} cover={cover} name={name} price={price} resistance={resistance} rarity={rarity}/>
            <button className="button" onClick={() => addToCart(name, price)}>Ajouter</button>
          </div>
        )
      )}

      </ul>
    </div>

  )
}

export default ShoppingList
