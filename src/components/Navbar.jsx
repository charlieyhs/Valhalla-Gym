import React, { useState, useRef, useCallback, useMemo } from 'react';
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
  DialogActions
} from "@mui/material";
import { 
  FitnessCenter, 
  Menu as MenuIcon, 
  Close as CloseIcon
} from "@mui/icons-material";
import { BLACK_COLOR, ORANGE_COLOR } from '../constants/colors';
import useScrollDetection from '../hooks/UseScrollDetection';
import ElevationScroll from './ElevationScroll';
import ScrollToTopButton from './ScrollToTopButton';
import SectionWrapper from './SectionWrapper';
import PropTypes from 'prop-types';
import '../css/nav-bar.css'

const MENU_ITEMS = [
  { 
    id: 'hero', 
    label: 'Inicio', 
    href: '#hero',
    component: null
  },
  { 
    id: 'clases', 
    label: 'Clases', 
    href: '#clases',
    component: null
  },
  { 
    id: 'entrenadores', 
    label: 'Entrenadores', 
    href: '#entrenadores',
    component: null
  },
  { 
    id: 'ubicaciones', 
    label: 'Ubicaciones', 
    href: '#ubicaciones',
    component: null
  },
  {
    id: 'beneficios',
    label: 'Beneficios',
    href: '#beneficios',
    component: null
  },
  { 
    id: 'precios', 
    label: 'Precios', 
    href: '#precios',
    component: null
  },
  { 
    id: 'contactos', 
    label: 'Contacto', 
    href: '#contacto',
    component: null
  },
];

const NAVBAR_HEIGHT = 70;

const Navbar = ({ sectionComponents = {} }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const sectionRefs = useRef([]);
  
  if (sectionRefs.current.length !== MENU_ITEMS.length) {
    sectionRefs.current = Array(MENU_ITEMS.length).fill().map((_, i) => sectionRefs.current[i] || React.createRef());
  }

  const activeSection = useScrollDetection(sectionRefs);

  
  const scrollToSection = useCallback((index) => {
    const targetRef = sectionRefs.current[index];
    if (targetRef?.current) {
        const yOffset = -NAVBAR_HEIGHT;
        const element = targetRef.current;
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        
        window.scrollTo({
        top: y,
        behavior: 'smooth'
        });
        
        // Cerrar menú móvil si está abierto
        setMobileMenuOpen(false);
    }
  }, []);

  const handleMobileMenuToggle = useCallback(() => {
    setMobileMenuOpen(prev => !prev);
  }, []);

  const [joinNow, setJoinNow] = useState(false);

    const handleJoinNow = useCallback(() => {
        setJoinNow(true);
    }, []);

    const handleCloseJoinNow = () => {
        setJoinNow(false);
    };


  // Renderizado del menú para desktop
  const DesktopMenu = useMemo(() => (
    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
      {MENU_ITEMS.map((item, index) => (
        <Button 
          key={item.id}
          onClick={() => scrollToSection(index)}
          className={`nav-item ${activeSection === index ? "active" : ""}`}
          aria-label={`Ir a sección ${item.label}`}
        >
          {item.label}
        </Button>
      ))}
    </Box>
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
          width: 250,
          backgroundColor: BLACK_COLOR,
          color: 'white'
        }
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 1 }}>
        <IconButton onClick={handleMobileMenuToggle} sx={{ color: 'white' }}>
          <CloseIcon />
        </IconButton>
      </Box>
      <List>
        {MENU_ITEMS.map((item, index) => (
          <ListItem key={item.id} disablePadding>
            <ListItemButton 
              onClick={() => scrollToSection(index)}
              sx={{
                backgroundColor: activeSection === index ? 'rgba(255, 87, 34, 0.1)' : 'transparent',
                borderLeft: activeSection === index ? `3px solid ${ORANGE_COLOR}` : 'none'
              }}
            >
              <ListItemText 
                primary={item.label}
                sx={{ 
                  color: activeSection === index ? ORANGE_COLOR : 'white' 
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem sx={{ pt: 2 }}>
          <Button 
            fullWidth
            variant="contained"
            onClick={handleJoinNow}
            sx={{
              backgroundColor: ORANGE_COLOR,
              '&:hover': {
                backgroundColor: '#e55a2b'
              }
            }}
          >
            Unirse ahora
          </Button>
        </ListItem>
      </List>
    </Drawer>
  ), [mobileMenuOpen, activeSection, scrollToSection, handleMobileMenuToggle, handleJoinNow]);

  return (
    <>
        <CssBaseline />
        <ElevationScroll>
            <AppBar position="sticky">
              <Toolbar className="navbar-toolbar">
                  {/* Logo */}
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <FitnessCenter sx={{ fontSize: 40, mr: 1, color: ORANGE_COLOR }} />
                    <Typography 
                        variant="h6" 
                        sx={{ fontWeight: "bold", color: 'white', userSelect: 'none' }}
                    >
                        Valhalla
                    </Typography>
                  </Box>
                  
                  {/* Menú Desktop */}
                  {DesktopMenu}

                  {/* Botón de registro Desktop */}
                  <Button 
                      variant="contained"
                      onClick={handleJoinNow}
                      sx={{
                          display: { xs: 'none', md: 'block' },
                          textTransform: 'capitalize',
                          backgroundColor: ORANGE_COLOR,
                          px: 3,
                          '&:hover': {
                          backgroundColor: '#e55a2b',
                          transform: 'translateY(-1px)',
                          boxShadow: 3
                          },
                          transition: 'all 0.2s ease'
                      }}
                  >
                      Unirse ahora
                  </Button>

                  {/* Botón menú móvil */}
                  <IconButton
                      onClick={handleMobileMenuToggle}
                      sx={{ 
                          display: { xs: 'block', md: 'none' }, 
                          color: 'white' 
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
            {MENU_ITEMS.map((item, index) => {
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
        <Dialog open={joinNow} onClose={handleCloseJoinNow}>
            <DialogTitle>Información</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Ya te has unido
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleCloseJoinNow} autoFocus>
                    Cerrar
                </Button>
            </DialogActions>
        </Dialog>
    </>
  );
};

Navbar.propTypes = {
    sectionComponents : PropTypes.sectionComponents
};

export default Navbar;