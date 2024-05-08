import { configureStore, combineReducers } from "@reduxjs/toolkit";
import favouriteReducer from "../reducers/favouriteReducer";
import companySearchReducer from "../reducers/companySearchReducer";

const rootReducer = combineReducers({
  favourite: favouriteReducer,
  companies: companySearchReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
