import React from 'react';
import { Component } from 'react';
import './header.css';

import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <header>
                <div className="logo">
                    eCommerce site!
                </div>
                <nav>
                    <Link to='/'>Home</Link>
                    {
                        !this.props.user ?
                            <a href='http://localhost:3001/auth/google'>Login</a>
                            :
                            <span>Welcome {this.props.user.name}</span>
                    }

                    <Link to='/product'>Product</Link>
                    <Link to='/cart'>Cart</Link>
                    <Link to='/register'></Link>
                </nav>
            </header>
        );
    }
};

export default Header;