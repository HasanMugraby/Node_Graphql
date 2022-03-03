const products = [
    {
        id: 'redshoe',
        description: 'Red Shoe',
        price: 42.22,
    },
    {
        id: 'blueshoe',
        description: 'Blue Shoe',
        price: 33.11,
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

module.exports = {
    getAllProducts,
    getProductByPrice,
    getProductById,
};