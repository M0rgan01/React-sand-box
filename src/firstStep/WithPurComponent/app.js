class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      nom: 'Jean',
      firstName: '',
      lastName: '',
      newsLetter: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // içi une méthode qui est appelé pour vérifier si un re-render dans être réalisé
  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }



  handleChange(e) {

    const name = e.target.name;
    const type = e.target.type;
    const value = type === 'checkbox' ? e.target.checked : e.target.value;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const data = JSON.stringify(this.state);
    console.log(data);
  }

  render() {
    return <form className="container" onSubmit={this.handleSubmit}>
      <h1>Pur component</h1>

      <div className="border-top my-4"/>

      <DisplayFirstName firstName={this.state.firstName}/>

      <DisplayFirstName firstName={this.state.firstName}/>

      <DisplayFirstName firstName={this.state.firstName}/>

      <div className="border-top my-4"/>

      <div className="my-4">
        {JSON.stringify(this.state)}
      </div>

      <Field name="lastName" value={this.state.lastName} onChange={this.handleChange}>Nom depuis children</Field>
      <Field name="firstName" value={this.state.firstName} onChange={this.handleChange}>Prénom depuis children</Field>
      <Checkbox name="newsLetter" value={this.state.newsLetter} onChange={this.handleChange}>newsLetter depuis
        children</Checkbox>

      <div className="form-group mt-4">
        <button className="btn btn-primary">Submit</button>
      </div>
    </form>;
  }
}

class Field extends React.Component {

  render() {
    const {name, value, onChange, children} = this.props;
    return <div className="form-group">
      <label htmlFor={name}>FirstName :{children}</label>
      <input type="text" value={value} id={name} name={name} onChange={onChange} className="form-control"/>
    </div>;
  }

}

function Checkbox({name, value, onChange, children}) {
  return <div className="form-check">
    <input type="checkbox" checked={value} id={name} name={name} onChange={onChange} className="form-check-input"/>
    <label className="form-check-label" htmlFor={name}>{children}</label>
  </div>;
}
// un composant 'Pur'
const DisplayFirstName = React.memo( function ({firstName}) {
  // ICI on simule un traitement
  wait(500);

  console.log('RENDER');
  return <div className="my-4">
    <h3>FirstName :{firstName}</h3>
  </div>;
});

function wait(time) {
  const start = Date.now();
  while (Date.now() - start < time) {}
}

ReactDOM.render(<Home/>, document.querySelector('#app'));