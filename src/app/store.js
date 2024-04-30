import {configureStore} from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import todolistReducer from '../features/todolist/todolistSlice';
import productReducer from '../features/Ecom/productsSlice';
import { setupListeners } from '@reduxjs/toolkit/query';
import { countriesApi } from '../services/countries';
import { productsApi } from '../services/product';
import { postsApi } from '../services/posts';
export const store = configureStore({
    reducer:{
        counter:counterReducer,
        todolist:todolistReducer,
        products:productReducer,
        [countriesApi.reducerPath]: countriesApi.reducer,
        [productsApi.reducerPath]:productsApi.reducer,
        [postsApi.reducerPath]:postsApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(countriesApi.middleware,productsApi.middleware,postsApi.middleware),
})
setupListeners(store.dispatch)