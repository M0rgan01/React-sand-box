import React from 'react';
import { Button, ButtonProps, CircularProgress } from '@mui/material';

interface LoadingButtonProps extends ButtonProps {
  buttonText: string;
  icon: React.ReactNode;
  loading: boolean;
}

export function LoadingButton({
  disabled, icon, color, loading, buttonText, type, ...rest
}: LoadingButtonProps) {
  return (
    <Button
      {...rest}
      startIcon={loading ? <CircularProgress size={20} /> : icon}
      type={type || 'submit'}
      disabled={disabled}
      variant="contained"
      color={color || 'primary'}
    >
      {loading ? 'loading' : buttonText}
    </Button>
  );
}

export default LoadingButton;
