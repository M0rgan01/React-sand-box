import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';

export function LoadingButton({disable, icon, color, loading, text, type, ...rest}) {
  return <Button
      {...rest}
      startIcon={loading ? <CircularProgress size={20}/> : icon}
      type={type ? type : 'submit'}
      disabled={disable}
      variant="contained"
      color={color ? color : 'primary'}>
    {loading ? 'loading' : text}
  </Button>;
}

LoadingButton.propTypes = {
  disable: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  icon: PropTypes.object,
  color: PropTypes.string,
  type: PropTypes.string,
};