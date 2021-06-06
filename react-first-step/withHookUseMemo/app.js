// https://www.youtube.com/watch?v=wNX5iRhczHM&list=PLjwdMgw5TTLWom67YfZuha-1iYzIirwJR&index=18
function WelcomeFunc() {

  const [name, setName] = React.useState('name');
  const [number, setNumber] = React.useState(0);

  const onUpdate = (e) => {
    if (e.target.getAttribute('name') === 'name') {
      setName(e.target.value);
    }
    if (e.target.name === 'number') {
      setNumber(e.target.value);
    }
  };

  // Sans useMemo
  //const encodeNumber = encode(number);

  // useMemo prend en dépendance un tableau de propriétés à observer et retourne la propriété à mémoriser
  // -> sur le rendu initial ou si la propriété change, le code est exécuté le re-rendu de encodeNumber est réalisé
  // -> sans le useMemo, la modification de l'autre champ aurais re-rendu le composant et donc éxécuté à nouveau
  // la méthode encode (et donc l'attente de 1s)
  const encodeNumber = React.useMemo(() => {
    console.log('rendu pour encodeNumber')
    return encode(number)
  }, [number]);

  return <div>
  <div>
    <label htmlFor="name">Name</label>
    <input type="text" id="name" value={name} name="name" onChange={(e) => onUpdate(e)} />
  </div>
    <div>
      <label htmlFor="number">Number</label>
      <input type="number" id="number" value={number} name="number" onChange={(e) => onUpdate(e)}/>
    </div>
    <h2>Name</h2>
    <p>{name}</p>
    <h2>Number</h2>
    <p>{number}</p>
    <p>Encoded number => {encodeNumber}</p>
  </div>;
}

ReactDOM.render(<WelcomeFunc/>, document.querySelector('#app'));

function encode (number) {
  wait(1000);
  return Date.now();
}

function wait (duration) {
  const t = Date.now();
  while (true) {
    if (Date.now() - t > duration) {
      return true;
    }
  }
}