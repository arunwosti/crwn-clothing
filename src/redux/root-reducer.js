import { combineReducers } from "redux";
import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";



const persistConfig ={
    key:'root',
    storage,
    whitelist: ['cart']  //user is already handled by firebase so only cart reducer is provided
}
const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer
});
export default persistReducer(persistConfig,rootReducer);