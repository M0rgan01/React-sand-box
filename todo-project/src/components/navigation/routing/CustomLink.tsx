import React, { forwardRef } from 'react';
import { Link } from '@material-ui/core';
import { useLocation, useNavigate } from 'react-router-dom';
import CSS from 'csstype';
import { clickPosition, showOverlay } from '../../../plugins/animeBackground';

const linkClass: CSS.Properties = {
  textDecoration: 'none',
  color: 'inherit',
  fontSize: 'inherit',
  textTransform: 'inherit',
};

interface CustomLinkProps {
  to: string;
  component: React.ReactNode;
}

function CLink({ to, component }: CustomLinkProps) {
  const navigate = useNavigate();
  const actualPath = useLocation().pathname;
  const fillBackground = (event: React.MouseEvent) => {
    if (to !== actualPath) {
      clickPosition(event);
      showOverlay({ complete: () => navigate(to) });
    }
  };

  return (
    <Link
      role="banner"
      onClick={(event) => fillBackground(event)}
      style={linkClass}
    >
      { component }
    </Link>
  );
}

// https://fr.reactjs.org/docs/forwarding-refs.html
const CustomLink = forwardRef(CLink);

export default CustomLink;
