import React, { Component } from 'react';

class ProductCart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            item: props.item
        };

        this.addQty = this.addQty.bind(this);
        this.deleteQty = this.deleteQty.bind(this);
    }

    addQty() {
        this.props.updateCart(this.state.item.id, 1);

    }

    deleteQty() {
        this.props.updateCart(this.state.item.id, -1);
    }

    render() {
        const cartItem = this.state.item;

        return (
            <div key={cartItem.id} className="cart">
                <img className="img" src={cartItem.image}></img>
                <p className="name"> {cartItem.name}</p>
                <p>{'Price:' + cartItem.price * cartItem.qty}</p>
                <p>{'Qty:' + cartItem.qty}</p>
                <div className="btn-cart">
                    <button className="add-btn" onClick={this.addQty}>Add</button>
                    <button className="del-btn" onClick={this.deleteQty}>Delete</button>
                </div>
            </div>


        );
    }
}
export default ProductCart;





