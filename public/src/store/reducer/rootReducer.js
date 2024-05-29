// rootReducer.js
import { combineReducers } from "redux";
import productReducer from "./productReducer";
import portFolioReducer from "./portFolioReducer";
import blogReducer from "./blogReducer";
import teamReducer from "./teamReducer";
const rootReducer = combineReducers({
  products: productReducer,
  portFolio: portFolioReducer,
  blog: blogReducer,
  team: teamReducer,
});

export default rootReducer;
