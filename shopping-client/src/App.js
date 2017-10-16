import React, { Component } from 'react';
import './App.css';

import {
    Router as Router,
    Route
} from 'react-router-dom';

import Header from './components/header/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import ProductList from './components/ProductList';
import ProductCart from './components/ProductCart';
import Order from './components/Order';
import  ProductData from './components/ProductData';

import createBrowserHistory from 'history/createBrowserHistory'

const history = createBrowserHistory();
window.applicationHistory = history;

class App extends Component {
    render() {
        return (
            <Router history={history}>
                <div className="App">
                    <Header />
                    <div className="container">
                        <Route exact path="/" component={Home} />
                        <Route exact path='/product' component={ProductList} />
                        <Route exacr path='/cart' component={ProductCart} />
                        <Route exact path='/checkout' component={Order} />
                        <Route exact path='/product/:id' component={ProductData} />
                    </div>
                    <Footer />
                </div>
            </Router>
        );
    }
}

export default App;