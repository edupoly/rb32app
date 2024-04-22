import {createSlice} from '@reduxjs/toolkit';
import { products } from './allproducts';
const initialState = products;
export const productsSlice = createSlice({
    name:"Products Slice",
    initialState
})
export default productsSlice.reducer;