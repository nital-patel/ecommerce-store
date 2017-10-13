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
                    productList.map((product) =>
                        (
                            <div className="content" key={product.id}>
                                <div className="item">
                                    <div className="shell">
                                        <div className="header">
                                    <h1 className="product-name">name: {productList.name}</h1>
                                    <h1 className="product-price">price: {productList.price}</h1>
                                            </div>
                                <Link to={`/product/${product.id}`}><img className="img1" src={product.image}></img></Link>
                                </div>

                                    </div>
                            </div>
                        )
                    )



                }
            </div>

        );
    }
}
export default ProductList;