import logo from './logo.svg';
import './App.css';
import Counter from './features/counter/Counter';
import Todolist from './features/todolist/Todolist';
import Products from './features/Ecom/Products';

function App() {
  return (
    <div className='border border-2 m-2 p-2 border-danger'>
      <h1>App Component</h1>
      <Products></Products>
      <Todolist></Todolist>
      <Counter></Counter>
    </div>
  );
}

export default App;
