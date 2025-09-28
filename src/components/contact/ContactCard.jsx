import { Box, Card, CardContent, Chip, Typography, Zoom } from "@mui/material";
import PropTypes from "prop-types";
import { useState } from "react";

const ContactCard = ({contact, index}) => {
    const [hoveredCard, setHoveredCard] = useState(null);

  const handleContactClick = (contact) => {
    window.open(contact.link, '_blank');
  };

    return (
        <Zoom in={true} style={{ transitionDelay: `${index * 100}ms` }}>
            <Card 
                sx={{ 
                    height: '100%',
                    background: `linear-gradient(145deg, #1a1a1a 0%, #2d2d2d 100%)`,
                    border: `1px solid ${contact.color}40`,
                    borderRadius: 3,
                    transition: 'all 0.3s ease',
                    transform: hoveredCard === contact.id ? 'translateY(-8px)' : 'none',
                    boxShadow: hoveredCard === contact.id ? `0 15px 35px rgba(${parseInt(contact.color.slice(1, 3), 16)}, ${parseInt(contact.color.slice(3, 5), 16)}, ${parseInt(contact.color.slice(5, 7), 16)}, 0.3)` : '0 5px 15px rgba(0,0,0,0.3)',
                    cursor: 'pointer',
                    overflow: 'hidden',
                    position: 'relative',
                    '&:before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: 4,
                        background: `linear-gradient(90deg, ${contact.color}, ${contact.color}80)`,
                        transform: 'scaleX(0)',
                        transition: 'transform 0.3s ease',
                        transformOrigin: 'left'
                    },
                    '&:hover:before': {
                        transform: 'scaleX(1)'
                    }
                }}
                onMouseEnter={() => setHoveredCard(contact.id)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => handleContactClick(contact)}
            >
            <CardContent sx={{ p: 4, 
                    textAlign: 'center', 
                    color: '#fff', 
                    height: '100%', 
                    display: 'flex', 
                    flexDirection: 'column',
                    alignItems: 'center',}}
            >
                {/* Icono con fondo circular */}
                <Box 
                    sx={{
                        display: 'inline-flex',
                        justifyContent: 'center',
                        p: 2,
                        borderRadius: '50%',
                        backgroundColor: `${contact.color}20`,
                        color: contact.color,
                        mb: 3,
                        transition: 'all 0.3s ease',
                        transform: hoveredCard === contact.id ? 'scale(1.1) rotate(5deg)' : 'none',
                        width: 'min-content'
                    }}
                >
                    {contact.icon}
                </Box>
    
                {/* Título */}
                <Typography 
                    variant="h5" 
                    component="h3" 
                    sx={{ 
                        color: contact.color,
                        fontWeight: 'bold',
                        mb: 1
                    }}
                >
                {contact.title}
                </Typography>
    
                {/* Handle/Usuario */}
                <Chip
                    label={contact.handle}
                    size="small"
                    sx={{
                        backgroundColor: `${contact.color}20`,
                        color: contact.color,
                        border: `1px solid ${contact.color}40`,
                        mb: 2,
                        fontWeight: 'bold'
                    }}
                />
    
                {/* Descripción principal */}
                <Typography 
                variant="h6" 
                sx={{ 
                    mb: 2,
                    opacity: 0.9
                }}
                >
                {contact.desc}
                </Typography>
    
                {/* Información adicional */}
                <Box sx={{ mt: 'auto', pt: 2 }}>
                <Typography variant="body2" sx={{ opacity: 0.7, mb: 0.5 }}>
                    {contact.followers}
                </Typography>
                <Typography variant="caption" sx={{ opacity: 0.5 }}>
                    {contact.responseTime}
                </Typography>
                </Box>
    
                {/* Badge de acción */}
                <Box
                    sx={{
                        position: 'absolute',
                        top: 16,
                        right: 16,
                        backgroundColor: `${contact.color}20`,
                        color: contact.color,
                        borderRadius: 2,
                        px: 1,
                        py: 0.5,
                        fontSize: '0.7rem',
                        fontWeight: 'bold',
                        opacity: hoveredCard === contact.id ? 1 : 0.7,
                        transition: 'all 0.3s ease'
                    }}
                >
                    Click para contactar
                </Box>
            </CardContent>
            </Card>
        </Zoom>
    );
};

ContactCard.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,
    icon: PropTypes.element.isRequired,
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    handle: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    followers: PropTypes.string.isRequired,
    responseTime: PropTypes.string.isRequired
  }).isRequired,
  index: PropTypes.number.isRequired
};

export default ContactCard;