import { Box, Button, Chip, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Typography } from "@mui/material";
import React from "react";
import { ORANGE_COLOR } from "../../constants/colors";
import { Close, WhatsApp } from "../../icons/icons";;
import { SECCIONES } from "../../data/navbar";
import PropTypes from "prop-types";

const MobileMenu = React.memo(function DesktopMenu({mobileMenuOpen, 
  activeSection, 
  scrollToSection, 
  handleMobileMenuToggle, 
  handleJoinNow,
  handleWhatsAppClick}) {

    return (
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
                        <Close />
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
    );
});

MobileMenu.propTypes = {
    mobileMenuOpen : PropTypes.bool,
    activeSection : PropTypes.number, 
    scrollToSection : PropTypes.func, 
    handleMobileMenuToggle : PropTypes.func,
    handleJoinNow : PropTypes.func,
    handleWhatsAppClick : PropTypes.func,
};

export default MobileMenu;