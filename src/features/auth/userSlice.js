import {createSlice} from '@reduxjs/toolkit';
const initialState = {
    loginStatus:window.localStorage.getItem('token')?true:false
}
export const userSlice = createSlice({
    name:'UserDetails',
    initialState,
    reducers:{
        setLoginStatus:(state,action)=>{
            state.loginStatus=action.payload
        },
        logout:(state,action)=>{
            window.localStorage.clear();
            state.loginStatus=false;
        }

    }
})
const userReducer = userSlice.reducer;
export const {setLoginStatus,logout} = userSlice.actions;
export default userReducer;
