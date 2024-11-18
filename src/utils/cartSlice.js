import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({ 
// createSlice takes an configuration which has "name", initialState{}(an obj) & reducers{}(an bj which has
    name: "cart",// differeb=nt types of action in the form of reducer functions)
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state, action)=>{
              state.items.push(action.payload)
        },
        removeItem: (state, action)=>{ // action can be removed because we're
              state.items.pop() // poping out or clearing items and not
        },// adding items in removeItems or clearCrt
        clearItem: (state, action)=>{
            state.items.length = 0
        } 
    }
})

export const {addItem, removeItem, clearItem} = cartSlice.actions
export default cartSlice.reducer

