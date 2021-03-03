/* Import(s) */
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/* * * * * * * * * * * * *
 * * ScrollToTop component *
 *
 * @description : A component that scroll to the top of the page when page change.
 *
 * @use :
 * scroll-restoration  https://reactrouter.com/web/guides/scroll-restoration/scroll-to-top
 * useLocation         https://reactrouter.com/web/api/Hooks/uselocation
 * useEffect           https://fr.reactjs.org/docs/hooks-effect.html
 * scrollTo            https://developer.mozilla.org/fr/docs/Web/API/Window/scrollTo
 *
 */
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

/* Export component */
export default ScrollToTop;
