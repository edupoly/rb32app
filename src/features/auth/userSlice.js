import {createSlice} from '@reduxjs/toolkit';
const initialState = {
    loginStatus:false
}
export const userSlice = createSlice({
    name:'UserDetails',
    initialState,
    reducers:{
        setLoginStatus:(state,action)=>{
            state.loginStatus=action.payload
        }
    }
})
const userReducer = userSlice.reducer;
export const {setLoginStatus} = userSlice.actions;
export default userReducer;
