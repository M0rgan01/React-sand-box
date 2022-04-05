import React, { forwardRef } from 'react';
import { Link } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import { clickPosition, showOverlay } from '../../../plugins/animeBackground';

interface CustomLinkProps {
  to: string;
  component: React.ReactNode;
}

function CLink({ to, component }: CustomLinkProps) {
  const navigate = useNavigate();

  const fillBackground = (event: React.MouseEvent) => {
    clickPosition(event);
    showOverlay({ complete: () => navigate(to) });
  };

  return (
    <Link
      role="banner"
      onClick={(event) => fillBackground(event)}
      style={{ textDecoration: 'none', color: 'inherit', fontSize: 'inherit' }}
    >
      { component }
    </Link>
  );
}

// https://fr.reactjs.org/docs/forwarding-refs.html
const CustomLink = forwardRef(CLink);

export default CustomLink;
