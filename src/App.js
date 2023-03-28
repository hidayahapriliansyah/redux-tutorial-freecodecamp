import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { actions } from './store';

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
      <button onClick={() => dispatch(actions.increment())}>Increment</button>
      <button onClick={() => dispatch(actions.decrement())}>Decrement</button>
      <button onClick={() => dispatch(actions.addBy(10))}>Add 10</button>
    </div>
  );
}

export default App;
