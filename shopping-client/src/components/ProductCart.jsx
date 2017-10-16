import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import productApi from '../api/product';
import CartItem from './cart-item';

class ProductCart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productCart: []
        };

        this.updateCart = this.updateCart.bind(this);

        productApi.getCart()
            .then((productCart)=> {
                this.setState({
                    productCart: productCart
                });
            })
    }

    updateCart(id, qty) {
        const cart = productApi.updateCart(id, qty);
        this.setState({
            productCart: cart
        });
    }

    render() {
        const productCart = this.state.productCart;

        const total = productCart.reduce((total, currentValue) => {
            return total + currentValue.price * currentValue.qty;
        }, 0);

        return (
            <div className="wrapper">
                <div   className="content">
                    <div className="item1">
                        <div className="shell">
                            <div className="header">
                                <i className="fa fa-shopping-cart cart-icon" aria-hidden="true"></i>
                                <Link className="cart-list" to="/product">Continue shopping</Link>
                            </div>
                            {
                                productCart.map((cartItem) => {
                                    return (
                                        <CartItem key={cartItem.id} item={cartItem} updateCart={this.updateCart}></CartItem>
                                    )
                                })
                            }
                            <div>Total: ${total}</div>
                            <Link  to="/checkout" className="btn-checkout">Checkout</Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default ProductCart;





