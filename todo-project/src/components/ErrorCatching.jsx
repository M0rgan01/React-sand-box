import PropTypes from 'prop-types';
import React from 'react';

// Composant de catch général
// https://www.youtube.com/watch?v=tV3xTo98O6g&list=PLjwdMgw5TTLWom67YfZuha-1iYzIirwJR&index=26
export default class ErrorCatching extends React.Component {

  constructor(props) {
    super(props);
    this.state = { error: false };
  }

  static getDerivedStateFromError(error) {
    return { error: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.error) {
      return (<div>
        Une erreur est survenue
      </div>);
    }
    return this.props.children;
  }
}

ErrorCatching.propTypes = {
  children: PropTypes.node,
};