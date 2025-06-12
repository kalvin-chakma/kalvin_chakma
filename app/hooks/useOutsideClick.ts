import { useEffect, useRef } from 'react';

/**
 * A custom hook that detects clicks outside of a specified element
 * @param callback - Function to call when a click outside is detected
 * @returns A ref to attach to the element you want to detect outside clicks for
 */
const useOutsideClick = (callback: () => void) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [callback]);

  return ref;
};

export default useOutsideClick; 