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

            <div key={productCart} className="order">
                <div className="product_header">
                    <i className="fa fa-shopping-cart cart-icon" aria-hidden="true"></i>
                    <a className="link-cart" href="#">Continue shopping</a>
                    <img className="img-cart" src={productCart.image}></img>
                    <p className="cart-price"> {productCart.price}</p>
                    <p className="cart-name"> {productCart.name}</p>
                </div>
                <div className="btn-cart">
                    <button>Add</button>
                    <button>Delete</button>
                </div>
                <Link className="btn-add" to="/add to cart">Checkout</Link>
            </div>

        );
    }
}
export default ProductCart;





