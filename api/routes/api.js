let express = require("express");
let router = express.Router();


let initialProducts = [
    {
        "id":"1",
        "brandId":36,
        "subtitle":"Logo appliquè sweatshirt",
        "price":"210",
        "priceDiscounted":"137.50",
        "image":"images/img01.png"
    },
    {
        "id":"2",
        "brandId":58,
        "subtitle":"Spray paint checked shirt",
        "price":"335",
        "image":"images/img01.png"
    },
    {
        "id":"3",
        "brandId":8,
        "subtitle":"Lightning bolt print T-shirt",
        "price":"175",
        "image":"images/img01.png"
    },
    {
        "id":"4",
        "brandId":22,
        "subtitle":"Gorilla print sweatshirtt",
        "price":"270",
        "image":"images/img01.png"
    },
    {
        "id":"5",
        "brandId":3,
        "subtitle":"Lightning bolt print T-shirt",
        "price":"175",
        "image":"images/img01.png"
    },
    {
        "id":"6",
        "brandId":18,
        "subtitle":"Gorilla print sweatshirtt",
        "price":"270",
        "image":"images/img01.png"
    },
    {
        "id":"7",
        "brandId":9,
        "subtitle":"Spray paint checked shirt",
        "price":"335",
        "image":"images/img01.png"
    },
    {
        "id":"8",
        "brandId":36,
        "subtitle":"Spray paint checked shirt",
        "price":"335",
        "image":"images/img01.png"
    },
    {
        "id":"9",
        "brandId":38,
        "subtitle":"Lightning bolt print T-shirt",
        "price":"175",
        "image":"images/img01.png"
    },
    {
        "id":"10",
        "brandId":48,
        "subtitle":"Gorilla print sweatshirtt",
        "price":"270",
        "image":"images/img01.png"
    },
    {
        "id":"11",
        "brandId":2,
        "subtitle":"Logo appliquè sweatshirt",
        "price":"210",
        "priceDiscounted":"137.50",
        "image":"images/img01.png"
    },
    {
        "id":"12",
        "brandId":55,
        "subtitle":"Spray paint checked shirt",
        "price":"335",
        "image":"images/img01.png"
    },
    {
        "id":"13",
        "brandId":24,
        "subtitle":"Lightning bolt print T-shirt",
        "price":"175",
        "image":"images/img01.png"
    },
    {
        "id":"14",
        "brandId":13,
        "subtitle":"Gorilla print sweatshirtt",
        "price":"270",
        "image":"images/img01.png"
    },
    {
        "id":"15",
        "brandId":50,
        "subtitle":"Lightning bolt print T-shirt",
        "price":"175",
        "image":"images/img01.png"
    },
    {
        "id":"16",
        "brandId":35,
        "subtitle":"Gorilla print sweatshirtt",
        "price":"270",
        "image":"images/img01.png"
    },
    {
        "id":"17",
        "brandId":41,
        "subtitle":"Spray paint checked shirt",
        "price":"335",
        "image":"images/img01.png"
    },
    {
        "id":"18",
        "brandId":13,
        "subtitle":"Spray paint checked shirt",
        "price":"335",
        "image":"images/img01.png"
    },
    {
        "id":"19",
        "brandId":28,
        "subtitle":"Lightning bolt print T-shirt",
        "price":"175",
        "image":"images/img01.png"
    },
    {
        "id":"20",
        "brandId":31,
        "subtitle":"Gorilla print sweatshirtt",
        "price":"270",
        "image":"images/img01.png"
    },
    {
        "id":"21",
        "brandId":8,
        "subtitle":"Logo appliquè sweatshirt",
        "price":"210",
        "priceDiscounted":"137.50",
        "image":"images/img01.png"
    },
    {
        "id":"22",
        "brandId":35,
        "subtitle":"Spray paint checked shirt",
        "price":"335",
        "image":"images/img01.png"
    },
    {
        "id":"23",
        "brandId":13,
        "subtitle":"Lightning bolt print T-shirt",
        "price":"175",
        "image":"images/img01.png"
    },
    {
        "id":"24",
        "brandId":45,
        "subtitle":"Gorilla print sweatshirtt",
        "price":"270",
        "image":"images/img01.png"
    },
    {
        "id":"25",
        "brandId":58,
        "subtitle":"Lightning bolt print T-shirt",
        "price":"175",
        "image":"images/img01.png"
    },
    {
        "id":"26",
        "brandId":43,
        "subtitle":"Gorilla print sweatshirtt",
        "price":"270",
        "image":"images/img01.png"
    },
    {
        "id":"27",
        "brandId":27,
        "subtitle":"Spray paint checked shirt",
        "price":"335",
        "image":"images/img01.png"
    },
    {
        "id":"28",
        "brandId":46,
        "subtitle":"Spray paint checked shirt",
        "price":"335",
        "image":"images/img01.png"
    },
    {
        "id":"29",
        "brandId":28,
        "subtitle":"Lightning bolt print T-shirt",
        "price":"175",
        "image":"images/img01.png"
    },
    {
        "id":"30",
        "brandId":18,
        "subtitle":"Gorilla print sweatshirtt",
        "price":"270",
        "image":"images/img01.png"
    },
    {
        "id":"31",
        "brandId":25,
        "subtitle":"Logo appliquè sweatshirt",
        "price":"210",
        "priceDiscounted":"137.50",
        "image":"images/img01.png"
    },
    {
        "id":"32",
        "brandId":8,
        "subtitle":"Spray paint checked shirt",
        "price":"335",
        "image":"images/img01.png"
    },
    {
        "id":"33",
        "brandId":15,
        "subtitle":"Lightning bolt print T-shirt",
        "price":"175",
        "image":"images/img01.png"
    },
    {
        "id":"34",
        "brandId":46,
        "subtitle":"Gorilla print sweatshirtt",
        "price":"270",
        "image":"images/img01.png"
    },
    {
        "id":"35",
        "brandId":52,
        "subtitle":"Lightning bolt print T-shirt",
        "price":"175",
        "image":"images/img01.png"
    },
    {
        "id":"36",
        "brandId":7,
        "subtitle":"Gorilla print sweatshirtt",
        "price":"270",
        "image":"images/img01.png"
    },
    {
        "id":"37",
        "brandId":40,
        "subtitle":"Spray paint checked shirt",
        "price":"335",
        "image":"images/img01.png"
    },
    {
        "id":"38",
        "brandId":1,
        "subtitle":"Spray paint checked shirt",
        "price":"335",
        "image":"images/img01.png"
    },
    {
        "id":"39",
        "brandId":20,
        "subtitle":"Lightning bolt print T-shirt",
        "price":"175",
        "image":"images/img01.png"
    },
    {
        "id":"40",
        "brandId":2,
        "subtitle":"Gorilla print sweatshirtt",
        "price":"270",
        "image":"images/img01.png"
    },
    {
        "id":"41",
        "brandId":11,
        "subtitle":"Logo appliquè sweatshirt",
        "price":"210",
        "priceDiscounted":"137.50",
        "image":"images/img01.png"
    },
    {
        "id":"42",
        "brandId":32,
        "subtitle":"Spray paint checked shirt",
        "price":"335",
        "image":"images/img01.png"
    },
    {
        "id":"43",
        "brandId":17,
        "subtitle":"Lightning bolt print T-shirt",
        "price":"175",
        "image":"images/img01.png"
    },
    {
        "id":"44",
        "brandId":56,
        "subtitle":"Gorilla print sweatshirtt",
        "price":"270",
        "image":"images/img01.png"
    },
    {
        "id":"45",
        "brandId":27,
        "subtitle":"Lightning bolt print T-shirt",
        "price":"175",
        "image":"images/img01.png"
    },
    {
        "id":"46",
        "brandId":53,
        "subtitle":"Gorilla print sweatshirtt",
        "price":"270",
        "image":"images/img01.png"
    },
    {
        "id":"47",
        "brandId":17,
        "subtitle":"Spray paint checked shirt",
        "price":"335",
        "image":"images/img01.png"
    },
    {
        "id":"48",
        "brandId":56,
        "subtitle":"Spray paint checked shirt",
        "price":"335",
        "image":"images/img01.png"
    },
    {
        "id":"49",
        "brandId":44,
        "subtitle":"Lightning bolt print T-shirt",
        "price":"175",
        "image":"images/img01.png"
    },
    {
        "id":"50",
        "brandId":4,
        "subtitle":"Gorilla print sweatshirtt",
        "price":"270",
        "image":"images/img01.png"
    },
    {
        "id":"51",
        "brandId":44,
        "subtitle":"Logo appliquè sweatshirt",
        "price":"210",
        "priceDiscounted":"137.50",
        "image":"images/img01.png"
    },
    {
        "id":"52",
        "brandId":41,
        "subtitle":"Spray paint checked shirt",
        "price":"335",
        "image":"images/img01.png"
    },
    {
        "id":"53",
        "brandId":53,
        "subtitle":"Lightning bolt print T-shirt",
        "price":"175",
        "image":"images/img01.png"
    },
    {
        "id":"54",
        "brandId":57,
        "subtitle":"Gorilla print sweatshirtt",
        "price":"270",
        "image":"images/img01.png"
    },
    {
        "id":"55",
        "brandId":23,
        "subtitle":"Lightning bolt print T-shirt",
        "price":"175",
        "image":"images/img01.png"
    },
    {
        "id":"56",
        "brandId":13,
        "subtitle":"Gorilla print sweatshirtt",
        "price":"270",
        "image":"images/img01.png"
    },
    {
        "id":"57",
        "brandId":54,
        "subtitle":"Spray paint checked shirt",
        "price":"335",
        "image":"images/img01.png"
    },
    {
        "id":"58",
        "brandId":37,
        "subtitle":"Spray paint checked shirt",
        "price":"335",
        "image":"images/img01.png"
    },
    {
        "id":"59",
        "brandId":5,
        "subtitle":"Lightning bolt print T-shirt",
        "price":"175",
        "image":"images/img01.png"
    },
    {
        "id":"60",
        "brandId":55,
        "subtitle":"Gorilla print sweatshirtt",
        "price":"270",
        "image":"images/img01.png"
    }
];

