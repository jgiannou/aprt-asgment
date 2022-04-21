import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./reducers/reducer";

export default configureStore({
 reducer: {
   users: usersReducer,
 },
});
