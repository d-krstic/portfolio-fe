import { useEffect, useState } from 'react';
import ReactGA from 'react-ga';
import { useLocation } from 'react-router-dom';

const useGaTracker = (): void => {
  const location = useLocation();
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    if (process.env['REACT_APP_GA_ID '] === null) {
      if (['dev', 'prod'].includes(process.env.REACT_APP_ENV?.toLowerCase())) {
        ReactGA.initialize(process.env.REACT_APP_GA_ID);
      }
      setInitialized(true);
    }
  }, []);

  useEffect(() => {
    if (initialized) {
      ReactGA.pageview(location.pathname + location.search);
    }
  }, [initialized, location]);
};

export default useGaTracker;
