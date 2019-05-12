let brandService = require("../services/brand");
let responseUtil = require("../utils/response");

module.exports = {
    list: function (req, res) {
        let brands = brandService.getBrands();
        let responseData = {
            brands: brands
        };
        return responseUtil.createAndSendResponse("Retrieved brands successfully", 200, responseData, res);
    }
};