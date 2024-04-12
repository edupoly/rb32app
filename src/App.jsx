import React, { useMemo } from 'react'
import Child from './Child';
function App() {
  var [count,setCount]=React.useState(0);
  var myname = useMemo(()=>{return [10,20]},[])
  return (
    <div className="border border-2 m-2 p-2">
      <h2>App Component</h2>
      <h1>Counter:{count}</h1>
      <button onClick={()=>{setCount(count+1)}}>Increment</button>
      <Child m={myname}></Child>
    </div>
  );
}

export default App;
