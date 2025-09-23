import { useCallback, useEffect, useState } from "react";

const SCROLL_OFFSET = 100;

const useScrollDetection = (refs) => {
    const [activeSection, setActiveSection] = useState(0);

    const handleScroll = useCallback(() => {
    const scrollPosition = window.scrollY + SCROLL_OFFSET;

    const sections = refs.current
        .map((ref, index) => {
            if (ref?.current) {
                const element = ref.current;
                return {
                    index,
                    top: element.offsetTop,
                    bottom: element.offsetTop + element.offsetHeight,
                };
            }
            return null;
        })
        .filter(Boolean);

    const currentSection = sections.find(section => 
        scrollPosition >= section.top && scrollPosition < section.bottom
    );

    if (currentSection && currentSection.index !== activeSection) {
        setActiveSection(currentSection.index);
    }
    }, [refs, activeSection]);

    useEffect(() => {
    // Throttle scroll events para mejor rendimiento
    let timeoutId = null;
    const throttledHandleScroll = () => {
        if (timeoutId === null) {
        timeoutId = setTimeout(() => {
            handleScroll();
            timeoutId = null;
        }, 10);
        }
    };

    window.addEventListener('scroll', throttledHandleScroll, { passive: true });
    handleScroll(); // Llamada inicial

    return () => {
        window.removeEventListener('scroll', throttledHandleScroll);
        if (timeoutId) {
        clearTimeout(timeoutId);
        }
    };
    }, [handleScroll]);

    return activeSection;
};
export default useScrollDetection;