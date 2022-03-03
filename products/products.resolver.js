const productModel = require('./products.model');

module.exports = {
    Query: {
        products: () =>{
            return productModel.getAllProducts();
        },
        productByPrice: (_,args) =>{
            return productModel.getProductByPrice(args.min, args.max);
        },
        productById: (_,args) =>{
            return productModel.getProductById(args.id);
        }
    }
};