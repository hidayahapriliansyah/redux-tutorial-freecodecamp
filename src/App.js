import './App.css';
import { useSelector, useDispatch } from 'react-redux';

function App() {
  // kalau diparennya udah ditempelin provider, maka pas pakai useselector,
  // si useselector bisa ngambil apa yang di store sama provider itu.
  const counter = useSelector((state) => {
    return state.counter;
  });
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Counter</h1>
      <h2>{ counter }</h2>
      <button onClick={() => dispatch({ type: 'INC' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'DEC' })}>Decrement</button>
      <button onClick={() => dispatch({ type: 'ADD_TEN', payload: 10 })}>Add 10</button>
    </div>
  );
}

export default App;
