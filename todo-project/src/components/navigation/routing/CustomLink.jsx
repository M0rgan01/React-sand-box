import React from 'react';
import PropTypes from 'prop-types';
import { clickPosition, show } from '../../../plugins/animeBackground';
import { useHistory } from 'react-router-dom';

export function CustomLink({ to, component }) {

  let history = useHistory();

  const fillBackground = (event) => {
    clickPosition(event);
    show({ complete: () => history.push(to) });
  };

  return <span onClick={ event => fillBackground(event) }>{ component }</span>;
}

CustomLink.propTypes = {
  to: PropTypes.string.isRequired,
  component: PropTypes.element.isRequired,
};