import Button from 'components/button/button.component';
import './product-card.styles.scss';

const ProductCard = ({ product }) => {
    const {imageUrl, name,  price} = product

    return(
        <div className='product-card-container '>
            <img src={ imageUrl } alt={`${name}`}/>
            <div className='footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <Button buttonType='invert'>Add to card</Button>
        </div>
    )
}

export default ProductCard