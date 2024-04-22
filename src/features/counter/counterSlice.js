import {createSlice} from '@reduxjs/toolkit';
const initialState = {
    count:0
}
export const counterSlice = createSlice({
    name:'MyCounter',
    initialState,
    reducers:{
        increment:(state)=>{
            state.count++;
        },
        decrement:(state)=>{
            state.count--;
        },
        reset:(state)=>{
            state.count=0
        }
    }
})
const counterReducer = counterSlice.reducer;
export const {increment,decrement,reset} = counterSlice.actions;
export default counterReducer;
console.log(counterSlice)