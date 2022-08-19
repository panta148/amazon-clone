import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useStateValue } from './StateProvider'
function Header() {
    // const [state,dispatch]=useStateValue();
    const [{ basket }] = useStateValue();
    return (
        <nav className='header'>
            <Link to='/'> <img src={process.env.PUBLIC_URL + "/images/logo.png"} className='header_logo' alt=" amazon logo" /></Link>
            <div className="heading_search">
                <input type="text" className="header_searchinput" />
                <SearchIcon className="search_icon" />
            </div>

            <div className="header_nav">
                <Link to='/login' className="Header_link">
                    <div className="header_option">
                        <span className='headeroption1' >Hello Amrit</span>
                        <span className='headeroption2'>Signin</span>
                    </div>
                </Link>
                <Link className="Header_link">
                    <div className="header_option">
                        <span className='headeroption1'>Returns</span>
                        <span className='headeroption2'>Orders</span>
                    </div>
                </Link>
                <Link className="Header_link">
                    <div className="header_option">
                        <span className='headeroption1'>Your</span>
                        <span className='headeroption2'>Prime</span>
                    </div>
                </Link>
                <Link to='/checkout' className="Header_link">
                    <div className="headerBasket">
                        <ShoppingCartIcon />
                        <span className='headeroption2 headerbasketcount'>{basket?.length}</span>

                    </div>
                </Link>
            </div>
        </nav>
    )
}

export default Header
