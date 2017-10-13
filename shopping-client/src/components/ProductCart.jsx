import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import productApi from '../api/product';

class ProductCart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productCart: {}
        };

        productApi.getCart()
            .then((productCart)=> {

                console.log(productCart);
                this.setState({
                    productCart: productCart
                });
            })
    }

    render() {
        const productCart = this.state.productCart;

        return (
            <div className="wrapper">

            <div  key={productCart} className="content">
                <div className="item1">
                    <div className="shell">
                <div className="header">
                    <i className="fa fa-shopping-cart cart-icon" aria-hidden="true"></i>
                    <a className="cart-list" href="#">Continue shopping</a>
                </div>
                        <div className="cart">
                    <img className="img" src={productCart.image}></img>

                    <p className="name"> {productCart.name}</p>

                </div>
                <div className="btn-cart">

                    <button className="add-btn">Add</button>
                    <button className="del-btn">Delete</button>
                </div>

                <Link  to="/checkout" className="btn-checkout">Checkout</Link>
            </div>

                </div>
            </div>

            </div>

        );
    }
}
export default ProductCart;





