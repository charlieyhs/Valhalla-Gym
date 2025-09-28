import {
    Celebration,
    FitnessCenter,
    Menu as MenuIcon,
    Phone,
    Star,
    WhatsApp
} from "../../icons/icons";;
import {
    AppBar,
    Box,
    Button,
    Chip,
    CssBaseline,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Fade,
    IconButton,
    Slide,
    Toolbar,
    Tooltip,
    Typography
} from "@mui/material";
import PropTypes from 'prop-types';
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { ORANGE_COLOR } from '../../constants/colors';
import '../../css/nav-bar.css';
import { SECCIONES } from '../../data/navbar';
import useScrollDetection from '../../hooks/UseScrollDetection';
import DesktopMenu from '../navbar/DesktopMenu';
import ElevationScroll from '../navbar/ElevationScroll';
import MobileMenu from '../navbar/MobileMenu';
import SectionWrapper from '../navbar/SectionWrapper';
import ScrollToTopButton from '../ScrollToTopButton';
import { useSmartPreloading } from "../../hooks/useSmartPreloading";

const NAVBAR_HEIGHT = 70;

const Navbar = ({ sectionComponents = {} }) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [joinNowDialog, setJoinNowDialog] = useState(false);
    
    const [pendingSection, setPendingSection] = useState(null);
    const scrollTimeoutRef = useRef(null);

    const sectionRefs = useRef(SECCIONES.map(() => React.createRef()));

    const detectedActiveSection = useScrollDetection(sectionRefs, {
        threshold: 0.25,
        scrollDelay: 16
    });

    const activeSection = pendingSection !== null ? pendingSection : detectedActiveSection;

    const loadedSections = useSmartPreloading(activeSection, SECCIONES.length, {
        preloadAdjacent: 2,
        immediateSections: [0]
    });

    const scrollToSection = useCallback((index) => {
        
        
        
        setPendingSection(index);
        
        // Limpiar timeout anterior si existe
        if (scrollTimeoutRef.current) {
            clearTimeout(scrollTimeoutRef.current);
        }
        
        const targetRef = sectionRefs.current[index];
        if (targetRef?.current) {
            const yOffset = -NAVBAR_HEIGHT + 10;
            const element = targetRef.current;
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
            
            window.scrollTo({
                top: y,
                behavior: 'smooth'
            });
            
            
            scrollTimeoutRef.current = setTimeout(() => {
                setPendingSection(null);
            }, 1000); // Esperar 1 segundo para que termine el scroll
            
            setMobileMenuOpen(false);
        }
    }, []);

    
    useEffect(() => {
        if (pendingSection === null && scrollTimeoutRef.current) {
            clearTimeout(scrollTimeoutRef.current);
            scrollTimeoutRef.current = null;
        }
    }, [pendingSection]);

    const handleMobileMenuToggle = useCallback(() => {
        setMobileMenuOpen(prev => !prev);
    }, []);

    const handleJoinNow = useCallback(() => {
        setJoinNowDialog(true);
    }, []);

    const handleCloseJoinNow = () => {
        setJoinNowDialog(false);
    };

    const handleWhatsAppClick = () => {
        window.open('https://wa.me/571234567890?text=Hola!%20Me%20interesa%20unirme%20a%20Valhalla%20Gym', '_blank');
    };

    const renderedSections = useMemo(() => 
        SECCIONES.map((item, index) => {
            const SectionComponent = sectionComponents[item.id];
            const isPriority = loadedSections.has(index);
            
            if (!SectionComponent) {
                console.warn(`Component for section ${item.id} not found`);
                return null;
            }
            
            return (
                <SectionWrapper
                    key={item.id}
                    id={item.id}
                    index={index}
                    ref={sectionRefs.current[index]}
                    priority={isPriority}
                >
                    <SectionComponent />
                </SectionWrapper>
            );
        }).filter(Boolean),
    [sectionComponents, loadedSections]);

    return (
    <>
        <CssBaseline />
        <ElevationScroll>
            <AppBar position="sticky">
                <Toolbar className='navbar-toolbar' sx={{py: 1,}}>
                    <Slide direction="right" in={true} timeout={1000}>
                        <Box sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                            <Box
                                sx={{
                                    position: 'relative',
                                    display: 'flex',
                                    alignItems: 'center',
                                    '&:hover .logo-icon': {
                                        transform: 'rotate(15deg) scale(1.1)'
                                    }
                                }}
                            >
                                <FitnessCenter 
                                    className="logo-icon"
                                    sx={{ 
                                        fontSize: 42, 
                                        mr: 1, 
                                        color: ORANGE_COLOR,
                                        transition: 'all 0.3s ease',
                                        filter: 'drop-shadow(0 0 10px rgba(255, 77, 48, 0.5))'
                                    }}
                                />
                                <Typography 
                                    variant="h5" 
                                    sx={{ 
                                        fontWeight: "bold", 
                                        background: `linear-gradient(45deg, ${ORANGE_COLOR}, #ff6b35)`,
                                        backgroundClip: 'text',
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                        userSelect: 'none',
                                        letterSpacing: '0.05em'
                                    }}
                                >
                                    VALHALLA
                                </Typography>
                                <Chip
                                    label="GYM"
                                    size="small"
                                    sx={{
                                        ml: 1,
                                        backgroundColor: ORANGE_COLOR,
                                        color: 'white',
                                        fontWeight: 'bold',
                                        fontSize: '0.7rem',
                                        height: 20
                                    }}
                                />
                            </Box>
                        </Box>
                    </Slide>
                
                    <Box sx={{ display: 'flex', justifyContent: 'center', flexGrow: 1 }}>
                        {/*Renderizado del menú para desktop*/}
                        <DesktopMenu 
                            activeSection={activeSection} 
                            scrollToSection={scrollToSection} 
                        />
                    </Box>

                    <Fade in={true} timeout={1000}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, ml: 'auto' }}>
                        {/* Botón WhatsApp */}
                        <Tooltip title="Contactar por WhatsApp">
                            <IconButton
                                onClick={handleWhatsAppClick}
                                sx={{
                                    backgroundColor: '#25D36620',
                                    color: '#25D366',
                                    border: '1px solid #25D36640',
                                    '&:hover': {
                                        backgroundColor: '#25D36630',
                                        transform: 'scale(1.05)'
                                    },
                                    transition: 'all 0.2s ease'
                                }}
                            >
                                <WhatsApp />
                            </IconButton>
                        </Tooltip>

                        {/* Botón de registro Desktop */}
                        <Button 
                            variant="contained"
                            onClick={handleJoinNow}
                            startIcon={<Star />}
                            sx={{
                            display: { xs: 'none', lg: 'flex' },
                            textTransform: 'capitalize',
                            background: `linear-gradient(45deg, ${ORANGE_COLOR}, #ff6b35)`,
                            px: 3,
                            py: 1,
                            fontWeight: 'bold',
                            borderRadius: 2,
                            boxShadow: `0 4px 15px ${ORANGE_COLOR}40`,
                            '&:hover': {
                                transform: 'translateY(-2px)',
                                boxShadow: `0 6px 20px ${ORANGE_COLOR}60`,
                                background: `linear-gradient(45deg, #ff6b35, ${ORANGE_COLOR})`
                            },
                            transition: 'all 0.3s ease'
                            }}
                        >
                            Unirse ahora
                        </Button>
                        </Box>
                    </Fade>

                    <IconButton
                        onClick={handleMobileMenuToggle}
                        sx={{ 
                            display: { xs: 'flex', md: 'none' }, 
                            color: 'white',
                            backgroundColor: 'rgba(255,255,255,0.1)',
                            ml: 1,
                            '&:hover': { backgroundColor: ORANGE_COLOR }
                        }}
                        aria-label="Abrir menú de navegación"
                    >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </ElevationScroll>

        {/* Menú móvil */}
        <MobileMenu 
            mobileMenuOpen={mobileMenuOpen}
            activeSection={activeSection}
            scrollToSection={scrollToSection}
            handleMobileMenuToggle={handleMobileMenuToggle}
            handleJoinNow={handleJoinNow}
            handleWhatsAppClick={handleWhatsAppClick} 
        />
        
        {/* Botón scroll to top */}
        <ScrollToTopButton />

        {/* Secciones */}
        <Box>{renderedSections}</Box>

        {/* Dialog de unirse */}
        <Dialog 
            open={joinNowDialog} 
            onClose={handleCloseJoinNow}
            slotProps={{
                paper: {
                    sx: {
                        background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
                        color: 'white',
                        borderRadius: 3
                    }
                }
            }}
        >
            <DialogTitle sx={{ color: ORANGE_COLOR, fontWeight: 'bold' }}>
                <Celebration /> ¡Únete a Valhalla Gym!
            </DialogTitle>

            <DialogContent>
                <DialogContentText sx={{ color: 'white', mb: 2 }}>
                    Estás a un paso de comenzar tu transformación. Elige cómo quieres continuar:
                </DialogContentText>
                
                <Box sx={{ display: 'flex', gap: 2, flexDirection: 'column' }}>
                    <Button
                        variant="contained"
                        startIcon={<WhatsApp />}
                        onClick={handleWhatsAppClick}
                        sx={{
                        backgroundColor: '#25D366',
                        '&:hover': { backgroundColor: '#20b858' }
                        }}
                    >
                        Contactar por WhatsApp
                    </Button>
                    <Button
                        variant="outlined"
                        startIcon={<Phone />}
                        sx={{ borderColor: ORANGE_COLOR, color: ORANGE_COLOR }}
                    >
                        Llamar ahora
                    </Button>
                </Box>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleCloseJoinNow} sx={{ color: 'white' }}>
                    Cancelar
                </Button>
            </DialogActions>
        </Dialog>
    </>
    );
};

Navbar.propTypes = {
    sectionComponents: PropTypes.objectOf(PropTypes.elementType)
};

export default React.memo(Navbar);