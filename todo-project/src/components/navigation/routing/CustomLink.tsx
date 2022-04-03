import React, { forwardRef } from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from '@material-ui/core';
import { clickPosition, showOverlay } from '../../../plugins/animeBackground';

interface CustomLinkProps {
  to: string;
  component: React.ReactNode;
}

function CLink({ to, component }: CustomLinkProps) {
  const history = useHistory();

  const fillBackground = (event: React.MouseEvent) => {
    clickPosition(event);
    showOverlay({ complete: () => history.push(to) });
  };

  return <Link role="banner" onClick={(event) => fillBackground(event)}>{ component }</Link>;
}

// https://fr.reactjs.org/docs/forwarding-refs.html
const CustomLink = forwardRef(CLink);

export default CustomLink;
