let productService = require("../services/product");
let initialWishList = [];

module.exports = {
    getWishList: function () {
        return {
            wishList: initialWishList
        };
    },

    updateWishList: function (productId) {
        let initialProducts = productService.getAllProducts();

        const checkProductIdIsValid = function (element) {
            return parseInt(element.id) ===  parseInt(productId);
        };

        const checkIfProductIsInTheWishList = function (element) {
            return parseInt(element.id) ===  parseInt(productId);
        };

        let productIndex = initialProducts.findIndex(checkProductIdIsValid);
        if(productIndex === -1) {
            return {
                statusCode: 400,
                message: "Invalid productId",
                data: {
                    wishList: initialWishList
                }
            }
        }

        if(initialWishList.findIndex(checkIfProductIsInTheWishList) === -1) {
            initialWishList.push(initialProducts[productIndex]);
        }
        return {
            statusCode: 200,
            message: "Updated wishList successfully",
            data: {
                wishList: initialWishList
            }
        };
    }
};