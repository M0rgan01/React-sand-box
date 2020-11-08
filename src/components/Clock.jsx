import React, {Component} from 'react';

export class Clock extends Component {

  constructor(props) {
    super(props);

    this.state = {
      date: new Date(),
    };
  }

  render() {
    return <div>
      {this.state.date.toLocaleString()}
    </div>
  }

}