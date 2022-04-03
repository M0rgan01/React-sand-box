import React, { ErrorInfo } from 'react';

interface ErrorCatchingProps {
  children: React.ReactNode;
}

interface ErrorCatchingState {
  error: boolean;
}

// Composant de catch général
// https://www.youtube.com/watch?v=tV3xTo98O6g&list=PLjwdMgw5TTLWom67YfZuha-1iYzIirwJR&index=26
export default class ErrorCatching extends React.Component<ErrorCatchingProps, ErrorCatchingState> {
  constructor(props: ErrorCatchingProps) {
    super(props);
    this.state = {
      error: false,
    };
  }

  static getDerivedStateFromError(error: Error) {
    return { error: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.log(error, errorInfo);
  }

  render() {
    const { error } = this.state;
    const { children } = this.props;
    if (error) {
      return (
        <div style={{ position: 'relative' }}>
          Une erreur est survenue (From error catching)
        </div>
      );
    }
    return children;
  }
}