/*
let initialProducts = [
    {
        "id":"1",
        "brandId":36,
        "subtitle":"Logo appliquè sweatshirt",
        "price":"210",
        "priceDiscounted":"137.50",
        "image":"images/img01.png"
    },
    {
        "id":"2",
        "brandId":58,
        "subtitle":"Spray paint checked shirt",
        "price":"335",
        "image":"images/img01.png"
    },
    {
        "id":"3",
        "brandId":8,
        "subtitle":"Lightning bolt print T-shirt",
        "price":"175",
        "image":"images/img01.png"
    },
    {
        "id":"4",
        "brandId":22,
        "subtitle":"Gorilla print sweatshirtt",
        "price":"270",
        "image":"images/img01.png"
    },
    {
        "id":"5",
        "brandId":3,
        "subtitle":"Lightning bolt print T-shirt",
        "price":"175",
        "image":"images/img01.png"
    },
    {
        "id":"6",
        "brandId":18,
        "subtitle":"Gorilla print sweatshirtt",
        "price":"270",
        "image":"images/img01.png"
    }
];
*/

/*
let initialProducts = [
    {
        "id":"1",
        "brandId":36,
        "subtitle":"Logo appliquè sweatshirt",
        "price":"210",
        "priceDiscounted":"137.50",
        "image":"images/img01.png"
    },
    {
        "id":"2",
        "brandId":58,
        "subtitle":"Spray paint checked shirt",
        "price":"335",
        "image":"images/img01.png"
    },
    {
        "id":"3",
        "brandId":8,
        "subtitle":"Lightning bolt print T-shirt",
        "price":"175",
        "image":"images/img01.png"
    },
    {
        "id":"4",
        "brandId":22,
        "subtitle":"Gorilla print sweatshirtt",
        "price":"270",
        "image":"images/img01.png"
    },
    {
        "id":"5",
        "brandId":3,
        "subtitle":"Lightning bolt print T-shirt",
        "price":"175",
        "image":"images/img01.png"
    },
    {
        "id":"6",
        "brandId":18,
        "subtitle":"Gorilla print sweatshirtt",
        "price":"270",
        "image":"images/img01.png"
    },
    {
        "id":"7",
        "brandId":9,
        "subtitle":"Spray paint checked shirt",
        "price":"335",
        "image":"images/img01.png"
    }
];
*/

