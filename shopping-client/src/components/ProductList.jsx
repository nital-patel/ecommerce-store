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
            <div >
                {
                    productList.map((product) =>
                        (
                            <div key={product.id}>
                                <Link to={`/product/${product.id}`}><img className="img1" src={product.image}></img></Link>
                                <Link to="/add to cart">Add to cart</Link>
                            </div>
                        )
                    )

                }
            </div>
        );
    }s
}
export default ProductList;