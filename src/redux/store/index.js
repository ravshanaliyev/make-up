import { createStore, applyMiddleware, compose } from "redux";
import rootReducers from "../reducers";
import {thunk} from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "reducer",
  storage: storage,
  whitelist: ["product_data", "cart", "liked"],
};

const presistedReducer = persistReducer(persistConfig, rootReducers);
// eslint-disable-next-line no-mixed-operators
const store = createStore(presistedReducer, compose(applyMiddleware(thunk), window._REDUX_DEVTOOLS_EXTENSION && window._REDUX_DEVTOOLS_EXTENSION() || compose));
const persistor = persistStore(store);
export { persistor, store };
