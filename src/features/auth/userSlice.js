import {createSlice} from '@reduxjs/toolkit';
const initialState = {
    loginStatus:window.localStorage.getItem('token')?true:false,
    role:''
}
export const userSlice = createSlice({
    name:'UserDetails',
    initialState,
    reducers:{
        setLoginStatus:(state,action)=>{
            if(action.payload.msg==='loginsuccess'){
                window.localStorage.setItem("token",action.payload.token);
                state.loginStatus=true;
                state.role=action.payload.role;
            }
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
