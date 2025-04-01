// import { legacy_createStore as createStore, applyMiddleware } from "redux";
// import { thunk } from "redux-thunk";
// import { composeWithDevTools } from '@redux-devtools/extension';
// import reducer from "./Reducers/rootReducer";

// let initialState = {};

// const middleware = [thunk];

// const store = createStore(
//     reducer,
//     initialState,
//     composeWithDevTools(applyMiddleware(...middleware)),
// )

// export default store;

import { configureStore } from "@reduxjs/toolkit";
import salaryReducer from "./Reducers/salarySlice";
import loginReducer from "./Reducers/loginSlice";

const store = configureStore({
  reducer: {
    salary: salaryReducer,
    login: loginReducer
  },
});

export default store;