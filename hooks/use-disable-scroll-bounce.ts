import { useEffect } from 'react';

/**
 * Disables scroll bounce on the body element when other users are moving the canvas
 * makes sure that another users drawing or inserting behavior does not cause the canvas to scroll
 */
export const useDisableScrollBounce = () => {
  useEffect(() => {
    document.body.classList.add('overflow-hidden', 'overscroll-none');
    return () => {
      document.body.classList.remove('overflow-hidden', 'overscroll-none');
    };
  }, []);
};
