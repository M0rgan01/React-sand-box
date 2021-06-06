function WelcomeFunc() {

  const [count, setCount] = React.useState(0)

  // le hook useEffect est appelé à la création du composant,
  // et à chaque update d'états si il n'y a pas de 2eme paramêtre (un tableau)
  // si des éléments sont renseigné dans le tableau, la fonction est appelé à chaque changement d'état sur ces éléments
  // si le tableau est vide, il est appelé à la création du composant uniquement ('componentDidMount')
  // Il peut y avoir plusieur useEffect sur un même composant
  React.useEffect(() => {
    console.log('coucou');

    // si une fonction est présente en retour, elle fait office de 'componentDidUnMount'
    return () => {
      console.log('Au revoir');
      // Code de nettoyage du composant...
    }
  }, []);

  return <div>
    <h1>Bonjour</h1>
    <button onClick={() => setCount(prevState => prevState +1)}>{count}</button>
  </div>;
}

ReactDOM.render(<WelcomeFunc/>, document.querySelector('#app'));