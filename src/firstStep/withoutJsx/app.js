const title = React.createElement('h1', {}, 'Bonjour tout le monde');

ReactDOM.render(title, document.querySelector('#app'));

let n = 0;

function render() {
  const subTitle = React.createElement('h1', {},
    'Un subTitle ',
    React.createElement('span', {}, n));
  ReactDOM.render(subTitle, document.querySelector('#app2'));
}

render();

window.setInterval(() => {
  n++;
  render();
}, 1000);