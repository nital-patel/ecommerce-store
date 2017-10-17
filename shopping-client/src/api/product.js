import axios from 'axios';
axios.defaults.withCredentials = true;
const cart = [];

const checkout = [
    {
        email: "patelprit@gmail.com",
        first_name: "Prit",
        last_name: "Patel",
        address1: "54jhabfjhbj",
        address2: "45bjvbdjlvb",
        city: "surat",
        state: "gujrat",
        country: "india",
        zipcode: 988988,
        phone: 4789078474,
        date: 2017/12/20

    }
];
export default {
    getProducts() {
        return new Promise((resolve) => {
            axios.get('http://localhost:3001/product', {withCredentials: true})
                .then((response) => {
                    resolve(response.data);
                });
        });
    },
    getProduct(id){
        return new Promise((resolve) => {
            axios.get('http://localhost:3001/product/' + id, {withCredentials: true})
                .then((response) => {
                    resolve(response.data);
                });
        });
    },
    addToCart(product) {
        let matchingItem;
        matchingItem = cart.find((item) => {
            return item.id === product.id;
        });
        if (matchingItem) {
            matchingItem.qty += 1;
        } else {
            cart.push({
                id: product.id,
                name: product.name,
                image: product.image,
                qty: 1,
                price: product.price
            });
        }
        window.applicationHistory.push({
            pathname: "/cart",
            state: {}
        });
    },
    getCart() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(cart);
            }, 100)
        });
    },
    updateCart(id, qty){
        let matchingItem;
        const matchingIndex = cart.findIndex((item) => {
            return item.id === id;
        });

        matchingItem = cart[matchingIndex];

        if (matchingItem) {
            matchingItem.qty += qty;
        }

        if (matchingItem.qty === 0) {
            cart.splice(matchingIndex, 1)[0];
        }
        return cart;

    },

    userProfile() {
        return axios.get('http://localhost:3001/me', {withCredentials: true});
    },

    checkOut(orderForm) {
        const orderDetails = {
            ...orderForm,
            cart: cart
        };
        return axios.post('http://localhost:3001/product/checkout', orderDetails, {
            withCredentials: true
        })
        .then(() => {
            window.applicationHistory.push({
                pathname: "/product",
                state: {}
            });
        })
    }
};
