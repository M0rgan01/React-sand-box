import { Link } from 'react-router-dom';
import React from 'react';
import PropTypes from 'prop-types';
import { animate } from '../../../plugins/animeBackground';

export function CustomLink({ to, component }) {

  const fillBackground = (event) => {
    animate(event);
  };

  return <Link to={ to } onClick={ (e) => fillBackground(e) }>{ component }</Link>;
}

CustomLink.propTypes = {
  to: PropTypes.string.isRequired,
  component: PropTypes.element.isRequired,
};