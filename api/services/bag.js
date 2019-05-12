let productService = require("../services/product");
let initialBag = [];

const sumPricesInBag = function (accumulator, currentProductInBag) {
    let priceToSum = parseFloat(currentProductInBag.priceDiscounted) || parseFloat(currentProductInBag.price) || 0;
    return accumulator + priceToSum;
};

module.exports = {
    getBag: function () {
        let sumPrices = initialBag.reduce(sumPricesInBag, 0);
        return {
            sumPrices: sumPrices,
            bag: initialBag
        }

    },

    updateBag: function(productId) {
        let initialProducts = productService.getAllProducts();

        const checkProductIdIsValid = function (element) {
            return parseInt(element.id) ===  parseInt(productId);
        };

        const checkIfProductIsInTheBag = function (element) {
            return parseInt(element.id) ===  parseInt(productId);
        };


        let productIndex = initialProducts.findIndex(checkProductIdIsValid);
        if(productIndex === -1) {
            let sumPrices = initialBag.reduce(sumPricesInBag, 0);
            return {
                statusCode: 400,
                message: "Invalid productId",
                data: {
                    sumPrices: sumPrices,
                    bag: initialBag
                }
            }
        }

        if(initialBag.findIndex(checkIfProductIsInTheBag) === -1) {
            initialBag.push(initialProducts[productIndex]);
        }
        let sumPrices = initialBag.reduce(sumPricesInBag, 0);
        return {
            statusCode: 200,
            message: "Updated bag successfully",
            data: {
                sumPrices: sumPrices,
                bag: initialBag
            }
        }
    }
};