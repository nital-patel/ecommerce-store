import axios from 'axios';

const cart = [{"id":16,"name":"Octocat Mug","image":"https://cdn.shopify.com/s/files/1/0051/4802/products/mug-thumb_1024x1024.jpg?v=1371488151","qty":2,"price":14},{"id":17,"name":"Contribution Mug","image":"https://cdn.shopify.com/s/files/1/0051/4802/products/Contrib._Mug_thumb_1024x1024.jpg?v=1489593460","qty":1,"price":20},{"id":19,"name":"Atom Coasters","image":"https://cdn.shopify.com/s/files/1/0051/4802/products/coasters_1024x1024.jpg?v=1432017189","qty":1,"price":5}];

export default {
    getProducts() {
        return new Promise((resolve) => {
            axios.get('http://localhost:3001/product')
                .then((response) => {
                    resolve(response.data);
            });
        });
    },
    getProduct(id){
        return new Promise((resolve) => {
            axios.get('http://localhost:3001/product/' + id)
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
    checkOut(orderFormData) {
        // Make a call to checkout the cart
    }
};
