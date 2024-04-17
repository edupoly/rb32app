import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Prices from './components/Prices';
import Features from './components/Features';
import Angular from './components/Angular';
import ReactJS from './components/ReactJS';
import Products from './components/ProductsMaster';
import ProductsMaster from './components/ProductsMaster';
import ProductDetails from './components/ProductDetails';
import Dukan from './components/Dukan';
var myrouter = createBrowserRouter([
  {
    path:"/",
    element:<App></App>,
    children:[
      {
        path:"/vb",
        element:<Prices></Prices>
      },
      {
        path:"/xcv",
        element:<Features></Features>,
        children:[
          {
            path:"/xcv/angular",
            element:<Angular></Angular>
          },
          {
            path:"/xcv/react",
            element:<ReactJS></ReactJS>
          }
        ]
      },
      {
        path:"/dukan",
        element:<Dukan></Dukan>
      },
      {
        path:"/productslist",
        element:<ProductsMaster></ProductsMaster>
      },
      {
        path:"/productdetails/:id",
        element:<ProductDetails></ProductDetails>
      }
    ]
  }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={myrouter}></RouterProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
