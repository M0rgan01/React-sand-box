import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Book } from '@material-ui/icons';
import { ComponentTitle } from './common/ComponentTitle';
import { useSelector } from 'react-redux';
import { isAuthenticatedSelector } from '../store/selectors/authSelectors';
import { useOverlay } from './common/CustomHook';

export default function Welcome() {
  useOverlay(false);
  const auth = useSelector(isAuthenticatedSelector);

  return <div>
    <ComponentTitle title={'Todo-App-Sandbox'} icon={<Book fontSize={'large'}/>}/>
    <Typography variant={'body1'}>
      Welcome to this great application ! {auth ? '' : 'Please login and enjoy :)'}
    </Typography>
  </div>;
}