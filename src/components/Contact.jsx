import { 
  Grid, 
  Card, 
  CardContent, 
  Typography, 
  Box, 
  Container,
  Button,
  Chip,
  Zoom,
  Paper,
  Avatar,
  IconButton,
  Tooltip
} from "@mui/material";
import { ORANGE_COLOR } from "../constants/colors";
import { Facebook, Instagram, WhatsApp, LocationOn, Email, Phone, Schedule } from "@mui/icons-material";
import { useState } from "react";

const contacts = [
  { 
    id: 1, 
    icon: <Instagram fontSize="large" />, 
    title: "Instagram", 
    desc: "@valhalla_gym", 
    handle: "@valhalla_gym",
    color: "#E4405F",
    link: "https://instagram.com/valhalla_gym",
    followers: "2.5K seguidores",
    responseTime: "Respuesta en 2h"
  },
  { 
    id: 2, 
    icon: <Facebook fontSize="large" />, 
    title: "Facebook", 
    desc: "Valhalla Gym Oficial", 
    handle: "/ValhallaGymOficial",
    color: "#1877F2",
    link: "https://facebook.com/ValhallaGymOficial",
    followers: "3.2K seguidores",
    responseTime: "Respuesta en 1h"
  },
  { 
    id: 3, 
    icon: <WhatsApp fontSize="large" />, 
    title: "WhatsApp", 
    desc: "+57 123 456 7890", 
    handle: "+57 123 456 7890",
    color: "#25D366",
    link: "https://wa.me/571234567890",
    followers: "Respuesta inmediata",
    responseTime: "24/7"
  },
  { 
    id: 5, 
    icon: <Email fontSize="large" />, 
    title: "Email", 
    desc: "info@valhallagym.com", 
    handle: "contacto@valhallagym.com",
    color: "#EA4335",
    link: "mailto:info@valhallagym.com",
    followers: "Respuesta en 24h",
    responseTime: "Formal"
  },
  { 
    id: 6, 
    icon: <Phone fontSize="large" />, 
    title: "Teléfono Fijo", 
    desc: "(604) 444 1234", 
    handle: "Línea directa",
    color: "#34A853",
    link: "tel:+57123456789",
    followers: "Atención personalizada",
    responseTime: "6AM - 10PM"
  },
];

const teamMembers = [
  {
    name: "Carlos Martínez",
    role: "Gerente General",
    phone: "+57 123 456 7890",
    email: "carlos@valhallagym.com",
    avatar: "/src/assets/team/carlos.jpg",
    specialty: "Fitness & Nutrición"
  },
  {
    name: "Ana Rodríguez",
    role: "Coordinadora de Membresías",
    phone: "+57 123 456 7890",
    email: "ana@valhallagym.com",
    avatar: "/src/assets/team/ana.jpg",
    specialty: "Atención al Cliente"
  },
  {
    name: "David López",
    role: "Entrenador Principal",
    phone: "+57 123 456 7890",
    email: "david@valhallagym.com",
    avatar: "/src/assets/team/david.jpg",
    specialty: "Entrenamiento Personalizado"
  }
];

