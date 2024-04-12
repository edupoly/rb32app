import React, { useEffect, useMemo } from 'react'
import Child from './Child';
function App() {
  var ref1 = React.useRef()
  var ref2 = React.useRef()
  var ref3 = React.useRef()
  useEffect(()=>{
    ref1.current.focus();
  },[])
  function checkEnter(ev){
    if(ev.key==='Enter'){
      ref2.current.focus()
    }
  }
  function checkEnter2(ev){
    if(ev.key==='Enter'){
      ref3.current.focus()
    }
  }
  return (
    <div className="border border-2 m-2 p-2">
      <h2>App Component</h2>
      <input type="text" ref={ref1} onKeyUp={(e)=>{checkEnter(e)}}/>
      <br />
      <input type="text"  ref={ref2} onKeyUp={(e)=>{checkEnter2(e)}}/>
      <Child ref={ref3}></Child>
    </div>
  );
}

export default App;
