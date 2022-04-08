import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Book } from '@material-ui/icons';
import { useSelector } from 'react-redux';
import { ComponentTitle } from './common/ComponentTitle';
import { isAuthenticatedSelector } from '../store/selectors/authSelectors';

export default function Welcome() {
  const auth = useSelector(isAuthenticatedSelector);

  return (
    <>
      <ComponentTitle title="Todo-App-Sandbox" icon={<Book fontSize="large" />} />
      <Typography variant="body1">
        Welcome to this great application !
        {' '}
        {auth ? '' : 'Please login and enjoy :)'}
      </Typography>
    </>
  );
}
