import { Link, Outlet } from "react-router-dom"
import { useContext } from "react"
import {ReactComponent as SpringLogo} from 'assets/spring.svg'
import './navigation-bar.styles.scss'
import { UserContext } from "contexts/user.context"
import { signOutUser } from 'utils/firebase.utils'


const NavigationBar = () => {
    const { currentUser, setCurrentUser } = useContext(UserContext)
    
    const signOutCallBack = async () => {
        await signOutUser()
        setCurrentUser(null)
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
                </div>
            </div>
            <Outlet/>
        </>
    )
}

export default NavigationBar