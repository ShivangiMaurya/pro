
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'cart',
    initialState: {
        items: ["butger" , "pizza" ,"gg"]
    },

    // and it contains multiple small reducer function.

   // that is why this is known as reducers.

    reducers:{
        addItem:(state, action)=>{
            // we get acces to the state of our store 
            // it change state according to user action

            // we are mutataing the state over here.
            // we are directly modifying our state

            state.items.push(action.payload);
        },

        removeItem: (state, action)=>{
            state.items.pop();
        },

        clearCart: (state, action)=>{
             state.items.length = 0;
        },
    },
});
// on the header i want to show , how many items are there in the cart.


export const { addItem, removeItem, clearCart }= cartSlice.actions;

export default cartSlice.reducer;

// and when you are exporting it, you are exporting a just one reducer from it.

