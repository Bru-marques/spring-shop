import React, {useContext} from "react";
import { CartContext } from "contexts/cart.context";
import Button from "components/button/button.component";
import CartItem from "components/cart-item/cart-item.component";

import './cart-dropdown.styles.scss'

const CartDropdown = () => {
    const { cartItems } = useContext(CartContext);


    return (
        <div className="cart-dropdown-container">
            <div className="cart-items">
                {cartItems.length ? (
                    cartItems.map((item) => (
                        <CartItem key={item.id} item = {item} />
                    ))
                    ) : ( <span className="empty-message">Your cart is empty!</span>
                
                ) }
            </div>
            <Button children={'GO TO CHECKOUT'} buttonType={undefined}/>
        </div>
    )
}

export default CartDropdown;