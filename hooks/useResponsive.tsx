import { useEffect, useState } from 'react';


const useResponsive = () => {
  const [windowWidth, setWidth] = useState(0);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    const handleWindowWidth = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleWindowWidth);
    return () => {
      window.removeEventListener('resize', handleWindowWidth);
    };
  }, []);

  const isLaptop = windowWidth <= 1024;
  const isTablet = windowWidth <= 768;
  const isPhone = windowWidth <= 600;

  return {
    isLaptop,
    isTablet,
    isPhone,
  };
};

export default useResponsive;
