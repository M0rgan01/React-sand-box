// https://www.youtube.com/watch?v=QhM0KW2txSc&list=PLjwdMgw5TTLWom67YfZuha-1iYzIirwJR&index=11
// ICI la solution pour une interaction direct avec le DOM (les refs), de nous même

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.input = React.createRef();
  }

  handleClick(e) {
    console.log(this.input.current.value);
  }

  render() {
    return <div>
      <input type="text" ref={this.input}/>
      <button onClick={this.handleClick}>Test</button>
    </div>
  }

}

ReactDOM.render(<Home/>, document.querySelector('#app'));