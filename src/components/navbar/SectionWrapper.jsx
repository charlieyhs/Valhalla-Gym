import { Box, Container, Fade } from "@mui/material";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";

const SectionWrapper = React.forwardRef(({ id, index, children }, ref) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.2}
        );
        const node = ref?.current;
        if (node) {
            observer.observe(node);
        }

        return () => {
            if (node) {
                observer.unobserve(node);
            }
        };
    }, [ref]);

    return (
        <Box 
            ref={ref}
            id={id}
            data-id={index}
        sx={{ 
                minHeight: '100vh', 
                display: 'flex', 
                alignItems: 'center',
                py: { xs: 5, md: 10 },
                px: { xs: 2, md: 0 }
            }}
        >
            <Container maxWidth="lg" sx={{ width: '100%' }}>
            <Fade in={isVisible} timeout={1000}>
                <Box>{children}</Box>
            </Fade>
            </Container>
        </Box>
    );
});

SectionWrapper.displayName = 'SectionWrapper';

SectionWrapper.propTypes = {
  id: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
isEven: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default SectionWrapper;