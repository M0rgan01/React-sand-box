// 1er solution
function WelcomeFunc({name, children}) {
  return <div>
    <h1>Bonjour {name}</h1>
    <p>{children}</p>
  </div>;
}

// 2eme solution
class Welcome extends React.Component {

  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    return <div>
      <h1>Bonjour {this.props.name}</h1>
      <p>{this.props.children}</p>
    </div>;
  }

}


/////////////////////////////////////////////////////////////////////////////////////////

// LES STATES / cycle de vie d'un composant
class Clock extends React.Component {

  constructor(props) {
    super(props);
    this.state =
      {
        date : new Date(),
      };
    this.timer = null;
  }

  // à la création du composant
  componentDidMount() {
    this.timer = window.setInterval(() => {
      this.tick();
    }, 1000);
  }

  // à la destruction du composant
  componentWillUnmount() {
    window.clearInterval(this.timer);
  }

  tick() {
    // changement d'un état
   this.setState({date : new Date()});
  }

  render() {
    return <div>
      Il est {this.state.date.toLocaleDateString()} {this.state.date.toLocaleTimeString()}
    </div>;
  }
}

class Increment extends React.Component {

  constructor(props) {
    super(props);
    this.state =
      {
        start : props.start,
      };
    this.timer = null;
  }

  // à la création du composant
  componentDidMount() {
    this.timer = window.setInterval(() => {

      // Changement d'états
      this.setState((state, props) => {
        return {
          start : state.start + props.step,
        };
      });


    }, 1000);
  }

  // à la destruction du composant
  componentWillUnmount() {
    window.clearInterval(this.timer);
  }

  render() {
    return <div>
      Mon incrémentation : {this.state.start}
    </div>;
  }
}

Increment.defaultProps = {
  start: 0,
  step: 1,
};

function Home() {
  return <div>
    <Welcome name="Jean">Bonjour les enfants</Welcome>
    <Welcome name="Emilie">Bonjour les enfants</Welcome>
    <Clock/>
    <Increment start={10} />
    <Increment start={100} step={10} />
  </div>
}

//ReactDOM.render(<Welcome name="Jean">Bonjour les enfants</Welcome>, document.querySelector('#app'));

ReactDOM.render(<Home/>, document.querySelector('#app'));