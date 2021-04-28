import React from 'react';
import Button from '@material-ui/core/Button';
import { NavLink } from 'react-router-dom';
import { KeyboardBackspace, LiveHelp } from '@material-ui/icons';
import { ComponentTitle } from '../common/ComponentTitle';
import { FORBIDDEN, NOT_FOUND, UNAUTHORIZED, UNKNOWN, useQuery, WELCOME, } from './routing/routes';

function defineTitle(type) {
  switch (type) {
    case FORBIDDEN:
      return '403 Forbidden';
    case UNAUTHORIZED:
      return '401 Unauthorized';
    case NOT_FOUND:
      return '404 Not found';
    case UNKNOWN:
      return 'An error has occurred';
    default:
      return '404 Not found';
  }
}

export default function Error() {

  const type = useQuery().get('type');
  const title = type ? defineTitle(type) : '404 Not found';

  return <div>
    <ComponentTitle title={title} icon={<LiveHelp fontSize={'large'}/>}/>
    <Button startIcon={<KeyboardBackspace/>} component={NavLink} to={WELCOME}>
      back to home
    </Button>
  </div>;
}