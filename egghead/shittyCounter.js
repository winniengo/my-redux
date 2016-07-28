const counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state++;
    case 'DECREMENT':
      return state--;
    default:
      return state;
  }
}

const { createSTore } = Redux;
const store = createStore(counter);

const render = () => {
  document.body.innerText = store.getState();
}
store.subscribe(render);
render(); // initial render

document.addEventListener('click', () => {
  store.dispatch( { type: 'INCREMENT' })
})
