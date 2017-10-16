import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import productApi from '../api/product';
class ProductList extends Component {
    constructor() {
        super();
        this.state = {
            productList: []
        };

        productApi.getProducts()
            .then((productList)=> {
                this.setState({
                    productList: productList
                });
            })
    }

    render() {
        const productList = this.state.productList;
        return (
            <div className="wrapper" >
                {
                    productList.map((product) =>  (
                        <div className="content" key={product.id}>
                            <div className="item">
                                <div className="shell">
                                    <div className="header">
                                        <h1 className="product-name">{product.name}</h1>
                                        <p className="product-price">{product.price}</p>
                                    </div>
                                    <Link to={`/product/${product.id}`}><img className="img1" src={product.image}></img></Link>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        );
    }
}
export default ProductList;