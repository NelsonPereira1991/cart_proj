let productService = require("../services/product");
let responseUtil = require("../utils/response");

module.exports = {
    list: function (req, res) {
        let priceOrder = req.query.priceOrder || null;
        let brandId = parseInt(req.query.brandId) || null;
        let pageNumber =  parseInt(req.query.pageNumber) || 1;
        let responseData = productService.getProducts(priceOrder, brandId, pageNumber);
        return responseUtil.createAndSendResponse("Retrieved products successfully", 200, responseData, res);
    }
};