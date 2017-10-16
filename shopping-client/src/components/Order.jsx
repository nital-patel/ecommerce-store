import React, { Component } from 'react';

class Order extends Component {
    constructor() {
        super();
        this.state = {}
    }
    render() {
        return (
            <div className="form">
                <form>
                    <h1>Customer information</h1>
                    <div>
                        <input type="text" className="email" placeholder="Email" name="email" value={this.state.email} />
                    </div>
                        <h2>Shipping address</h2>
                    <div>
                        <input type="text" className="add" placeholder="First name" name="firstname" value={this.state.firstname} />
                        <input type="text" className="add" placeholder="Last name" name="lastname" value={this.state.lastname} />
                    </div>
                    <div>
                        <input type="text" className="add" placeholder="Address" name="address" value={this.state.address} />
                        <input type="text" className="add" placeholder="Apt,suite,etc." name="address2" value={this.state.aptsuiteetc} />
                    </div>
                    <div>
                        <input type="text" className="city" placeholder="City" name="city" value={this.state.city} />
                    </div>
                    <div>
                        <input type="text" className="County" placeholder="County" name="county" value={this.state.county} />
                        <input type="text" className="County" placeholder="State" name="state" value={this.state.state} />
                        <input type="text" className="County" placeholder="Zip code" name="zipcode" value={this.state.zipcode} />
                    </div>
                    <div>
                        <input type="text"  className="num" placeholder="Phone" name="phone" value={this.state.phone} />
                    </div>
                    <button className="btn">Continue to shipping method</button>

                </form>




            </div>



        );
    }
}
export default Order;