let initialBag = [];
let initialWishList = [];
let initialBrands = [
    {
        "id":1,
        "name":"MCQ ALEXANDER MCQUEEN"
    },
    {
        "id":2,
        "name":"OFF-WHITE"
    },
    {
        "id":3,
        "name":"NEIL BARRETT"
    },
    {
        "id":4,
        "name":"MARCELO BURLON COUNTY"
    },
    {
        "id":5,
        "name":"NEIL BARRETT"
    },
    {
        "id":6,
        "name":"MARCELO BURLON COUNTY"
    },
    {
        "id":7,
        "name":"OFF-WHITE"
    },
    {
        "id":8,
        "name":"OFF-WHITE"
    },
    {
        "id":9,
        "name":"NEIL BARRETT"
    },
    {
        "id":10,
        "name":"MARCELO BURLON COUNTY"
    },
    {
        "id":11,
        "name":"MCQ ALEXANDER MCQUEEN"
    },
    {
        "id":12,
        "name":"OFF-WHITE"
    },
    {
        "id":13,
        "name":"NEIL BARRETT"
    },
    {
        "id":14,
        "name":"MARCELO BURLON COUNTY"
    },
    {
        "id":15,
        "name":"NEIL BARRETT"
    },
    {
        "id":16,
        "name":"MARCELO BURLON COUNTY"
    },
    {
        "id":17,
        "name":"OFF-WHITE"
    },
    {
        "id":18,
        "name":"OFF-WHITE"
    },
    {
        "id":19,
        "name":"NEIL BARRETT"
    },
    {
        "id":20,
        "name":"MARCELO BURLON COUNTY"
    },
    {
        "id":21,
        "name":"MCQ ALEXANDER MCQUEEN"
    },
    {
        "id":22,
        "name":"OFF-WHITE"
    },
    {
        "id":23,
        "name":"NEIL BARRETT"
    },
    {
        "id":24,
        "name":"MARCELO BURLON COUNTY"
    },
    {
        "id":25,
        "name":"NEIL BARRETT"
    },
    {
        "id":26,
        "name":"MARCELO BURLON COUNTY"
    },
    {
        "id":27,
        "name":"OFF-WHITE"
    },
    {
        "id":28,
        "name":"OFF-WHITE"
    },
    {
        "id":29,
        "name":"NEIL BARRETT"
    },
    {
        "id":30,
        "name":"MARCELO BURLON COUNTY"
    },
    {
        "id":31,
        "name":"MCQ ALEXANDER MCQUEEN"
    },
    {
        "id":32,
        "name":"OFF-WHITE"
    },
    {
        "id":33,
        "name":"NEIL BARRETT"
    },
    {
        "id":34,
        "name":"MARCELO BURLON COUNTY"
    },
    {
        "id":35,
        "name":"NEIL BARRETT"
    },
    {
        "id":36,
        "name":"MARCELO BURLON COUNTY"
    },
    {
        "id":37,
        "name":"OFF-WHITE"
    },
    {
        "id":38,
        "name":"OFF-WHITE"
    },
    {
        "id":39,
        "name":"NEIL BARRETT"
    },
    {
        "id":40,
        "name":"MARCELO BURLON COUNTY"
    },
    {
        "id":41,
        "name":"MCQ ALEXANDER MCQUEEN"
    },
    {
        "id":42,
        "name":"OFF-WHITE"
    },
    {
        "id":43,
        "name":"NEIL BARRETT"
    },
    {
        "id":44,
        "name":"MARCELO BURLON COUNTY"
    },
    {
        "id":45,
        "name":"NEIL BARRETT"
    },
    {
        "id":46,
        "name":"MARCELO BURLON COUNTY"
    },
    {
        "id":47,
        "name":"OFF-WHITE"
    },
    {
        "id":48,
        "name":"OFF-WHITE"
    },
    {
        "id":49,
        "name":"NEIL BARRETT"
    },
    {
        "id":50,
        "name":"MARCELO BURLON COUNTY"
    },
    {
        "id":51,
        "name":"MCQ ALEXANDER MCQUEEN"
    },
    {
        "id":52,
        "name":"OFF-WHITE"
    },
    {
        "id":53,
        "name":"NEIL BARRETT"
    },
    {
        "id":54,
        "name":"MARCELO BURLON COUNTY"
    },
    {
        "id":55,
        "name":"NEIL BARRETT"
    },
    {
        "id":56,
        "name":"MARCELO BURLON COUNTY"
    },
    {
        "id":57,
        "name":"OFF-WHITE"
    },
    {
        "id":58,
        "name":"OFF-WHITE"
    },
    {
        "id":59,
        "name":"NEIL BARRETT"
    },
    {
        "id":60,
        "name":"MARCELO BURLON COUNTY"
    }
];



