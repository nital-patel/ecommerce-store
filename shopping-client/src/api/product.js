

const dummyProducts =  [
    {
        image: "https://gloimg.gbtcdn.com/gb/pdm-product-pic/Electronic/2017/02/25/goods-img/1498125691181740179.jpg",
        description: "Lorem ipsum dolor sit amet, et pri iudico propriae accommodare. Mel quod saepe iisque ad, eu partiendo laboramus vituperatoribus sea, nihil virtute ea sea. Sed at denique signiferumque, te nibh dolores voluptatum cum. Nec ex solet reformidans. Pri ne debet accumsan, has ne tale tantas sapientem. Mei et munere nostro pertinax.\n" +
        "\n" +
        "Eligendi conceptam id pro, eum mutat mentitum singulis et. Te usu admodum signiferumque, case omnesque ullamcorper nam cu. Vero delicata an ius, per nostrud nominavi an. At sit stet graeco percipit, at sea intellegat posidonium, quod patrioque iracundia his ex.",
        id: 1,
        price: 200,
        name: "Laptop Bag"
    },
    {
        image: "https://s13.favim.com/610/160225/amazing-beautiful-black-and-white-cute-Favim.com-4037863.jpg",
        description: "Lorem ipsum dolor sit amet, et pri iudico propriae accommodare. Mel quod saepe iisque ad, eu partiendo laboramus vituperatoribus sea, nihil virtute ea sea. Sed at denique signiferumque, te nibh dolores voluptatum cum. Nec ex solet reformidans. Pri ne debet accumsan, has ne tale tantas sapientem. Mei et munere nostro pertinax.\n" +
        "\n" +
        "Eligendi conceptam id pro, eum mutat mentitum singulis et. Te usu admodum signiferumque, case omnesque ullamcorper nam cu. Vero delicata an ius, per nostrud nominavi an. At sit stet graeco percipit, at sea intellegat posidonium, quod patrioque iracundia his ex.",
        id: 2,
        price: 100,
        name: "Make up"
    },
    {
        image: "https://cdn3.volusion.com/o37eo.toug5/v/vspfiles/photos/053941186104-2.jpg",
        description: "Lorem ipsum dolor sit amet, et pri iudico propriae accommodare. Mel quod saepe iisque ad, eu partiendo laboramus vituperatoribus sea, nihil virtute ea sea. Sed at denique signiferumque, te nibh dolores voluptatum cum. Nec ex solet reformidans. Pri ne debet accumsan, has ne tale tantas sapientem. Mei et munere nostro pertinax.\n" +
        "\n" +
        "Eligendi conceptam id pro, eum mutat mentitum singulis et. Te usu admodum signiferumque, case omnesque ullamcorper nam cu. Vero delicata an ius, per nostrud nominavi an. At sit stet graeco percipit, at sea intellegat posidonium, quod patrioque iracundia his ex.",
        id: 3,
        price: 250,
        name: "Pikachu"
    }
];

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
            setTimeout(()=>{
                resolve(dummyProducts);
            }, 100);
        });
    },
    getProduct(id){
        const product = dummyProducts.find((product) => {
            return product.id == id;
        });

        return new Promise((resolve) => {
            (() => {
                resolve(product);
            }, 100)
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
