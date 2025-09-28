import { useCallback, useEffect, useRef, useState } from "react";

const useScrollDetection = (sectionRefs, options = {}) => {
    const { 
        threshold = 0.1, 
        scrollDelay = 0
    } = options;
    
    const [activeSection, setActiveSection] = useState(0);
    const tickingRef = useRef(false);
    const timeoutRef = useRef();

    const updateActiveSection = useCallback(() => {
        if (!sectionRefs.current?.length) return;

        let currentActive = 0;
        let maxVisibility = 0;

        // Usar for loop en lugar de forEach por mejor performance
        for (let index = 0; index < sectionRefs.current.length; index++) {
            const ref = sectionRefs.current[index];
            if (!ref?.current) continue;

            const rect = ref.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            
            // Cálculo optimizado de visibilidad
            const visibleHeight = Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0);
            if (visibleHeight <= 0) continue;

            const sectionHeight = rect.height;
            const visibilityRatio = visibleHeight / Math.min(sectionHeight, windowHeight);

            if (visibilityRatio > maxVisibility) {
                maxVisibility = visibilityRatio;
                currentActive = index;
                
                // Si encontramos una sección que supera el threshold, salir early
                if (visibilityRatio > threshold) {
                    break;
                }
            }
        }

        setActiveSection(prev => prev !== currentActive ? currentActive : prev);
        tickingRef.current = false;
    }, [sectionRefs, threshold]);

    const handleScroll = useCallback(() => {
        if (tickingRef.current) return;

        // Agrupar eventos rápidos de scroll
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }

        timeoutRef.current = setTimeout(() => {
            tickingRef.current = true;
            requestAnimationFrame(updateActiveSection);
        }, scrollDelay);
    }, [updateActiveSection, scrollDelay]);

    useEffect(() => {
        const passiveOptions = { passive: true };
        
        window.addEventListener('scroll', handleScroll, passiveOptions);
        window.addEventListener('resize', handleScroll, passiveOptions);
        
        // Detección inicial con pequeño delay para asegurar que el DOM está listo
        const initTimer = setTimeout(updateActiveSection, 100);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleScroll);
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
            clearTimeout(initTimer);
        };
    }, [handleScroll, updateActiveSection]);

    return activeSection;
};

export default useScrollDetection;