import {combineReducers} from "redux";

import newsReducer from "./information/information-reducer";
import productsReducer from "./products/products-reducer";
import reviewsReducer from "./reviews/reviews-reducer";
import ordersReducer from "./orders/orders-reducer";

const rootReducer = combineReducers({
    news: newsReducer,
    products: productsReducer,
    reviews: reviewsReducer,
    orders: ordersReducer
});

export default rootReducer;
