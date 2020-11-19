

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return state +1;
    case 'decrement':
      if (state > 0) {
        return state -1;
      }
      return state;
    default:
      throw new Error('Incorrect action' + action);
  }
}

function reducerObject(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      if (state.count > 0) {
        return { count: state.count - 1 };
      }
      return state;
    default:
      throw new Error('Incorrect action' + action);
  }
}

function init(defaultValue) {
 return { count: defaultValue };
}


function WelcomeFunc() {

  // le hook useReducer à la même effect que le useState, mais permet plusieur muation possible
  const [count, dispatch] = React.useReducer(reducer, 0);
  // même chose avec un object, le 3eme params est la méthode pour initialisé l'object
  const [count2, dispatch2] = React.useReducer(reducerObject, 0, init);

  return <div>
    <h1>Bonjour</h1>
    <p>Compteur : {count}</p>
    <button onClick={() => dispatch({type: 'increment'})}>Increment</button>
    <button onClick={() => dispatch({type: 'decrement'})}>Decrement</button>
    <p>Compteur (version object) : {count2.count}</p>
    <button onClick={() => dispatch2({type: 'increment'})}>Increment</button>
    <button onClick={() => dispatch2({type: 'decrement'})}>Decrement</button>
  </div>;
}

ReactDOM.render(<WelcomeFunc/>, document.querySelector('#app'));