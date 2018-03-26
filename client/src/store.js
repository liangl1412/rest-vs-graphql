import { applyMiddleware, createStore } from "redux"

import thunk from "redux-thunk"
import promise from "redux-promise-middleware"

import blogReducer from "./reducers/blog"

const middleware = applyMiddleware(promise(), thunk)
const store = createStore(blogReducer, middleware);
export default store;
