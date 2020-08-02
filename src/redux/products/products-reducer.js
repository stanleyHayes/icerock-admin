import {PRODUCTS} from "./products.data";

const INITIAL_STATE = {
    products: PRODUCTS,
    selectedProduct: null,
    error: null,
    loading: false
}

const productsReducer = (state = INITIAL_STATE, action) => {

    switch (action.type){

        default: return state;
    }

}


export default productsReducer;
