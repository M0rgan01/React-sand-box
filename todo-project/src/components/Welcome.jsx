import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Book } from '@material-ui/icons';
import { ComponentTitle } from './common/ComponentTitle';
import { useSelector } from 'react-redux';
import { isAuthenticatedSelector } from '../store/selectors/authSelectors';
import { TransitionPage } from './common/TransitionPage';

export default function Welcome() {

  const auth = useSelector(isAuthenticatedSelector);

  return <TransitionPage>
    <ComponentTitle title={'Todo-App-Sandbox'} icon={<Book fontSize={'large'}/>}/>
    <Typography variant={'body1'}>
      Welcome to this great application ! {auth ? '' : 'Please login and enjoy :)'}
    </Typography>
  </TransitionPage>;
}