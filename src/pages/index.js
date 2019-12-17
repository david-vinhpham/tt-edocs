import { useEffect } from 'react';
import { navigate } from 'gatsby';
import NAVIGATION from '../constants/navBar';

const IndexPage = () => {
  useEffect(() => {
    navigate(NAVIGATION.URL.HOME);
  }, []);
  return null;
};

export default IndexPage;
