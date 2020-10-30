let n = 0;

function numberFormat(n) {
  return n.toString().padStart(2, '0');
}

function render() {
  const items = [
    'tache 1',
    'tache 2',
    'tache 3',
  ];
  const lis = items.map((value, index) => <li key={index}>{value}</li>);
  const title =
    <React.Fragment>
      <h1 id="title" className="title">
        Bonjour les gens <span>{n % 2 ? numberFormat(n) : null}</span>
      </h1>
      <ul>
        {lis}
      </ul>
    </React.Fragment>
  ReactDOM.render(title, document.querySelector('#app'));
}

render();

window.setInterval(() => {
  n++;
  render();
}, 1000);