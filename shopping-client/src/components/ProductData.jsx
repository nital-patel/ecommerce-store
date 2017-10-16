import React, { Component } from 'react';
import productApi from '../api/product';

class ProductData extends Component {
    constructor(props) {
        super(props);

        // alert(props.match.params.id);

        this.state = {
            productData: {}
        };

        this.addToCart = this.addToCart.bind(this);

        productApi.getProduct(props.match.params.id)
            .then((productData)=> {

                console.log(productData);
                this.setState({
                    productData: productData
                });
            })
    }

    addToCart () {
        productApi.addToCart(this.state.productData);
    }

    render() {
        const productData = this.state.productData;
        return (
            <div className="wrapper">
                <div className="content">
                    <div className="item">
                        <div className="shell">
                            <div className="header">
                                <p className="product-name"> {productData.name}</p>
                                <p className="product-price">price: {productData.price}</p>
                            </div>
                            <div>
                                <img className="img-data" src={productData.image}></img>
                            </div>
                            <div className="right-col">
                                <button className="btn-add" onClick={this.addToCart}>Add to cart</button>
                                <p className="decs">{productData.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductData;
