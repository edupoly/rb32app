
import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import { Outlet } from 'react-router-dom'
import Login from './features/auth/Login';
import { useSelector } from 'react-redux';

function App() {
  var {loginStatus} = useSelector(state=>state.user)
  console.log(loginStatus)
  useEffect(()=>{

  },[])
  return (
    <div className='border border-2 m-2 p-2 border-danger'>
      {
        loginStatus && (
          <>
          <Header></Header>
            <main className='container'>
                  <Outlet></Outlet>
            </main>
          </>
        )
      }
      {
        !loginStatus && (
          <Login></Login>
        )
      }
    </div>
  );
}

export default App;
