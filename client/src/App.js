import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bag: [],
            sumPrices: 0,
            products: [],
            currentPage: 1,
            wishList: [],
            brands: []
        }
    }

    callGetBagRequest() {
        fetch("http://localhost:9000/api/bag")
            .then(res => res.json())
            .then(jsonResponse =>
                this.setState({
                    bag: jsonResponse.data.bag,
                    sumPrices: jsonResponse.data.sumPrices
                })
            )
    }

    callGetFavoritesRequest() {
        fetch("http://localhost:9000/api/wishList")
            .then(res => res.json())
            .then(jsonResponse =>
                this.setState({
                    wishList: jsonResponse.data.wishList
                })
            )
    }

    callGetBrandsRequest() {
        fetch("http://localhost:9000/api/brands")
            .then(res => res.json())
            .then(jsonResponse =>
                this.setState({
                    brands: jsonResponse.data.brands
                })
            )
    }

    callGetProductsRequest() {
        fetch("http://localhost:9000/api/products")
            .then(res => res.json())
            .then(jsonResponse =>
                this.setState({
                    products: jsonResponse.data.currentProducts,
                    currentPage: jsonResponse.data.currentPage
                })
            )
    }

    componentWillMount() {
        this.callGetBagRequest();
        this.callGetFavoritesRequest();
        this.callGetBrandsRequest();
        this.callGetProductsRequest();
    }

    render() {
        return (
            <div>
                <meta charSet="utf-8"/>
                <meta httpEquiv="x-ua-compatible" content="ie=edge"/>
                <title>Shopping Cart Challenge</title>
                <meta name="description" content="Shopping Cart Javascript Developer Challenge"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <header className="header container">
                    <h1 className="page-title">PRODUCT LIST</h1>
                    <aside className="header-bag">
                        <div className="header-bag__item header-bag__count">
                            <div className="header-bag__price">
                                £{this.state.sumPrices}
                            </div>
                            <svg className="icon" width="17px" height="18px" viewBox="36 8 17 18" version="1.1"
                                 xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                <title>Bag Icon</title>
                                <path
                                    d="M52.997701,12.8571429 L49.3553365,12.8571429 L49.3553365,8 L39.6423645,8 L39.6423645,12.8571429 L36,12.8571429 L36,25 L52.997701,25 L52.997701,12.8571429 Z M42.0706075,10.4285714 L46.9270935,10.4285714 L46.9270935,12.8571429 L42.0706075,12.8571429 L42.0706075,10.4285714 Z"
                                    id="Bag-Icon" stroke="none" fillRule="evenodd"/>
                            </svg>
                            <span className="bag__item-counter">{this.state.bag.length}</span>
                        </div>
                        <div className="header-bag__item header-bag__wishlist-count">
                            <svg className="icon" width="20px" height="20px" viewBox="0 6 20 20" version="1.1"
                                 xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                <title>Wishlist Icon</title>
                                <polygon id="Wishlist-Icon" stroke="none" fillRule="evenodd"
                                         points="12.3598869 13.2675869 20 13.2675869 13.8200565 17.7545318 16.1782804 25.0221187 9.99833694 20.5318477 3.81839348 25.0221187 6.17994346 17.7545318 0 13.2675869 7.63678696 13.2675869 9.99833694 6"/>
                            </svg>
                            <span className="bag__item-counter">{this.state.wishList.length}</span>
                        </div>
                    </aside>
                </header>
                <main className="product-page">
                    <div className="container">
                        <div className="product-controls">
                            <label className="product-controls__label" htmlFor="Brands-Filter">Brands</label>
                            <select className="product-controls__select" id="Brands-Filter">
                                <option value>All</option>
                                <option value={1}>MCQ ALEXANDER MCQUEEN</option>
                                <option value={2}>OFF-WHITE</option>
                                <option>...</option>
                            </select>
                            <label className="product-controls__label" htmlFor="Sort">Sort</label>
                            <select className="product-controls__select" id="Sort">
                                <option value={1}>Price ascending</option>
                                <option value={2}>Price descending</option>
                            </select>
                        </div>
                        <ul className="product-list">
                            <li className="product-list__item">
                                <article className="product" itemScope itemType="http://schema.org/Product">
                                    <figure className="product__image-wrapper">
                                        <img className="product__image" src="images/img01.png" alt="Product"
                                             itemProp="image"/>
                                        <button
                                            className="product__wishlist-button button button--round button--wishlist">
                                            <svg className="icon" width="20px" height="20px" viewBox="0 6 20 20"
                                                 version="1.1" xmlns="http://www.w3.org/2000/svg"
                                                 xmlnsXlink="http://www.w3.org/1999/xlink">
                                                <title>Wishlist Icon</title>
                                                <polygon id="Wishlist-Icon" stroke="none" fillRule="evenodd"
                                                         points="12.3598869 13.2675869 20 13.2675869 13.8200565 17.7545318 16.1782804 25.0221187 9.99833694 20.5318477 3.81839348 25.0221187 6.17994346 17.7545318 0 13.2675869 7.63678696 13.2675869 9.99833694 6"/>
                                            </svg>
                                        </button>
                                    </figure>
                                    <div className="product__details">
                                        <h1 className="product__title" itemProp="brand">Brand name</h1>
                                        <p className="product__subtitle" itemProp="description">Product title</p>
                                        <div className="product__price" itemScope itemType="http://schema.org/Offer">
                                            <span className="product__price--strike">£210</span><span
                                            className="product__price--discounted" itemProp="price">£210</span>
                                        </div>
                                        <button className="product__add-to-cart button button--primary">Add to Cart
                                        </button>
                                    </div>
                                </article>
                            </li>
                            <li className="product-list__item">
                                <article className="product" itemScope itemType="http://schema.org/Product">
                                    <figure className="product__image-wrapper">
                                        <img className="product__image" src="images/img01.png" alt="Product"
                                             itemProp="image"/>
                                        <button
                                            className="product__wishlist-button button button--round button--wishlist">
                                            <svg className="icon" width="20px" height="20px" viewBox="0 6 20 20"
                                                 version="1.1" xmlns="http://www.w3.org/2000/svg"
                                                 xmlnsXlink="http://www.w3.org/1999/xlink">
                                                <title>Wishlist Icon</title>
                                                <polygon id="Wishlist-Icon" stroke="none" fillRule="evenodd"
                                                         points="12.3598869 13.2675869 20 13.2675869 13.8200565 17.7545318 16.1782804 25.0221187 9.99833694 20.5318477 3.81839348 25.0221187 6.17994346 17.7545318 0 13.2675869 7.63678696 13.2675869 9.99833694 6"/>
                                            </svg>
                                        </button>
                                    </figure>
                                    <div className="product__details">
                                        <h1 className="product__title" itemProp="brand">Brand name</h1>
                                        <p className="product__subtitle" itemProp="description">Product title</p>
                                        <div className="product__price" itemScope itemType="http://schema.org/Offer">
                                            <span className="product__price" itemProp="price">£210</span>
                                        </div>
                                        <button
                                            className="product__add-to-cart button button--primary button--in-cart">In
                                            Cart
                                        </button>
                                    </div>
                                </article>
                            </li>
                            <li className="product-list__item">
                                <article className="product" itemScope itemType="http://schema.org/Product">
                                    <figure className="product__image-wrapper">
                                        <img className="product__image" src="images/img01.png" alt="Product"
                                             itemProp="image"/>
                                        <button
                                            className="product__wishlist-button button button--round button--wishlist">
                                            <svg className="icon" width="20px" height="20px" viewBox="0 6 20 20"
                                                 version="1.1" xmlns="http://www.w3.org/2000/svg"
                                                 xmlnsXlink="http://www.w3.org/1999/xlink">
                                                <title>Wishlist Icon</title>
                                                <polygon id="Wishlist-Icon" stroke="none" fillRule="evenodd"
                                                         points="12.3598869 13.2675869 20 13.2675869 13.8200565 17.7545318 16.1782804 25.0221187 9.99833694 20.5318477 3.81839348 25.0221187 6.17994346 17.7545318 0 13.2675869 7.63678696 13.2675869 9.99833694 6"/>
                                            </svg>
                                        </button>
                                    </figure>
                                    <div className="product__details">
                                        <h1 className="product__title" itemProp="brand">Brand name</h1>
                                        <p className="product__subtitle" itemProp="description">Product title</p>
                                        <div className="product__price" itemScope itemType="http://schema.org/Offer">
                                            <span className="product__price" itemProp="price">£210</span>
                                        </div>
                                        <button
                                            className="product__add-to-cart button button--primary button--in-cart">In
                                            Cart
                                        </button>
                                    </div>
                                </article>
                            </li>
                            <li className="product-list__item">
                                <article className="product" itemScope itemType="http://schema.org/Product">
                                    <figure className="product__image-wrapper">
                                        <img className="product__image" src="images/img01.png" alt="Product"
                                             itemProp="image"/>
                                        <button
                                            className="product__wishlist-button button button--round button--wishlist">
                                            <svg className="icon" width="20px" height="20px" viewBox="0 6 20 20"
                                                 version="1.1" xmlns="http://www.w3.org/2000/svg"
                                                 xmlnsXlink="http://www.w3.org/1999/xlink">
                                                <title>Wishlist Icon</title>
                                                <polygon id="Wishlist-Icon" stroke="none" fillRule="evenodd"
                                                         points="12.3598869 13.2675869 20 13.2675869 13.8200565 17.7545318 16.1782804 25.0221187 9.99833694 20.5318477 3.81839348 25.0221187 6.17994346 17.7545318 0 13.2675869 7.63678696 13.2675869 9.99833694 6"/>
                                            </svg>
                                        </button>
                                    </figure>
                                    <div className="product__details">
                                        <h1 className="product__title" itemProp="brand">Brand name</h1>
                                        <p className="product__subtitle" itemProp="description">Product title</p>
                                        <div className="product__price" itemScope itemType="http://schema.org/Offer">
                                            <span className="product__price" itemProp="price">£210</span>
                                        </div>
                                        <button
                                            className="product__add-to-cart button button--primary button--in-cart">In
                                            Cart
                                        </button>
                                    </div>
                                </article>
                            </li>
                            <li className="product-list__item">
                                <article className="product" itemScope itemType="http://schema.org/Product">
                                    <figure className="product__image-wrapper">
                                        <img className="product__image" src="images/img01.png" alt="Product"
                                             itemProp="image"/>
                                        <button
                                            className="product__wishlist-button button button--round button--wishlist">
                                            <svg className="icon" width="20px" height="20px" viewBox="0 6 20 20"
                                                 version="1.1" xmlns="http://www.w3.org/2000/svg"
                                                 xmlnsXlink="http://www.w3.org/1999/xlink">
                                                <title>Wishlist Icon</title>
                                                <polygon id="Wishlist-Icon" stroke="none" fillRule="evenodd"
                                                         points="12.3598869 13.2675869 20 13.2675869 13.8200565 17.7545318 16.1782804 25.0221187 9.99833694 20.5318477 3.81839348 25.0221187 6.17994346 17.7545318 0 13.2675869 7.63678696 13.2675869 9.99833694 6"/>
                                            </svg>
                                        </button>
                                    </figure>
                                    <div className="product__details">
                                        <h1 className="product__title" itemProp="brand">Brand name</h1>
                                        <p className="product__subtitle" itemProp="description">Product title</p>
                                        <div className="product__price" itemScope itemType="http://schema.org/Offer">
                                            <span className="product__price" itemProp="price">£210</span>
                                        </div>
                                        <button
                                            className="product__add-to-cart button button--primary button--in-cart">In
                                            Cart
                                        </button>
                                    </div>
                                </article>
                            </li>
                            <li className="product-list__item">
                                <article className="product" itemScope itemType="http://schema.org/Product">
                                    <figure className="product__image-wrapper">
                                        <img className="product__image" src="images/img01.png" alt="Product"
                                             itemProp="image"/>
                                        <button
                                            className="product__wishlist-button button button--round button--wishlist">
                                            <svg className="icon" width="20px" height="20px" viewBox="0 6 20 20"
                                                 version="1.1" xmlns="http://www.w3.org/2000/svg"
                                                 xmlnsXlink="http://www.w3.org/1999/xlink">
                                                <title>Wishlist Icon</title>
                                                <polygon id="Wishlist-Icon" stroke="none" fillRule="evenodd"
                                                         points="12.3598869 13.2675869 20 13.2675869 13.8200565 17.7545318 16.1782804 25.0221187 9.99833694 20.5318477 3.81839348 25.0221187 6.17994346 17.7545318 0 13.2675869 7.63678696 13.2675869 9.99833694 6"/>
                                            </svg>
                                        </button>
                                    </figure>
                                    <div className="product__details">
                                        <h1 className="product__title" itemProp="brand">Brand name</h1>
                                        <p className="product__subtitle" itemProp="description">Product title</p>
                                        <div className="product__price" itemScope itemType="http://schema.org/Offer">
                                            <span className="product__price" itemProp="price">£210</span>
                                        </div>
                                        <button
                                            className="product__add-to-cart button button--primary button--in-cart">In
                                            Cart
                                        </button>
                                    </div>
                                </article>
                            </li>
                        </ul>
                        <nav className="pagination">
                            <ul className="pagination__list">
                                <li className="pagination__item">
                                    <a href="#" className="pagination__link">
                                        <svg className="icon" width="8px" height="10px" viewBox="18 18 8 10"
                                             version="1.1" xmlns="http://www.w3.org/2000/svg"
                                             xmlnsXlink="http://www.w3.org/1999/xlink">
                                            <title>Arrow Left</title>
                                            <polygon id="Left-Icon" stroke="none" fillRule="evenodd"
                                                     transform="translate(22.027061, 23.000000) scale(-1, 1) translate(-22.027061, -23.000000) "
                                                     points="22.9427745 22.9999999 19 26.9458774 20.0541226 28 25.0541226 23 20.0541226 18 19 19.0541226"/>
                                        </svg>
                                    </a>
                                </li>
                                <li className="pagination__item">
                                    <a href="#" className="pagination__link">
                                        1
                                    </a>
                                </li>
                                <li className="pagination__item">
                                    <a href="#" className="pagination__link">
                                        2
                                    </a>
                                </li>
                                <li className="pagination__item">
                                    <a href="#" className="pagination__link">
                                        3
                                    </a>
                                </li>
                                <li className="pagination__item">
                                    <a href="#" className="pagination__link">
                                        ...
                                    </a>
                                </li>
                                <li className="pagination__item">
                                    <a href="#" className="pagination__link">
                                        10
                                    </a>
                                </li>
                                <li className="pagination__item">
                                    <a href="#" className="pagination__link">
                                        <svg className="icon" width="8px" height="10px" viewBox="18 18 8 10"
                                             version="1.1" xmlns="http://www.w3.org/2000/svg"
                                             xmlnsXlink="http://www.w3.org/1999/xlink">
                                            <title>Arrow Right</title>
                                            <polygon id="Left-Iocn" stroke="none" fillRule="evenodd"
                                                     points="22.9427745 22.9999999 19 26.9458774 20.0541226 28 25.0541226 23 20.0541226 18 19 19.0541226"/>
                                        </svg>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </main>
                <footer className="container">
                    <p className="footer__sidenote">Footer</p>
                </footer>
                <p> Debug products: {this.state.products.length}</p>
                <p> Debug currentPage: {this.state.currentPage}</p>
                <p> Debug brands: {this.state.brands.length}</p>
            </div>
        );
    }
}


export default App;
