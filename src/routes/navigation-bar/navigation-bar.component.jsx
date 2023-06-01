import { Link, Outlet } from "react-router-dom"
import {ReactComponent as SpringLogo} from '../../assets/spring.svg'
import './navigation-bar.styles.scss'

const NavigationBar = () => {
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
                    <Link className="nav-link" to='/sign-in'>
                        Sign In
                    </Link>
                </div>
            </div>
            <Outlet/>
        </>
    )
}

export default NavigationBar