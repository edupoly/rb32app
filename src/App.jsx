
import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';

import Login from './features/auth/Login';
import { useSelector } from 'react-redux';
import ManagerHome from './features/manager/ManagerHome';

import AgentHome from './features/agent/AgentHome';

function App() {
  var {loginStatus,role} = useSelector(state=>state.user)
  console.log(loginStatus)
  useEffect(()=>{

  },[])
  return (
    <div className='border border-2 m-2 p-2 border-danger'>
      {
        loginStatus && (
          <>
          <Header></Header>
          {
            role==='manager' && (<ManagerHome></ManagerHome>)
          }
          {
            role==='agent' && (<AgentHome></AgentHome>)
          }
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
