import { Link, Outlet } from "react-router-dom"
import { useContext } from "react"
import {ReactComponent as SpringLogo} from 'assets/spring.svg'
import { UserContext } from "contexts/user.context"
import { signOutUser } from 'utils/firebase.utils'
import CartIcon from "components/cart-icon/cart-icon.component.jsx"

import './navigation-bar.styles.scss'
import { CartContext } from "contexts/cart.context"
import CartDropdown from "components/cart-dropdown/cart-dropdown.component"

const NavigationBar = () => {
    const { currentUser } = useContext(UserContext)
    const { isCartOpen } = useContext(CartContext)

    const signOutCallBack = async () => {
        await signOutUser()
    }

    return (
        <>
            <div className="navigation">
                <Link className="logo-container" to='/'>
                    <SpringLogo className="logo"/>
                </Link>
                <div className="nav-links-container">
                    <Link className="nav-link" to='/shop'>
                        Shop
                    </Link>
                    {
                        currentUser ? (
                            <span className="nav-link" onClick={ signOutCallBack } >
                                Sign Out
                            </span>
                        ) : (
                            <Link className="nav-link" to='/auth'>
                                Sign In
                            </Link>
                        )
                    }
                     <CartIcon/>
                </div>
                { isCartOpen && <CartDropdown/>}
            </div>
            <Outlet/>
        </>
    )
}

export default NavigationBar