
//   47:20

import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";


const appStore = configureStore({
    // this is a big reducer for our whole app.
    // and this reducer contains small reducers of each slice.
    // for each slice, there is a reducer , and we will just add that reducer

   //  THIS KEYWORD IS "REDUCER". this is one reducer for whole app
  


     reducer: {
        cart: cartReducer
     },
});

export default appStore;
