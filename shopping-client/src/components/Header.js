import React from 'react';

import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <div className='logo'>
                eCommerce site!
            </div>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/'>Product</Link>
                <Link to='/'>About</Link>
            </nav>
        </header>
    );
};

export default Header;