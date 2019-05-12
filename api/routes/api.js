let express = require("express");
let router = express.Router();
let brandController = require("../controllers/brand");
let productController = require("../controllers/product");
let bagController = require("../controllers/bag");
let wishListController = require("../controllers/wishList");

router.get("/products", productController.list);

router.get("/brands", brandController.list);

router.get("/bag", bagController.list);

router.post("/bag", bagController.update);

router.get("/wishList", wishListController.list);

router.post("/wishList", wishListController.update);


module.exports = router;