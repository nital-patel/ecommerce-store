import React, { Component } from 'react';
import productApi from '../api/product';
import { Link } from 'react-router-dom';

class ProductData extends Component {
    constructor(props) {
        super(props);

        // alert(props.match.params.id);

        this.state = {
            productData: {}
        };

        productApi.getProduct(props.match.params.id)
            .then((productData)=> {

                console.log(productData);
                this.setState({
                    productData: productData
                });
            })
    }

    render() {
        const productData = this.state.productData;

        return (
            <div key={productData.id}>
                <p className="product-name">name: {productData.name}</p>
                <img className="img-data" src={productData.image}></img>
                <p className="product-price">price: {productData.price}</p>
                <Link className="btn-add" to="/add to cart">Add to cart</Link>
                <div className="desc">
                <p className="product-data">{productData.description}</p>
                </div>

            </div>
        );
    }
}
export default ProductData;
