const products = [
    {
        id: 'redshoe',
        description: 'Red Shoe',
        price: 42.22,
        reviews: [],
    },
    {
        id: 'blueshoe',
        description: 'Blue Shoe',
        price: 33.11,
        reviews: [],
    }
];

function getAllProducts(){
    return products;
}

function getProductByPrice(min,max){
    return products.filter((product)=>{
        return product.price>=min && product.price<=max;
    })
}

function getProductById(id){
    return products.find((product) =>{
        return product.id === id;
    })
}

function addNewProdct(id,description,price){
    const newProduct = {
        id,
        description,
        price,
        reviews: [],
    };

    products.push(newProduct);
    return newProduct;
}

function addNewReview(productId,rating,comment){
    const product = getProductById(productId);
    if(product){
        const newReview = {
            rating,
            comment,
        };
        product.reviews.push(newReview);
        return product;
    }

}

module.exports = {
    getAllProducts,
    getProductByPrice,
    getProductById,
    addNewProdct,
    addNewReview,
};