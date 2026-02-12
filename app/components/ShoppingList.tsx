import { nainsList } from '../datas/nainsList'
import '../styles/ShoppingList.css'
import GnomeItem from './GnomeItem'
import Categories from './Categories'
import { useState } from 'react'
import { ShoppingListProps } from '../types'

export function ShoppingList({ cart, updateCart }: ShoppingListProps) {
  const [selectedCategory, setSelectedCategory] = useState(null);
  let nainsListFiltered = [];
  if (selectedCategory === null){
    nainsListFiltered = nainsList;
  } else {
     nainsListFiltered = nainsList.filter((nain) => nain.category === selectedCategory)
  }

  function addToCart(name: string, price: number) {
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
    <div className="shopping-list">
      <Categories selectedCategory={selectedCategory}
                  setSelectedCategory={setSelectedCategory}/>
      <ul className="nains-list">
        {nainsListFiltered.map(({ id, cover, name, resistance, rarity, price, description }) => (
          <div key={id}>
            <GnomeItem key={id} cover={cover} name={name} price={price} resistance={resistance} rarity={rarity} description={description}/>
            <button className="button add-cart" onClick={() => addToCart(name, price)}>Ajouter</button>
          </div>
        )
      )}

      </ul>
    </div>

  )
}

export default ShoppingList
