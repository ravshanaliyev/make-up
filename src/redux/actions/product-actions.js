import instance from "../../services/api";

const load_products = (products) => {
    return{
        type: "LOAD_PRODUCTS",
        payload: {
            products
        }
    }
}

const loadProducts = (URL) => async (dispatch) => {
    instance(URL)
        .then((res) => {
            dispatch(load_products(res.data));
        })
        .catch((err) => {
            console.log(err);
        });
}

export {loadProducts}