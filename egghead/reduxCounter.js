const reducer = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state++;
    case 'DECREMENT':
      return state--;
    default:
      return state;
  }
};

const Counter = ({ value, onIncrement, onDecrement }) => {
  <h1>{value}</h1>
  <button onClick={onIncrement}>+</button>
  <button onClick={onDecrement}>-</button>
};

const increment = () => {
  store.dispatch({ type: 'INCREMENT' });
};

const decrement = () => {
  store.dispatch({ type: 'DECREMENT' });
};

const { createStore } = Redux;
const store = createStore(reducer);

const render = () => {
  ReactDOM.render(
    <Counter
      value={store.getState()}
      onIncrement={increment}
      onDecrement={decrement}
     />,
    document.getElementById('root')
  );
};

store.subscribe(render);
render(); // initial render
