import axios from 'axios';

const dummyCart = [

    {
        image: "https://gloimg.gbtcdn.com/gb/pdm-product-pic/Electronic/2017/02/25/goods-img/1498125691181740179.jpg",
        id: 3,
        price: 250,
        name: "Laptop Bag"
    },
    {
        image: "http://demo.ajax-cart.com/photos/product/4/176/4.jpg",
        id: 2,
        price: 100,
        name: "Laptop Bag"
    }

];

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



    },
    getCart() {
        const cart = dummyCart.find((cart) => {
            return cart;

        });
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(cart);

            }, 100)
        });




    } ,
    checkOut(orderFormData) {
        // Make a call to checkout the cart
    }
};
