let bagService = require("../services/bag");
let responseUtil = require("../utils/response");
module.exports = {
    list : function (req, res) {
        let responseData = bagService.getBag();
        return responseUtil.createAndSendResponse("Retrieved bag successfully", 200, responseData, res);
    },

    update: function (req, res) {
        let productId = req.body.productId;
        let resultData = bagService.updateBag(productId);
        return responseUtil.createAndSendResponse(resultData.message, resultData.statusCode, resultData.data, res);
    }
};