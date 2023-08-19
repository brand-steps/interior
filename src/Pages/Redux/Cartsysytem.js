import { createSlice } from '@reduxjs/toolkit'

const intialState = {
      cart :  [], 
      quantity  : 0 
}

 const Cartsystem = createSlice({
    name: 'cart',
    intialState,
    reducers: {
    AddCart:(state, action )=>{
        state.cart.push(action.payload)
    }
    },
  })
 
  export const {AddCart} =  Cartsystem.actions
  export default Cartsystem.reducer