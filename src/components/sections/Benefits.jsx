import { 
  Grid, 
  Typography, 
  Box,
  Button,
  Chip,
  Paper,
  Fade,
  Container,
} from "@mui/material";
import {
  Security,
  CheckCircle,
} from "../../icons/icons";;
import { ORANGE_COLOR } from "../../constants/colors";
import { additionalFeatures, benefits } from "../../data/benefits";
import BenefitCard from "../benefits/BenefitCard";


const Benefits = () => {
  return (
    <Container maxWidth="xl">
      <Box sx={{ textAlign: 'center', mb: 8 }}>
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
          ¿Por qué elegir Valhalla?
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
          Entrena en un espacio donde encontrarás motivación, apoyo y una 
          comunidad que comparte tus mismas metas de salud y bienestar
        </Typography>

        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, 
            flexWrap: 'wrap', mb: 4 }}>
          {['Todos', 'Entrenamiento', 'Bienestar', 'Comunidad', 'Seguridad'].map((filter) => (
            <Chip
              key={filter}
              label={filter}
              clickable
              sx={{
                backgroundColor: filter === 'Todos' ? ORANGE_COLOR : 'rgba(255, 255, 255, 0.1)',
                color: '#fff',
                '&:hover': {
                  backgroundColor: filter === 'Todos' ? '#e55a2b' : `${ORANGE_COLOR}30`
                }
              }}
            />
          ))}
        </Box>
      </Box>

      {/* Grid de beneficios principales */}
      <Grid container spacing={4} sx={{ mb: 8 }}>
        {benefits.map((benefit, index) => (
          <Grid columns={2} 
            sx={{width:'100%'}} 
            size={{xs:12,md:6, lg:4,}}
            key={benefit.id}>
            <BenefitCard benefit={benefit} index={index} />
          </Grid>
        ))}
      </Grid>

      {/* Sección de características adicionales */}
      <Paper 
        sx={{ 
          p: 4, 
          mb: 6,
          background: 'linear-gradient(145deg, #2d2d2d 0%, #1a1a1a 100%)',
          border: `1px solid ${ORANGE_COLOR}40`,
          borderRadius: 3
        }}
      >
        <Typography 
          variant="h4" 
          sx={{ 
            color: ORANGE_COLOR, 
            fontWeight: 'bold', 
            textAlign: 'center', 
            mb: 4 
          }}
        >
          Instalaciones y Servicios Premium
        </Typography>
        
        <Grid container spacing={3}>
          {additionalFeatures.map((feature, index) => (
            <Grid size={{xs:12, md:3, sm: 4,}} key={feature.id}>
              <Fade in={true} style={{ transitionDelay: `${index * 50}ms` }}>
                <Box 
                  sx={{ 
                    textAlign: 'center',
                    p: 2,
                    borderRadius: 2,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      transform: 'translateY(-4px)'
                    }
                  }}
                >
                  <Box
                    sx={{
                      display: 'inline-flex',
                      p: 2,
                      borderRadius: '50%',
                      backgroundColor: `${ORANGE_COLOR}20`,
                      color: ORANGE_COLOR,
                      mb: 1
                    }}
                  >
                    {feature.icon}
                  </Box>
                  <Typography variant="subtitle2" sx={{ color: '#fff', fontWeight: 'bold', mb: 0.5 }}>
                    {feature.title}
                  </Typography>
                  <Typography variant="caption" sx={{ color: '#fff', opacity: 0.7 }}>
                    {feature.desc}
                  </Typography>
                </Box>
              </Fade>
            </Grid>
          ))}
        </Grid>
      </Paper>

      {/* Call to action */}
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Typography variant="h5" sx={{ color: '#fff', mb: 3 }}>
          ¿Listo para experimentar todos estos beneficios?
        </Typography>
        <Button
          variant="contained"
          size="large"
          sx={{
            backgroundColor: ORANGE_COLOR,
            px: 4,
            py: 1.5,
            fontSize: '1.1rem',
            fontWeight: 'bold',
            borderRadius: 3,
            textTransform: 'none',
            '&:hover': {
              backgroundColor: '#e55a2b',
              transform: 'translateY(-2px)',
              boxShadow: 6
            }
          }}
        >
          Únete a Valhalla Hoy
        </Button>
      </Box>

      {/* Estadísticas generales */}
      <Paper 
        sx={{ 
          p: 4,
          background: `linear-gradient(135deg, ${ORANGE_COLOR}15, rgba(255, 255, 255, 0.05))`,
          border: `1px solid ${ORANGE_COLOR}40`,
          borderRadius: 3,
          mt: 6
        }}
      >
        <Typography 
          variant="h5" 
          sx={{ 
            color: ORANGE_COLOR, 
            fontWeight: 'bold', 
            textAlign: 'center', 
            mb: 4 
          }}
        >
          Resultados que hablan por sí solos
        </Typography>
        
        <Grid container spacing={4} sx={{ textAlign: 'center' }}>
          <Grid size={{xs:6, md:3,}}>
            <Box>
              <Typography variant="h3" sx={{ color: ORANGE_COLOR, fontWeight: 'bold', mb: 1 }}>
                2,500+
              </Typography>
              <Typography variant="body1" sx={{ color: '#fff', opacity: 0.9 }}>
                Miembros activos
              </Typography>
            </Box>
          </Grid>
          
          <Grid size={{xs:6, md:3,}}>
            <Box>
              <Typography variant="h3" sx={{ color: '#4CAF50', fontWeight: 'bold', mb: 1 }}>
                96%
              </Typography>
              <Typography variant="body1" sx={{ color: '#fff', opacity: 0.9 }}>
                Satisfacción general
              </Typography>
            </Box>
          </Grid>
          
          <Grid size={{xs:6, md:3,}}>
            <Box>
              <Typography variant="h3" sx={{ color: '#2196F3', fontWeight: 'bold', mb: 1 }}>
                15K+
              </Typography>
              <Typography variant="body1" sx={{ color: '#fff', opacity: 0.9 }}>
                Horas de entrenamiento/mes
              </Typography>
            </Box>
          </Grid>
          
          <Grid size={{xs:6, md:3,}}>
            <Box>
              <Typography variant="h3" sx={{ color: '#E91E63', fontWeight: 'bold', mb: 1 }}>
                89%
              </Typography>
              <Typography variant="body1" sx={{ color: '#fff', opacity: 0.9 }}>
                Logran sus objetivos
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Paper>

      {/* Sección de garantía */}
      <Box 
        sx={{ 
          textAlign: 'center', 
          mt: 6, 
          p: 4,
          background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02))',
          borderRadius: 3,
          border: '1px solid rgba(255, 255, 255, 0.1)'
        }}
      >
        <Box
          sx={{
            display: 'inline-flex',
            p: 3,
            borderRadius: '50%',
            backgroundColor: `${ORANGE_COLOR}20`,
            color: ORANGE_COLOR,
            mb: 3
          }}
        >
          <Security sx={{ fontSize: 48 }} />
        </Box>
        
        <Typography variant="h5" sx={{ color: '#fff', fontWeight: 'bold', mb: 2 }}>
          Garantía de Satisfacción 100%
        </Typography>
        
        <Typography variant="body1" sx={{ color: '#fff', opacity: 0.9, mb: 3, maxWidth: 600, mx: 'auto' }}>
          Estamos tan seguros de que amarás tu experiencia en Valhalla, que ofrecemos una garantía completa. 
          Si no estás completamente satisfecho en los primeros 30 días, te devolvemos tu dinero.
        </Typography>
        
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3, flexWrap: 'wrap' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <CheckCircle sx={{ color: '#4CAF50' }} />
            <Typography variant="body2" sx={{ color: '#fff' }}>
              30 días de garantía
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <CheckCircle sx={{ color: '#4CAF50' }} />
            <Typography variant="body2" sx={{ color: '#fff' }}>
              Sin compromisos a largo plazo
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <CheckCircle sx={{ color: '#4CAF50' }} />
            <Typography variant="body2" sx={{ color: '#fff' }}>
              Cancelación fácil
            </Typography>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Benefits;