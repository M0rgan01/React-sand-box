function WelcomeFunc() {

  // le hook useState permet d'opbenir un état dans une fonction
  // il retourne toujours la valeur actuel de l'élément, et un setter pour le changer
  // ** peut contenir n'importe quoi, ne peur être utilisé dans une boucle / condition
  const [count, setCount] = React.useState(0)

  return <div>
    <h1>Bonjour</h1>
    <button onClick={() => setCount(prevState => prevState +1)}>{count}</button>
  </div>;
}

ReactDOM.render(<WelcomeFunc/>, document.querySelector('#app'));