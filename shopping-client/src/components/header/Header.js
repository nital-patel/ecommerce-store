import React from 'react';
import './header.css';

import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <div className="logo">
                eCommerce site!
            </div>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/login'>Login</Link>
                <Link to='/product'>Product</Link>
                <Link to='/cart'>Cart</Link>
                <Link to='/register'></Link>
            </nav>
        </header>
    );
};

export default Header;