import { Phone, Schedule, WhatsApp } from "@mui/icons-material";
import {
  Box,
  Button,
  Chip,
  Container,
  Grid,
  Paper,
  Typography
} from "@mui/material";
import { ORANGE_COLOR } from "../../constants/colors";
import { contacts, teamMembers } from "../../data/Contact";
import ContactCard from "../contact/ContactCard";
import TeamMemberCard from "../contact/TeamMemberCard";
import OpeningHours from "../contact/OpeningHours";

export default function Contact() {
  return (
    <Container maxWidth="xl" sx={{ py: 8 }}>
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
            <Grid size={{xs:12, md:4,}} key={member.id}>
              <TeamMemberCard member={member} index={index} />
            </Grid>
          ))}
        </Grid>
      </Paper>

      {/* Información adicional */}
      <OpeningHours />

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