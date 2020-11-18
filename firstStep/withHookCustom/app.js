
// custom hoob
function useIncrement(base, step) {
  const [count, setCount] = React.useState(base);
  const increment = () => {
    setCount(prevState => prevState + step);
  }
  return [count, increment]
}


function WelcomeFunc() {
  const [count, increment] = useIncrement(0, 2)

  return <div>
    <h1>Bonjour</h1>
    <button onClick={increment}>{count}</button>
  </div>;
}

ReactDOM.render(<WelcomeFunc/>, document.querySelector('#app'));