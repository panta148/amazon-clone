import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div className='footer'>
            <div className="footer_part">
                <div className="first">
                    <Link className='link top'> Get to Know Us</Link>
                    <Link className='link'>Careers</Link>
                    <Link className='link'>Blog</Link>
                    <Link className='link'>About Amazon</Link>
                    <Link className='link'>Investor Relations</Link>
                    <Link className='link'>Amazon Devices</Link>
                </div>
                <div className="first">
                    <Link className='link top'>           Make Money with Us</Link>
                    <Link className='link'>  Sell products on Amazon</Link>
                    <Link className='link'>                Sell on Amazon Business</Link>
                    <Link className='link'>             Sell apps on Amazon</Link>
                    <Link className='link'>             Become an Affiliate</Link>
                    <Link className='link'>            Advertise Your Products</Link>
                    <Link className='link'>             Self-Publish with Us</Link>
                    <Link className='link'>            Host an Amazon Hub</Link>
                    <Link className='link'>           ›See More Make Money with Us</Link>
                </div>
                <div className="first">
                    <Link className='link top'>         Amazon Payment Products</Link>
                    <Link className='link'>        Amazon Business Card</Link>
                    <Link className='link'>        Shop with Points</Link>
                    <Link className='link'>         Reload Your Balance</Link>
                    <Link className='link'>       Amazon Currency Converter</Link>
                </div>
                <div className="first">

                    <Link className='link top'>               Let Us Help You</Link>
                    <Link className='link'>               Amazon and COVID-19</Link>
                    <Link className='link'>                Your Account</Link>
                    <Link className='link'>               Your Orders</Link>
                    <Link className='link'>               Shipping Rates & Policies</Link>
                    <Link className='link'>              Returns & Replacements</Link>
                    <Link className='link'>              Manage Your Content and Devices</Link>
                    <Link className='link'>           Amazon Assistant</Link>
                    <Link className='link'>           Help</Link>
                </div>
            </div>
        </div>
    )
}

export default Footer
