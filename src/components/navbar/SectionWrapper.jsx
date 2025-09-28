import { Box, Container, alpha } from "@mui/material";
import React, { useEffect, useState, useMemo } from "react";
import { ORANGE_COLOR } from "../../constants/colors";
import PropTypes from "prop-types";

const SectionWrapper = React.memo(React.forwardRef(({ 
    id, 
    index, 
    children, 
    priority = false,
    onVisibilityChange 
}, ref) => {
    const [isVisible, setIsVisible] = useState(priority);
    const [hasRendered, setHasRendered] = useState(priority);
    const [intersectionRatio, setIntersectionRatio] = useState(0);

    useEffect(() => {
        if (!ref?.current) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                const ratio = entry.intersectionRatio;
                const nowVisible = ratio > 0.05;
                
                setIntersectionRatio(ratio);
                setIsVisible(nowVisible);
                
                if (onVisibilityChange) {
                    onVisibilityChange(index, nowVisible, ratio);
                }

                // Renderizar children cuando tenga al menos 10% de visibilidad
                if (ratio > 0.1 && !hasRendered) {
                    setHasRendered(true);
                }
            },
            { 
                threshold: 0.01,
                rootMargin: '50px 0px 100px 0px'
            }
        );

        observer.observe(ref.current);
        return () => observer.disconnect();
    }, [ref, index, hasRendered, onVisibilityChange, priority]);

    // Efecto para carga prioritaria
    useEffect(() => {
        if (priority && !hasRendered) {
            setHasRendered(true);
            setIsVisible(true);
        }
    }, [priority, hasRendered]);

    // Memoizar el contenido para evitar re-renders
    const content = useMemo(() => {
        if (!hasRendered) {
            return (
                <Box 
                    sx={{ 
                        minHeight: 300,
                        background: `linear-gradient(135deg, ${alpha(ORANGE_COLOR, 0.05)} 0%, transparent 50%)`,
                        borderRadius: 2,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                />
            );
        }

        return children;
    }, [hasRendered, children]);

    // Calcular opacidad basada en la intersección
    const calculatedOpacity = useMemo(() => {
        if (priority) return 1;
        return Math.min(1, intersectionRatio * 3); // Acelerar la aparición
    }, [intersectionRatio, priority]);

    return (
        <Box 
            ref={ref}
            id={id}
            data-section-index={index}
            data-visible={isVisible}
            data-rendered={hasRendered}
            sx={{ 
                minHeight: '100vh', 
                display: 'flex', 
                alignItems: 'center',
                py: { xs: 4, md: 8 },
                px: { xs: 2, md: 0 },
                opacity: calculatedOpacity,
                transition: 'opacity 0.3s ease-in-out',
                willChange: 'opacity'
            }}
        >
            <Container 
                maxWidth="lg" 
                sx={{ 
                    width: '100%',
                    transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                    transition: 'transform 0.4s ease-out',
                    transitionDelay: hasRendered ? '0.1s' : '0s'
                }}
            >
                <Box sx={{ width: '100%' }}>
                    {content}
                </Box>
            </Container>
        </Box>
    );
}));

SectionWrapper.displayName = 'SectionWrapper';

SectionWrapper.propTypes = {
    id: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
    children: PropTypes.node.isRequired,
    priority: PropTypes.bool,
    onVisibilityChange : PropTypes.func 
};

export default SectionWrapper;