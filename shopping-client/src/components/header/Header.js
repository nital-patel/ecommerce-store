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
                <Link to='/product'>Product</Link>
                <Link to='/cart'>Cart</Link>
            </nav>
        </header>
    );
};

export default Header;