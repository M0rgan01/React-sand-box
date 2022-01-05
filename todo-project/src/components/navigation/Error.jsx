import React from 'react';
import Button from '@material-ui/core/Button';
import { KeyboardBackspace, LiveHelp } from '@material-ui/icons';
import { ComponentTitle } from '../common/ComponentTitle';
import { FORBIDDEN, NOT_FOUND, UNAUTHORIZED, UNKNOWN, useQuery, WELCOME } from './routing/routes';
import { CustomLink } from './routing/CustomLink';
import { TransitionPage } from '../common/TransitionPage';

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

  return <TransitionPage>
    <ComponentTitle title={ title } icon={ <LiveHelp fontSize={ 'large' }/> }/>
    <CustomLink to={ WELCOME }
                component={ <Button startIcon={ <KeyboardBackspace/> }>
                  back to home
                </Button> }/>
  </TransitionPage>;
}