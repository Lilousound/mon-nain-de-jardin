import { nainsList } from "../datas/nainsList"
import '../styles/Categories.css'

interface CategoriesProps {
  selectedCategory: string | null;
  setSelectedCategory: (category: string | null) => void;
}

function Categories({ selectedCategory, setSelectedCategory}: CategoriesProps) {
  const categories = nainsList.reduce(
    (acc, nain) =>
      acc.includes(nain.category) ? acc : acc.concat(nain.category),
    []
  )

  return (
    <div className="categories">
      <button className={`button ${selectedCategory === null ? 'button-selected' : ''}`}
        onClick={() => setSelectedCategory(null)}>Tous
      </button>
        {categories.map((cat) =>
            <button className={`button ${selectedCategory === cat ? 'button-selected' : ''}`}
              key={cat}
              onClick={() => {
                setSelectedCategory(cat);
                // add.className="cliked"
              }}
            >{cat}</button>
          )}
    </div>
  )
}
export default Categories
