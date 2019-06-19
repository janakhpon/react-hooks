import { useEffect, useState } from 'react';
import { canUseDOM, managedEventListener } from './utils';

export default function useWindowScrollPosition() {
  const [position, setPosition] = useState(
    canUseDOM ? [window.scrollX, window.scrollY] : [0, 0],
  );

  useEffect(
    () =>
      managedEventListener(window, 'scroll', () => {
        setPosition([window.scrollX, window.scrollY]);
      }),
    [],
  );

  return position;
}