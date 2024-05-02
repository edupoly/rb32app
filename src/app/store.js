import {configureStore} from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import todolistReducer from '../features/todolist/todolistSlice';
import productReducer from '../features/Ecom/productsSlice';
import { setupListeners } from '@reduxjs/toolkit/query';
import { countriesApi } from '../services/countries';
import { productsApi } from '../services/product';
import { postsApi } from '../services/posts';
import { authApi } from '../services/authentication';
import userReducer from '../features/auth/userSlice';
export const store = configureStore({
    reducer:{
        counter:counterReducer,
        todolist:todolistReducer,
        products:productReducer,
        user:userReducer,
        [countriesApi.reducerPath]: countriesApi.reducer,
        [productsApi.reducerPath]:productsApi.reducer,
        [postsApi.reducerPath]:postsApi.reducer,
        [authApi.reducerPath]:authApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(countriesApi.middleware,productsApi.middleware,postsApi.middleware,authApi.middleware),
})
setupListeners(store.dispatch)