export default function Contact() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleContactClick = (contact) => {
    window.open(contact.link, '_blank');
  };

  const ContactCard = ({ contact, index }) => (
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
        <CardContent sx={{ p: 4, textAlign: 'center', color: '#fff', height: '100%', display: 'flex', flexDirection: 'column' }}>
          {/* Icono con fondo circular */}
          <Box
            sx={{
              display: 'inline-flex',
              p: 2,
              borderRadius: '50%',
              backgroundColor: `${contact.color}20`,
              color: contact.color,
              mb: 3,
              transition: 'all 0.3s ease',
              transform: hoveredCard === contact.id ? 'scale(1.1) rotate(5deg)' : 'none'
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

  const TeamMemberCard = ({ member, index }) => (
    <Zoom in={true} style={{ transitionDelay: `${index * 150 + 600}ms` }}>
      <Paper
        sx={{
          p: 3,
          textAlign: 'center',
          background: 'linear-gradient(145deg, #1a1a1a 0%, #2d2d2d 100%)',
          border: `1px solid ${ORANGE_COLOR}40`,
          borderRadius: 3,
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: `0 10px 25px rgba(255, 107, 53, 0.3)`,
            border: `1px solid ${ORANGE_COLOR}`
          }
        }}
      >
        <Avatar
          sx={{ 
            width: 80, 
            height: 80, 
            mx: 'auto', 
            mb: 2,
            bgcolor: ORANGE_COLOR,
            fontSize: '2rem'
          }}
        >
          {member.name.split(' ').map(n => n[0]).join('')}
        </Avatar>
        
        <Typography variant="h6" sx={{ color: ORANGE_COLOR, fontWeight: 'bold', mb: 0.5 }}>
          {member.name}
        </Typography>
        
        <Chip
          label={member.role}
          size="small"
          sx={{
            backgroundColor: `${ORANGE_COLOR}20`,
            color: ORANGE_COLOR,
            mb: 2,
            fontWeight: 'bold'
          }}
        />
        
        <Typography variant="body2" sx={{ color: '#fff', opacity: 0.8, mb: 1 }}>
          {member.specialty}
        </Typography>
        
        <Typography variant="body2" sx={{ color: '#fff', opacity: 0.9, mb: 0.5 }}>
          📞 {member.phone}
        </Typography>
        
        <Typography variant="body2" sx={{ color: '#fff', opacity: 0.9 }}>
          ✉️ {member.email}
        </Typography>
      </Paper>
    </Zoom>
  );

  return (
    <Container maxWidth="xl" sx={{ py: 8 }}>
      {/* Header mejorado */}
      <Box sx={{ textAlign: "center", mb: 8 }}>
        <Typography 
          variant="h3" 
          component="h2" 
          gutterBottom 
          sx={{ 
            color: ORANGE_COLOR,
            fontWeight: 'bold',
            mb: 3,
            background: `linear-gradient(45deg, ${ORANGE_COLOR}, #ff6b35)`,
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}
        >
          Contáctanos
        </Typography>
        
        <Typography 
          variant="h6" 
          sx={{ 
            mb: 3, 
            color: '#fff',
            opacity: 0.9,
            maxWidth: 800,
            mx: 'auto',
            lineHeight: 1.6
          }}
        >
          Estamos aquí para ayudarte a alcanzar tus metas de salud y bienestar. 
          Contáctanos para más información, consultas o para unirte a nuestra comunidad.
        </Typography>

        <Chip
          icon={<Schedule />}
          label="Respuesta rápida garantizada"
          sx={{
            backgroundColor: `${ORANGE_COLOR}20`,
            color: ORANGE_COLOR,
            border: `1px solid ${ORANGE_COLOR}40`,
            fontWeight: 'bold',
            py: 1
          }}
        />
      </Box>

      {/* Grid de contactos principales */}
      <Grid container spacing={3} sx={{ mb: 8 }}>
        {contacts.map((contact, index) => (
          <Grid size={{xs:12, md:4, sm:6,}} key={contact.id}>
            <ContactCard contact={contact} index={index} />
          </Grid>
        ))}
      </Grid>

      {/* Sección de equipo */}
      <Paper sx={{ 
        p: 6, 
        mb: 8,
        background: `linear-gradient(135deg, ${ORANGE_COLOR}15, rgba(255, 255, 255, 0.05))`,
        border: `1px solid ${ORANGE_COLOR}40`,
        borderRadius: 3
      }}>
        <Typography 
          variant="h4" 
          sx={{ 
            color: ORANGE_COLOR, 
            fontWeight: 'bold', 
            textAlign: 'center', 
            mb: 4 
          }}
        >
          Nuestro Equipo de Contacto
        </Typography>
        
        <Typography 
          variant="body1" 
          sx={{ 
            textAlign: 'center', 
            color: '#fff', 
            opacity: 0.9, 
            mb: 6,
            maxWidth: 600,
            mx: 'auto'
          }}
        >
          Personas reales listas para ayudarte en tu journey fitness
        </Typography>

        <Grid container spacing={4}>
          {teamMembers.map((member, index) => (
            <Grid size={{xs:12, md:4,}} key={index}>
              <TeamMemberCard member={member} index={index} />
            </Grid>
          ))}
        </Grid>
      </Paper>

      {/* Información adicional */}
      <Grid container spacing={4} sx={{ mb: 8 }}>
        <Grid size={{xs:12, md:6,}}>
          <Paper sx={{ p: 4, height: '100%', background: 'linear-gradient(145deg, #1a1a1a 0%, #2d2d2d 100%)', borderRadius: 3 }}>
            <Typography variant="h5" sx={{ color: ORANGE_COLOR, fontWeight: 'bold', mb: 3 }}>
              📍 Horarios de Atención
            </Typography>
            
            <Box sx={{ space: 2 }}>
              {[
                { day: 'Lunes - Viernes', time: '5:00 AM - 11:00 PM' },
                { day: 'Sábados', time: '6:00 AM - 10:00 PM' },
                { day: 'Domingos y Festivos', time: '7:00 AM - 9:00 PM' }
              ].map((schedule, index) => (
                <Box key={index} sx={{ display: 'flex', justifyContent: 'space-between', mb: 2, p: 2, backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: 2 }}>
                  <Typography variant="body1" sx={{ color: '#fff', fontWeight: 'bold' }}>
                    {schedule.day}
                  </Typography>
                  <Typography variant="body1" sx={{ color: ORANGE_COLOR }}>
                    {schedule.time}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Paper>
        </Grid>

        <Grid size={{xs:12, md:6,}}>
          <Paper sx={{ p: 4, height: '100%', background: 'linear-gradient(145deg, #1a1a1a 0%, #2d2d2d 100%)', borderRadius: 3 }}>
            <Typography variant="h5" sx={{ color: ORANGE_COLOR, fontWeight: 'bold', mb: 3 }}>
              🚀 ¿Por qué elegirnos?
            </Typography>
            
            <Box sx={{ space: 2 }}>
              {[
                { feature: 'Respuesta en menos de 2 horas', icon: '⏱️' },
                { feature: 'Atención personalizada 24/7', icon: '🌟' },
                { feature: 'Asesoramiento fitness gratuito', icon: '💪' },
                { feature: 'Soporte multicanales', icon: '📞' }
              ].map((item, index) => (
                <Box key={index} sx={{ display: 'flex', alignItems: 'center', mb: 2, p: 2, backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: 2 }}>
                  <Typography variant="h6" sx={{ mr: 2, color: ORANGE_COLOR }}>
                    {item.icon}
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#fff' }}>
                    {item.feature}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Paper>
        </Grid>
      </Grid>

      {/* Call to Action final */}
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Typography variant="h4" sx={{ color: '#fff', mb: 2, fontWeight: 'bold' }}>
          ¿Listo para comenzar tu transformación?
        </Typography>
        
        <Typography variant="body1" sx={{ color: '#fff', opacity: 0.8, mb: 4, maxWidth: 600, mx: 'auto' }}>
          Únete a más de 2,500 miembros que ya están viviendo su mejor versión. 
          Contáctanos hoy mismo y recibe tu primera clase gratuita.
        </Typography>
        
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap' }}>
          <Button
            variant="contained"
            size="large"
            startIcon={<WhatsApp />}
            onClick={() => window.open('https://wa.me/571234567890?text=Hola!%20Me%20interesa%20información%20sobre%20Valhalla%20Gym')}
            sx={{
              backgroundColor: '#25D366',
              px: 4,
              py: 1.5,
              fontSize: '1rem',
              fontWeight: 'bold',
              borderRadius: 3,
              textTransform: 'none',
              '&:hover': {
                backgroundColor: '#20b858',
                transform: 'translateY(-2px)',
                boxShadow: 6
              }
            }}
          >
            Contactar por WhatsApp
          </Button>
          
          <Button
            variant="outlined"
            size="large"
            startIcon={<Phone />}
            sx={{
              borderColor: ORANGE_COLOR,
              color: ORANGE_COLOR,
              px: 4,
              py: 1.5,
              fontSize: '1rem',
              fontWeight: 'bold',
              borderRadius: 3,
              textTransform: 'none',
              '&:hover': {
                backgroundColor: `${ORANGE_COLOR}20`,
                borderColor: ORANGE_COLOR,
                transform: 'translateY(-2px)'
              }
            }}
            onClick={() => window.open('tel:+57123456789')}
          >
            Llamar ahora
          </Button>
        </Box>
        
        <Typography variant="caption" sx={{ color: '#fff', opacity: 0.6, mt: 3, display: 'block' }}>
          ⚡ Respuesta inmediata garantizada
        </Typography>
      </Box>
    </Container>
  );
}