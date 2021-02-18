import React from 'react';
import Button from '@material-ui/core/Button';
import { NavLink } from 'react-router-dom';
import { KeyboardBackspace, LiveHelp } from '@material-ui/icons';
import { ComponentTitle } from '../common/ComponentTitle';
import {
  ERROR_FORBIDDEN,
  ERROR_NOT_FOUND,
  ERROR_UNAUTHORIZED,
  ERROR_UNKNOWN,
  useQuery,
  WELCOME,
} from './routing/routes';

function defineTitle(type) {
  switch (type) {
    case ERROR_FORBIDDEN:
      return '403 Forbidden';
    case ERROR_UNAUTHORIZED:
      return '401 Unauthorized';
    case ERROR_NOT_FOUND:
      return '404 Not found';
    case ERROR_UNKNOWN:
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