const Product = require('../../models/product');
const lorem = require('faker').lorem;

const dummyData = [
    {
        name: 'Octocat Mug',
        price: 14,
        image: 'https://cdn.shopify.com/s/files/1/0051/4802/products/mug-thumb_1024x1024.jpg?v=1371488151'
    },
    {
        name: 'Contribution Mug',
        price: 20,
        image: 'https://cdn.shopify.com/s/files/1/0051/4802/products/Contrib._Mug_thumb_1024x1024.jpg?v=1489593460'
    },
    {
        name: 'Water Bottle',
        price: 16,
        image: 'https://cdn.shopify.com/s/files/1/0051/4802/products/waterbottlefeaturedpic2_1024x1024.jpg?v=1460565223'
    },
    {
        name: 'Octocat Figure',
        price: 15,
        image: 'https://cdn.shopify.com/s/files/1/0051/4802/products/thumb_2354dfe5-30ea-457f-ac57-194dc2c3c057_1024x1024.jpg?v=1447180277'
    },
    {
        name: 'I [octocat] Code 2.0',
        price: 25,
        image: 'https://cdn.shopify.com/s/files/1/0051/4802/products/preview_313648_1024x1024.jpg?v=1314831257'
    },
    {
        name: 'Atom Coasters',
        price: 5,
        image: 'https://cdn.shopify.com/s/files/1/0051/4802/products/coasters_1024x1024.jpg?v=1432017189'
    },
    {
        name: 'Octocat One-Piece',
        price: 18,
        image: 'https://cdn.shopify.com/s/files/1/0051/4802/products/shop-baby-one-piece_1024x1024_7e628096-8df8-40cd-986e-18ac1f1183b3_1024x1024.png?v=1428080199'
    },
    {
        name: 'Posters',
        price: 10,
        image: 'https://cdn.shopify.com/s/files/1/0051/4802/products/featuredpic_1024x1024.jpg?v=1455732344'
    },
    {
        name: 'Activity Book',
        price: 10,
        image: 'https://cdn.shopify.com/s/files/1/0051/4802/products/final_thumbnail_activity_1024x1024.jpg?v=1483391113'
    },
    {
        name: 'Hoodie',
        price: 55,
        image: 'https://cdn.shopify.com/s/files/1/0051/4802/products/hoodie-thumb_1024x1024.png?v=1374083661'
    },
    {
        name: 'Social Coding Shirt',
        price: 20,
        image: 'https://cdn.shopify.com/s/files/1/0051/4802/products/bothshirtbrickwall2_1024x1024_f2e1e39d-75ca-4c78-9927-b9ea6ae80124_1024x1024.png?v=1428080714'
    },
    {
        name: 'Github Bundle',
        price: 55,
        image: 'https://cdn.shopify.com/s/files/1/0051/4802/products/Chloe-Jackman-Photography-Github-Back-to-school-2017-30_1024x1024.jpg?v=1503342773'
    },
    {
        name: 'Sticker Pack',
        price: 5,
        image: 'https://cdn.shopify.com/s/files/1/0051/4802/products/final_thumbnail_stickers_a18a5a72-23d1-4f11-89f9-e1aa3f752721_1024x1024.jpg?v=1487089066'
    }
];

dummyData.forEach((item) => {
    item.description = lorem.words(100);
    Product.create(item)
        .catch((err) => console.log(err));
});