const sumPricesInBag = function (accumulator, currentProductInBag) {
    let priceToSum = parseFloat(currentProductInBag.priceDiscounted) || parseFloat(currentProductInBag.price) || 0;
    return accumulator + priceToSum;
};


router.get("/products", function (req, res, next) {
    let maxElementsPerPage = 6;
    let priceOrder = req.query.priceOrder || null;
    let brandId = parseInt(req.query.brandId) || null;
    let pageNumber =  parseInt(req.query.pageNumber) || 1;
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

    return res.status(200).send({
        message: "Retrieved products successfully",
        data: {
            currentPage : pageNumber,
            numberOfPages: numberOfPages,
            totalMatches: totalMatches,
            currentProducts: productsToReturn,
        }
    });
});

router.get("/bag", function (req, res, next) {
    let sumPrices = initialBag.reduce(sumPricesInBag, 0);
    return res.status(200).send({
        message: "Retrieved bag successfully",
        data: {
            sumPrices: sumPrices,
            bag: initialBag
        }
    });
});

router.get("/brands", function (req, res, next) {
    return res.status(200).send({
        message: "Retrieved brands successfully",
        data: {
            brands: initialBrands
        }
    });
});

router.get("/wishList", function (req, res, next) {
    return res.status(200).send({
        message: "Retrieved wishList successfully",
        data: {
            wishList: initialWishList
        }
    });
});

