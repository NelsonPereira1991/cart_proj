let wishListService = require("../services/wishList");
let responseUtil = require("../utils/response");
module.exports = {
    list : function (req, res) {
        let responseData = wishListService.getWishList();
        return responseUtil.createAndSendResponse("Retrieved wishList successfully", 200, responseData, res);
    },

    update: function (req, res) {
        let productId = req.body.productId;
        let resultData = wishListService.updateWishList(productId);
        return responseUtil.createAndSendResponse(resultData.message, resultData.statusCode, resultData.data, res);
    }
};