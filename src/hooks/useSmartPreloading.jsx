import { useState, useEffect, useRef } from 'react';

export const useSmartPreloading = (activeSection, totalSections, options = {}) => {
    const { preloadAdjacent = 2, immediateSections = [0] } = options;
    const [loadedSections, setLoadedSections] = useState(new Set(immediateSections));
    const preloadTimeoutRef = useRef(null);
    
    useEffect(() => {
        if (activeSection === null || activeSection === undefined) return;

        // Limpiar timeout anterior
        if (preloadTimeoutRef.current) {
            clearTimeout(preloadTimeoutRef.current);
        }

        setLoadedSections(prevLoaded => {
            const newLoaded = new Set(prevLoaded);
            
            // Agregar sección activa
            newLoaded.add(activeSection);
            
            // Agregar secciones adyacentes
            for (let i = 1; i <= preloadAdjacent; i++) {
                if (activeSection - i >= 0) newLoaded.add(activeSection - i);
                if (activeSection + i < totalSections) newLoaded.add(activeSection + i);
            }
            
            return newLoaded;
        });

        // Preload diferido del resto después de 2 segundos
        preloadTimeoutRef.current = setTimeout(() => {
            setLoadedSections(prevLoaded => {
                if (prevLoaded.size >= totalSections * 0.7) {
                    return prevLoaded; // Ya están la mayoría cargadas
                }
                
                const allLoaded = new Set(prevLoaded);
                for (let i = 0; i < totalSections; i++) {
                    allLoaded.add(i);
                }
                return allLoaded;
            });
        }, 2000);

        return () => {
            if (preloadTimeoutRef.current) {
                clearTimeout(preloadTimeoutRef.current);
            }
        };
    }, [activeSection, totalSections, preloadAdjacent]); 

    return loadedSections;
};