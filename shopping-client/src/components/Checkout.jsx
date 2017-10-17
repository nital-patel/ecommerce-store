import React, { Component } from 'react';
import productApi from '../api/product';
class Checkout extends Component {
    constructor() {
        super();
        this.state = {};
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(event) {
        this.setState(Object.assign({}, this.state, {
                [event.target.name]: event.target.value
            })
        );
    }

    onSubmit(e) {
        e.preventDefault();
        productApi.checkOut(this.state);
    }

    render() {
        return (
            <div className="form">
                <form>
                    <h1>Customer information</h1>
                    <div>
                        <input type="text" className="email" placeholder="Email" name="email" onChange={this.onChange} value={this.state.email} />
                    </div>
                        <h2>Shipping address</h2>
                    <div>
                        <input type="text" className="add" placeholder="First name" name="firstname" onChange={this.onChange} value={this.state.firstname} />
                        <input type="text" className="add" placeholder="Last name" name="lastname" onChange={this.onChange} value={this.state.lastname} />
                    </div>
                    <div>
                        <input type="text" className="add" placeholder="Address" name="address" onChange={this.onChange} value={this.state.address} />
                        <input type="text" className="add" placeholder="Apt,suite,etc." name="address2" onChange={this.onChange} value={this.state.aptsuiteetc} />
                    </div>
                    <div>
                        <input type="text" className="city" placeholder="City" name="city" onChange={this.onChange} value={this.state.city} />
                    </div>
                    <div>
                        <input type="text" className="County" placeholder="County" name="county" onChange={this.onChange} value={this.state.county} />
                        <input type="text" className="County" placeholder="State" name="state" onChange={this.onChange} value={this.state.state} />
                        <input type="text" className="County" placeholder="Zip code" name="zipcode" onChange={this.onChange} value={this.state.zipcode} />
                    </div>
                    <div>
                        <input type="text"  className="num" placeholder="Phone" name="phone" onChange={this.onChange} value={this.state.phone} />
                    </div>
                    <div>
                    <button className="btn" onClick={this.onSubmit}>Continue to shipping method</button>
                    </div>

                </form>
            </div>
        );
    }
}
export default Checkout;