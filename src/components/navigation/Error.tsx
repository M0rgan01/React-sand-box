import React from 'react';
import { KeyboardBackspace, LiveHelp } from '@mui/icons-material';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { ComponentTitle } from '../common/ComponentTitle';
import {
  FORBIDDEN, NOT_FOUND, UNAUTHORIZED, UNKNOWN, useQuery, WELCOME,
} from './routing/routes';

function defineTitle(type: string) {
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
  const navigate = useNavigate();

  return (
    <>
      <ComponentTitle title={title} icon={<LiveHelp fontSize="large" />} />
      <Button startIcon={<KeyboardBackspace />} onClick={() => navigate(WELCOME)}>
        back to home
      </Button>
    </>
  );
}