router.post("/wishList", function (req, res, next) {
    let productId = req.body.productId;
    const checkProductIdIsValid = function (element) {
        return parseInt(element.id) ===  parseInt(productId);
    };

    const checkIfProductIsInTheWishList = function (element) {
        return parseInt(element.id) ===  parseInt(productId);
    };

    let productIndex = initialProducts.findIndex(checkProductIdIsValid);
    if(productIndex === -1) {
        return res.status(400).send({
            message: "Invalid productId",
            data: {
                wishList: initialWishList
            }
        });
    }

    if(initialWishList.findIndex(checkIfProductIsInTheWishList) === -1) {
        initialWishList.push(initialProducts[productIndex]);
    }
    return res.status(200).send({
        message: "Updated wishList successfully",
        data: {
            wishList: initialWishList
        }
    });
});

router.post("/bag", function (req, res, next) {
    let productId = req.body.productId;
    const checkProductIdIsValid = function (element) {
        return parseInt(element.id) ===  parseInt(productId);
    };

    const checkIfProductIsInTheBag = function (element) {
        return parseInt(element.id) ===  parseInt(productId);
    };


    let productIndex = initialProducts.findIndex(checkProductIdIsValid);
    if(productIndex === -1) {
        let sumPrices = initialBag.reduce(sumPricesInBag, 0);
        return res.status(400).send({
            message: "Invalid productId",
            data: {
                sumPrices: sumPrices,
                bag: initialBag
            }
        });
    }

    if(initialBag.findIndex(checkIfProductIsInTheBag) === -1) {
        initialBag.push(initialProducts[productIndex]);
    }
    let sumPrices = initialBag.reduce(sumPricesInBag, 0);
    return res.status(200).send({
        message: "Updated bag successfully",
        data: {
            sumPrices: sumPrices,
            bag: initialBag
        }
    });
});


module.exports = router;