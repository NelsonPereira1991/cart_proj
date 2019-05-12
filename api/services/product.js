let initialProducts = require("../data/product");

module.exports = {
    getProducts : function (priceOrder, brandId, pageNumber) {
        let maxElementsPerPage = 6;
        let productsToReturn = [];

        const getProductsFromABrand = function (product) {
            return product.brandId === brandId;
        };

        const sortPricesAscending = function (productA, productB) {
            return (parseFloat(productA.priceDiscounted) || parseFloat(productA.price)) - (parseFloat(productB.priceDiscounted) || parseFloat(productB.price));
        };

        const sortPricesDescending = function (productA, productB) {
            return (parseFloat(productB.priceDiscounted) || parseFloat(productB.price)) - (parseFloat(productA.priceDiscounted) || parseFloat(productA.price));
        };

        //brand filter applied first
        if(brandId != null) {
            productsToReturn = initialProducts.filter(getProductsFromABrand)
        } else {
            productsToReturn = initialProducts;
        }
        let totalMatches = productsToReturn.length;

        //then price order applied second
        if(priceOrder != null) {
            productsToReturn = priceOrder === "asc" ? productsToReturn.sort(sortPricesAscending) : productsToReturn.sort(sortPricesDescending);
        }

        //pagination applied last
        let numberOfPages;
        if(productsToReturn.length <= maxElementsPerPage) {
            numberOfPages = 1;
            //It's a zero starting index
            //slice(startingIndexIncluded, endingIndexNotIncluded)
            if(pageNumber > numberOfPages) {
                productsToReturn = [];
            }
            productsToReturn = productsToReturn.slice(0, productsToReturn.length);
        } else {
            numberOfPages = Math.floor(productsToReturn.length / maxElementsPerPage) + (productsToReturn.length % maxElementsPerPage !== 0 ? 1 : 0);
            let minIndex = (pageNumber - 1) * maxElementsPerPage;
            let maxIndexNotIncluded = pageNumber * maxElementsPerPage;
            productsToReturn = productsToReturn.slice(minIndex, maxIndexNotIncluded)
        }

        return {
            currentPage : pageNumber,
            numberOfPages: numberOfPages,
            totalMatches: totalMatches,
            currentProducts: productsToReturn,
        };
    },

    getAllProducts : function () {
        return initialProducts;
    }
};