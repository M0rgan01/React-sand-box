import React from 'react';
import Button from '@material-ui/core/Button';
import { NavLink } from 'react-router-dom';
import { KeyboardBackspace, LiveHelp } from '@material-ui/icons';
import { ComponentTitle } from '../common/ComponentTitle';
import { WELCOME } from './routing/routes';

export default function Forbidden() {
  return <div>
    <ComponentTitle title={'Forbidden'} icon={<LiveHelp fontSize={'large'}/>}/>
    <Button startIcon={<KeyboardBackspace/>} component={NavLink} to={WELCOME}>
      back to home
    </Button>
  </div>;
}