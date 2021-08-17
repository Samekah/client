import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import questionReducer from "./reducers/Reducer";
const store = createStore(questionReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
