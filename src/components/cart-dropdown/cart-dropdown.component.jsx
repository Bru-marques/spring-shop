import Button from "components/button/button.component";
import React from "react";

import './cart-dropdown.styles.scss'

const CartDropdown = () => {
    return (
        <div className="cart-dropdown-container">
            <div className="cart-items"/>
            <Button children={'GO TO CHECKOUT'} buttonType={undefined}/>
        </div>
    )
}

export default CartDropdown;