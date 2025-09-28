import { Box, Button, Chip, Fade } from "@mui/material";
import { SECCIONES } from "../../data/navbar";
import React from "react";
import { ORANGE_COLOR } from "../../constants/colors";
import PropTypes from "prop-types";

const DesktopMenu = React.memo(function DesktopMenu({activeSection, scrollToSection}) {
    return (
        <Fade in={true} timeout={500}>
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
    );
});

DesktopMenu.propTypes = {
    activeSection: PropTypes.number,
    scrollToSection: PropTypes.func
};

export default DesktopMenu;