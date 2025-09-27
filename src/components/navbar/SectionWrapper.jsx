import { Box, Container, Fade } from "@mui/material";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";

const SectionWrapper = React.memo(React.forwardRef(({ id, index, children }, ref) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { 
                threshold: 0.2,
                rootMargin: '-10% 0px -10% 0px'
            }
        );
        const node = ref?.current;
        if (node) {
            observer.observe(node);
        }

        return () => observer.disconnect();
    }, [ref]);

    return (
        <Box ref={ref} id={id} data-id={index}
            sx={{ 
                minHeight: '100vh', 
                display: 'flex', 
                alignItems: 'center',
                py: { xs: 5, md: 10 },
                px: { xs: 2, md: 0 }
            }}
        >
            <Container maxWidth="lg" sx={{ width: '100%' }}>
            <Fade in={isVisible} timeout={100}>
                <Box>{children}</Box>
            </Fade>
            </Container>
        </Box>
    );
}));

SectionWrapper.displayName = 'SectionWrapper';

SectionWrapper.propTypes = {
    id: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
    children: PropTypes.node.isRequired,
};

export default SectionWrapper;