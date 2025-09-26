import React, { useState, useRef, useCallback, useMemo} from 'react';
import { 
  AppBar, 
  Box, 
  Button, 
  Toolbar, 
  Typography,
  CssBaseline,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Chip,
  Fade,
  Slide,
  Tooltip
} from "@mui/material";
import { 
  FitnessCenter, 
  Menu as MenuIcon, 
  Close as CloseIcon,
  WhatsApp,
  Phone,
  Star,
  Celebration,
} from "@mui/icons-material";
import { ORANGE_COLOR } from '../constants/colors';
import useScrollDetection from '../hooks/UseScrollDetection';
import ElevationScroll from './ElevationScroll';
import ScrollToTopButton from './ScrollToTopButton';
import SectionWrapper from './SectionWrapper';
import PropTypes from 'prop-types';
import '../css/nav-bar.css'
import { SECCIONES } from '../constants/navbar';

const NAVBAR_HEIGHT = 70;

const Navbar = ({ sectionComponents = {} }) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [joinNowDialog, setJoinNowDialog] = useState(false);

    const sectionRefs = useRef([]);

    if (sectionRefs.current.length !== SECCIONES.length) {
        sectionRefs.current = Array(SECCIONES.length).fill().map((_, i) => sectionRefs.current[i] || React.createRef());
    }
    const activeSection = useScrollDetection(sectionRefs);


    const scrollToSection = useCallback((index) => {
        const targetRef = sectionRefs.current[index];
        if (targetRef?.current) {
            const yOffset = -NAVBAR_HEIGHT + 10;
            const element = targetRef.current;
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
            
            window.scrollTo({
                top: y,
                behavior: 'smooth'
            });
            
            setMobileMenuOpen(false);
        }
    }, []);

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

    // Renderizado del menú para desktop
    const DesktopMenu = useMemo(() => (
        <Fade in={true} timeout={800}>
            <Box sx={{ 
                display: { xs: 'none', md: 'flex',},
                ml: 10,
                alignItems: 'center',
                gap: 1
            }}>
                {SECCIONES.map((item, index) => (
                    <Box key={item.id} sx={{ position: 'relative' }}>
                        <Button 
                            onClick={() => scrollToSection(index)}
                            className={`nav-item ${activeSection === index ? "active" : ""} ${item.featured ? "featured" : ""}`}
                            aria-label={`Ir a sección ${item.label}`}
                            sx={{
                                minWidth: 'auto',
                                px: 2,
                                position: 'relative',
                                overflow: 'visible'
                            }}
                        >
                            {item.label}
                            {item.badge && (
                                <Chip
                                    label={item.badge}
                                    size="small"
                                    sx={{
                                    position: 'absolute',
                                    top: -8,
                                    right: -5,
                                    backgroundColor: ORANGE_COLOR,
                                    color: 'white',
                                    fontSize: '0.6rem',
                                    height: 16,
                                    '& .MuiChip-label': { px: 1 }
                                    }}
                                />
                            )}
                        </Button>
                    </Box>
                ))}
            </Box>
        </Fade>
    ), [activeSection, scrollToSection]);

    // Renderizado del menú móvil
    const MobileMenu = useMemo(() => (
        <Drawer
            anchor="right"
            open={mobileMenuOpen}
            onClose={handleMobileMenuToggle}
            sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': {
                width: 320,
                backgroundColor: 'rgba(10, 10, 10, 0.95)',
                backdropFilter: 'blur(20px)',
                color: 'white',
                borderLeft: `1px solid ${ORANGE_COLOR}30`
            }
            }}
        >
            <Box sx={{ 
                p: 2, 
                background: `linear-gradient(135deg, ${ORANGE_COLOR}20, transparent)`,
                borderBottom: `1px solid ${ORANGE_COLOR}20`
            }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                    <Typography variant="h6" sx={{ color: ORANGE_COLOR, fontWeight: 'bold' }}>
                    Menú
                    </Typography>
                    <IconButton 
                    onClick={handleMobileMenuToggle} 
                    sx={{ 
                        color: 'white',
                        backgroundColor: 'rgba(255,255,255,0.1)',
                        '&:hover': { backgroundColor: ORANGE_COLOR }
                    }}
                    >
                    <CloseIcon />
                    </IconButton>
                </Box>
                
                {/* Botones rápidos móvil */}
                <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
                    <IconButton 
                    sx={{ 
                        backgroundColor: '#25D366',
                        color: 'white',
                        fontSize: '0.8rem',
                        '&:hover': { backgroundColor: '#20b858' }
                    }}
                    onClick={handleWhatsAppClick}
                    >
                    <WhatsApp />
                    </IconButton>
                    <Button 
                    variant="contained"
                    size="small"
                    onClick={handleJoinNow}
                    sx={{
                        flex: 1,
                        backgroundColor: ORANGE_COLOR,
                        '&:hover': { backgroundColor: '#e55a2b' }
                    }}
                    >
                    Unirse
                    </Button>
                </Box>
            </Box>

            <List sx={{ p: 2 }}>
                {SECCIONES.map((item, index) => (
                    <ListItem key={item.id} disablePadding sx={{ mb: 1 }}>
                        <ListItemButton 
                            onClick={() => scrollToSection(index)}
                            sx={{
                                backgroundColor: activeSection === index ? `${ORANGE_COLOR}20` : 'transparent',
                                border: activeSection === index ? `1px solid ${ORANGE_COLOR}40` : '1px solid transparent',
                                borderRadius: 2,
                                py: 1.5,
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                    backgroundColor: `${ORANGE_COLOR}15`,
                                    transform: 'translateX(4px)'
                                }
                            }}
                        >
                            <ListItemText 
                                primary={item.label}
                                slotProps={{
                                    primary:{
                                        sx:{
                                            fontWeight: activeSection === index ? 'bold' : 'normal',
                                            color: activeSection === index ? `${ORANGE_COLOR}` : 'white',
                                        }
                                    }
                                }}
                            />
                            {item.badge && (
                                <Chip 
                                    label={item.badge} 
                                    size="small" 
                                    sx={{ 
                                        backgroundColor: ORANGE_COLOR,
                                        color: 'white',
                                        fontSize: '0.6rem'
                                    }} 
                                />
                            )}
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>

            {/* Información de contacto móvil */}
            <Box sx={{ p: 2, mt: 'auto', borderTop: `1px solid ${ORANGE_COLOR}20` }}>
                <Typography variant="body2" sx={{ color: ORANGE_COLOR, mb: 1, fontWeight: 'bold' }}>
                    Contacto Rápido
                </Typography>
                <Typography variant="caption" sx={{ color: 'white', opacity: 0.8 }}>
                    Lunes a Domingo: 5AM - 11PM
                </Typography>
            </Box>
        </Drawer>
    ), [mobileMenuOpen, activeSection, scrollToSection, handleMobileMenuToggle, handleJoinNow]);

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
                        {DesktopMenu}
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
        {MobileMenu}
        
        {/* Botón scroll to top */}
        <ScrollToTopButton />

        {/* Secciones */}
        <Box>
            {SECCIONES.map((item, index) => {
                const SectionComponent = sectionComponents[item.id];
                
                return (
                    <SectionWrapper
                        key={item.id} 
                        id={item.id}
                        index={index}
                        title={item.label} 
                        ref={sectionRefs.current[index]}
                        >
                        <SectionComponent /> 
                    </SectionWrapper>
                );
            })}
        </Box>

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
    sectionComponents : PropTypes.object
};

export default Navbar;