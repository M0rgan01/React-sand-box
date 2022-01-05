import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { clickPosition, showOverlay } from '../../../plugins/animeBackground';
import { useHistory } from 'react-router-dom';

const link = (({ to, component }, ref) => {

  let history = useHistory();

  const fillBackground = (event) => {
    clickPosition(event);
    showOverlay({ complete: () => history.push(to) });
  };

  return <span onClick={ event => fillBackground(event) }>{ component }</span>;
});

// https://fr.reactjs.org/docs/forwarding-refs.html
export const CustomLink = forwardRef(link);

CustomLink.propTypes = {
  to: PropTypes.string.isRequired,
  component: PropTypes.element.isRequired,
};