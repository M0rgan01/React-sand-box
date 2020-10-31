class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      nom: 'Jean',
      firstName: '',
      lastName: '',
      newsLetter: false,
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
      <h1>{this.state.nom}</h1>
      <label htmlFor="nom">Mon nom</label>
      <input type="text"
             id="nom"
             onChange={this.handleChange}
             name="nom"
             value={this.state.nom}/>
      <select value={this.state.nom}
              name="nom"
              onChange={this.handleChange}>
        <option value="option1">1</option>
        <option value="option2">2</option>
        <option value="Jean">3</option>
      </select>
      <br/>
      <br/>
      <br/>
      <div>
        <label htmlFor="firstName">firstName</label>
        <input type="text"
               id="firstName"
               onChange={this.handleChange}
               name="firstName"
               value={this.state.firstName}/>
      </div>
      <div>
        <label htmlFor="lastName">lastName</label>
        <input type="text"
               id="lastName"
               onChange={this.handleChange}
               name="lastName"
               value={this.state.lastName}/>
      </div>
      <div>
        <label htmlFor="lastName">newsLetter</label>
        <input type="checkbox"
               id="newsLetter"
               onChange={this.handleChange}
               name="newsLetter"
               value={this.state.newsLetter}/>
      </div>
      <div className="my-4">
        {JSON.stringify(this.state)}
      </div>

      <div className="border-top my-4"/>

      <Field name="lastName" value={this.state.lastName} onChange={this.handleChange}>Nom depuis children</Field>
      <Field name="firstName" value={this.state.firstName} onChange={this.handleChange}>Prénom depuis children</Field>
      <Checkbox name="newsLetter" value={this.state.newsLetter} onChange={this.handleChange}>newsLetter depuis children</Checkbox>

      <div className="form-group mt-4">
        <button className="btn btn-primary">Submit</button>
      </div>
    </form>
  }
}

class Field extends React.Component {

  render() {
    const { name, value, onChange, children } = this.props;
    return <div className="form-group">
      <label htmlFor={name}>{children}</label>
      <input type="text" value={value} id={name} name={name} onChange={onChange} className="form-control"/>
    </div>
  }

}


function Checkbox({ name, value, onChange, children }) {
  return <div className="form-check">
    <input type="checkbox" checked={value} id={name} name={name} onChange={onChange} className="form-check-input"/>
    <label className="form-check-label" htmlFor={name}>{children}</label>
  </div>
}


ReactDOM.render(<Home/>, document.querySelector('#app'));