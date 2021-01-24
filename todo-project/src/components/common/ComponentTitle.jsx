import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import PropTypes from 'prop-types';

export function ComponentTitle({title, icon, variant, marginBottom}) {

  return <Box mb={marginBottom ? marginBottom : 3}
              alignItems={'center'}
              display={'flex'}>
    {
      icon && <Box display={'inline'} mr={1}>
        {icon}
      </Box>
    }
    <Typography variant={variant ? variant : 'h3'}>
      {title}
    </Typography>
  </Box>;
}

ComponentTitle.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.any,
  variant: PropTypes.string,
  marginBottom: PropTypes.number,
};