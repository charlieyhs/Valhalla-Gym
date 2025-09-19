import { useCallback, useEffect, useState } from "react";
import { ORANGE_COLOR } from "../constants/colors";
import { IconButton } from "@mui/material";
import { KeyboardDoubleArrowUp } from "@mui/icons-material";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 100);
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);

  if (!isVisible) return null;

  return (
    <IconButton
      onClick={scrollToTop}
      sx={{
        position: 'fixed',
        bottom: 24,
        right: 24,
        backgroundColor: ORANGE_COLOR,
        color: 'white',
        zIndex: 1000,
        '&:hover': {
          backgroundColor: '#e55a2b',
          transform: 'scale(1.1)'
        },
        transition: 'all 0.3s ease'
      }}
      aria-label="Volver arriba"
    >
      <KeyboardDoubleArrowUp />
    </IconButton>
  );
};

export default ScrollToTopButton;