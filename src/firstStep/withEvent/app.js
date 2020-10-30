class ManualIncrement extends React.Component {

  constructor(props) {
    super(props);
    this.state =
      {
        start : 0,
        timer: null,
      };
    // better perf
    this.toggle = this.toggle.bind(this)
    this.reset = this.reset.bind(this)
  }

  componentDidMount() {
   this.start();
  }

  componentWillUnmount() {
    // this.pause(); --> !!! ne pas faire appel à this.setState dans la méthode de destruction de composent
    window.clearInterval(this.state.timer);
  }

  increment() {
    this.setState((state, props) => {
      return {
        start : state.start + 1,
      };
    });
  }

  start() {
    window.clearInterval(this.state.timer);
    this.setState(() => {
      return {
        timer : window.setInterval(this.increment.bind(this), 1000),
      };
    });
  }

  pause() {
    window.clearInterval(this.state.timer);
    this.setState(() => {
      return {
        timer : null,
      };
    });
  }

  toggle() {
    this.state.timer ? this.pause() : this.start();
  }

  reset() {
    this.setState(() => {
      return {
        start: 0,
      };
    });
  }

  label() {
   return this.state.timer ? 'Pause' : 'Start';
  }

  render() {
    return <div>
      Mon incrémentation : {this.state.start}&nbsp;
      <button onClick={this.toggle}>
        {this.label()}
      </button>
      <button onClick={this.reset}>Reset</button>
    </div>;
  }
}

function Home() {
  return <div>
    <ManualIncrement />
  </div>
}

//ReactDOM.render(<Welcome name="Jean">Bonjour les enfants</Welcome>, document.querySelector('#app'));

ReactDOM.render(<Home/>, document.querySelector('#app'));