import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/* Add this components to reset scrollbar when change path */
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
