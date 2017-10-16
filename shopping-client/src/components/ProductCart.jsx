import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import productApi from '../api/product';

class ProductCart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productCart: []
        };

        productApi.getCart()
            .then((productCart)=> {
                this.setState({
                    productCart: productCart
                });
            })
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
                                <a className="cart-list" href="#">Continue shopping</a>
                            </div>
                            {
                                productCart.map((cartItem) => {
                                    return (
                                        <div key={cartItem.id} className="cart">
                                            <img className="img" src={cartItem.image}></img>
                                            <p className="name"> {cartItem.name}</p>
                                            <p>{'Price:' + cartItem.price * cartItem.qty}</p>
                                            <p>{'Qty:' + cartItem.qty}</p>
                                            <div className="btn-cart">
                                                <button className="add-btn">Add</button>
                                                <button className="del-btn">Delete</button>
                                            </div>
                                        </div>
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





