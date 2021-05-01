import { useEffect, useState } from 'react';
import { hide, Overlay, show } from '../../plugins/animeBackground';

export function usePageTransitionLoading() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (!loading && Overlay.open) {
      hide();
    }
  }, [loading, Overlay.open]);
  return [loading, setLoading];
}

export function useOverlay(open, options) {
  useEffect(() => {
    if (open) {
      show(options);
    } else {
      hide(options);
    }
  }, []);
}