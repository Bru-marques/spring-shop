import CategoriesItem from "../category-item/category-item.component"
import  { categories } from './categories'
import './directory.styles.scss'

const Directory = () => {
    return(
        <div className="categories-container">
        {categories.map((category) => (
          <CategoriesItem key={category.id}  category={category}  />
        ))}
      </div>
    )
}

export default Directory