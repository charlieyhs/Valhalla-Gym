import {
  CalendarMonth,
  CompareArrows,
  CreditCard,
  Group,
  LocalFireDepartment,
  LocalOffer,
  Savings,
  Schedule,
  Security,
  Star,
  ThumbUp,
  WhatsApp
} from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Card,
  Chip,
  Container,
  FormControlLabel,
  Grid,
  Paper,
  Switch,
  Typography
} from "@mui/material";
import { ORANGE_COLOR } from "../constants/colors";
import { descuentosEspeciales, planes, testimonios } from "../constants/Prices";
import '../css/prices.css';

import PlanCard from "./PlanCard";
import { useState } from "react";

const Prices = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <Container maxWidth="xl">
      {/* Header mejorado */}
      <Box sx={{ textAlign: 'center', mb: 6 }}>
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
          Planes y Precios
        </Typography>
        
        <Typography 
          variant="h6" 
          sx={{ 
            mb: 3, 
            color: '#fff',
            opacity: 0.9,
            maxWidth: 600,
            mx: 'auto'
          }}
        >
          Elige el plan que mejor se adapte a tus necesidades y objetivos
        </Typography>

        {/* Toggle anual/mensual */}
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 2, mb: 4 }}>
          <Typography variant="body1" sx={{ color: isAnnual ? '#fff' : ORANGE_COLOR, opacity: isAnnual ? 0.7 : 1 }}>
            Mensual
          </Typography>
          <FormControlLabel
            control={
              <Switch
                checked={isAnnual}
                onChange={(e) => setIsAnnual(e.target.checked)}
                sx={{
                  '& .MuiSwitch-switchBase.Mui-checked': {
                    color: ORANGE_COLOR,
                  },
                  '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                    backgroundColor: ORANGE_COLOR,
                  },
                }}
              />
            }
            label=""
          />
          <Typography variant="body1" sx={{ color: isAnnual ? ORANGE_COLOR : '#fff', opacity: isAnnual ? 1 : 0.7 }}>
            Anual
          </Typography>
          {isAnnual && (
            <Chip
              label="Hasta 25% OFF"
              size="small"
              sx={{
                backgroundColor: '#4CAF50',
                color: '#fff',
                fontWeight: 'bold',
                animation: 'pulse 2s infinite'
              }}
            />
          )}
        </Box>
      </Box>

      {/* Grid de planes */}
      <Grid container spacing={4} justifyContent="center" sx={{ mb: 8 }}>
        {planes.map((plan, index) => (
          <Grid size={{xs:12, md:6, lg:4,}} key={plan.id}>
            <PlanCard plan={plan} index={index} />
          </Grid>
        ))}
      </Grid>

      {/* Comparación rápida */}
      <Paper sx={{ 
        p: 4, 
        mb: 6,
        background: 'linear-gradient(145deg, #2d2d2d 0%, #1a1a1a 100%)',
        border: `1px solid ${ORANGE_COLOR}40`,
        borderRadius: 3
      }}>
        <Typography 
          variant="h5" 
          sx={{ 
            color: ORANGE_COLOR, 
            fontWeight: 'bold', 
            textAlign: 'center', 
            mb: 4,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 1
          }}
        >
          <CompareArrows />
          Comparación Rápida
        </Typography>
        
        <Grid container spacing={2} sx={{ textAlign: 'center' }}>
          <Grid size={{xs:3,}}>
            <Typography variant="body2" sx={{ color: '#fff', fontWeight: 'bold', mb: 1 }}>
              Características
            </Typography>
          </Grid>
          {planes.map((plan) => (
            <Grid size={{xs:3,}} key={plan.id}>
              <Typography variant="body2" sx={{ color: plan.color, fontWeight: 'bold', mb: 1 }}>
                {plan.nombre}
              </Typography>
            </Grid>
          ))}
          
          {['Sedes disponibles', 'Clases grupales', 'Invitados/mes', 'Entrenador personal'].map((feature, idx) => (
            <Grid container size={{xs:12,}} key={idx} sx={{ borderTop: '1px solid rgba(255,255,255,0.1)', pt: 1 }}>
              <Grid size={{xs:3,}}>
                <Typography variant="body2" sx={{ color: '#fff', opacity: 0.9 }}>
                  {feature}
                </Typography>
              </Grid>
              {planes.map((plan) => (
                <Grid size={{xs:3,}} key={plan.id}>
                  <Typography variant="body2" sx={{ color: '#fff' }}>
                    {feature === 'Sedes disponibles' ? plan.includes.sedes :
                     feature === 'Clases grupales' ? plan.includes.clases :
                     feature === 'Invitados/mes' ? plan.includes.invitados :
                     feature === 'Entrenador personal' ? (plan.includes.entrenador ? '✓' : '✗') : ''}
                  </Typography>
                </Grid>
              ))}
            </Grid>
          ))}
        </Grid>
      </Paper>

      {/* Descuentos especiales */}
      <Paper sx={{ 
        p: 4, 
        mb: 6,
        background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02))',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        borderRadius: 3
      }}>
        <Typography 
          variant="h5" 
          sx={{ 
            color: ORANGE_COLOR, 
            fontWeight: 'bold', 
            textAlign: 'center', 
            mb: 4,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 1
          }}
        >
          <LocalOffer />
          Descuentos Especiales
        </Typography>
        
        <Grid container spacing={3}>
          {descuentosEspeciales.map((descuento) => (
            <Grid size={{xs:12, sm:6, md:3, }} key={descuento.id}>
              <Card
                sx={{
                  p: 3,
                  textAlign: 'center',
                  background: 'linear-gradient(145deg, #1a1a1a 0%, #2d2d2d 100%)',
                  border: `1px solid ${descuento.color}40`,
                  borderRadius: 2,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: `0 10px 25px rgba(${descuento.color.replace('#', '').match(/.{2}/g).map(x => parseInt(x, 16)).join(', ')}, 0.3)`,
                    border: `1px solid ${descuento.color}`
                  }
                }}
              >
                <Box
                  sx={{
                    display: 'inline-flex',
                    p: 2,
                    borderRadius: '50%',
                    backgroundColor: `${descuento.color}20`,
                    color: descuento.color,
                    mb: 2
                  }}
                >
                  {descuento.icon}
                </Box>
                <Typography variant="h6" sx={{ color: descuento.color, fontWeight: 'bold', mb: 1 }}>
                  {descuento.titulo}
                </Typography>
                <Chip
                  label={`${descuento.descuento}% OFF`}
                  sx={{
                    backgroundColor: descuento.color,
                    color: '#fff',
                    fontWeight: 'bold',
                    mb: 2
                  }}
                />
                <Typography variant="body2" sx={{ color: '#fff', opacity: 0.9, mb: 2 }}>
                  {descuento.descripcion}
                </Typography>
                <Button
                  size="small"
                  variant="outlined"
                  sx={{
                    borderColor: descuento.color,
                    color: descuento.color,
                    '&:hover': {
                      backgroundColor: `${descuento.color}20`,
                      borderColor: descuento.color
                    }
                  }}
                >
                  Más Info
                </Button>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Paper>

      {/* Testimonios de clientes */}
      <Paper sx={{ 
        p: 4, 
        mb: 6,
        background: `linear-gradient(135deg, ${ORANGE_COLOR}15, rgba(255, 255, 255, 0.05))`,
        border: `1px solid ${ORANGE_COLOR}40`,
        borderRadius: 3
      }}>
        <Typography 
          variant="h5" 
          sx={{ 
            color: ORANGE_COLOR, 
            fontWeight: 'bold', 
            textAlign: 'center', 
            mb: 4,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 1
          }}
        >
          <ThumbUp />
          Lo que dicen nuestros miembros
        </Typography>
        
        <Grid container spacing={3}>
          {testimonios.map((testimonio, index) => (
            <Grid size={{xs:12,md:4,}} key={index}>
              <Card sx={{ 
                p: 3, 
                height: '100%',
                background: 'linear-gradient(145deg, #1a1a1a 0%, #2d2d2d 100%)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: 2
              }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Avatar
                    src={testimonio.avatar}
                    alt={testimonio.nombre}
                    sx={{ width: 50, height: 50, mr: 2, bgcolor: ORANGE_COLOR }}
                  >
                    {testimonio.nombre.charAt(0)}
                  </Avatar>
                  <Box>
                    <Typography variant="subtitle1" sx={{ color: '#fff', fontWeight: 'bold' }}>
                      {testimonio.nombre}
                    </Typography>
                    <Chip 
                      label={`Plan ${testimonio.plan}`} 
                      size="small"
                      sx={{ 
                        backgroundColor: ORANGE_COLOR, 
                        color: '#fff',
                        fontSize: '0.7rem'
                      }} 
                    />
                  </Box>
                </Box>
                
                <Box sx={{ display: 'flex', mb: 2 }}>
                  {[1,2,3,4,5].map((star) => (
                    <Star 
                      key={star}
                      sx={{ 
                        fontSize: 18,
                        color: star <= testimonio.rating ? ORANGE_COLOR : 'rgba(255,255,255,0.3)'
                      }} 
                    />
                  ))}
                </Box>
                
                <Typography variant="body2" sx={{ color: '#fff', fontStyle: 'italic', mb: 2, lineHeight: 1.5 }}>
                  {testimonio.comentario}
                </Typography>
                
                <Typography variant="caption" sx={{ color: '#fff', opacity: 0.7 }}>
                  Miembro desde hace {testimonio.tiempo}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Paper>

      {/* Beneficios incluidos */}
      <Box sx={{ mt: 8, mb: 6, textAlign: 'center' }}>
        <Typography 
          variant="h5" 
          sx={{ 
            color: ORANGE_COLOR, 
            fontWeight: 'bold', 
            mb: 4 
          }}
        >
          Incluido en todos los planes
        </Typography>
        
        <Grid container spacing={3} justifyContent="center">
          {[
            { icon: <Security />, text: 'Matrícula gratuita este mes' },
            { icon: <Schedule />, text: 'Sin permanencia mínima' },
            { icon: <Savings />, text: 'Primera clase de prueba gratis' },
            { icon: <CreditCard />, text: 'Múltiples formas de pago' },
            { icon: <Group />, text: 'Acceso a comunidad exclusiva' },
            { icon: <LocalFireDepartment />, text: 'Programas de transformación' }
          ].map((item, index) => (
            <Grid size={{xs:12,md:4, sm:6,}} key={index}>
              <Box sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                gap: 2,
                p: 2,
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                borderRadius: 2,
                border: '1px solid rgba(255, 255, 255, 0.1)',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.1)'
                }
              }}>
                <Box sx={{ color: ORANGE_COLOR }}>
                  {item.icon}
                </Box>
                <Typography variant="body2" sx={{ color: '#fff' }}>
                  {item.text}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* FAQ rápido */}
      <Paper sx={{ 
        p: 4, 
        mb: 6,
        background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02))',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        borderRadius: 3
      }}>
        <Typography 
          variant="h6" 
          sx={{ 
            color: ORANGE_COLOR, 
            fontWeight: 'bold', 
            textAlign: 'center', 
            mb: 3 
          }}
        >
          Preguntas Frecuentes
        </Typography>
        
        <Grid container spacing={3}>
          {[
            {
              q: "¿Puedo cambiar de plan después?",
              a: "Sí, puedes actualizar o cambiar tu plan en cualquier momento."
            },
            {
              q: "¿Hay periodo de prueba?",
              a: "Ofrecemos una clase gratuita para que conozcas nuestras instalaciones."
            },
            {
              q: "¿Qué incluye la matrícula?",
              a: "Evaluación física, tour por las instalaciones y configuración de tu plan."
            }
          ].map((faq, index) => (
            <Grid size={{xs:12,md:4,}} key={index}>
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="subtitle2" sx={{ color: '#fff', fontWeight: 'bold', mb: 1 }}>
                  {faq.q}
                </Typography>
                <Typography variant="body2" sx={{ color: '#fff', opacity: 0.8 }}>
                  {faq.a}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Paper>

      {/* Call to action final */}
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Typography variant="h5" sx={{ color: '#fff', mb: 2 }}>
          ¿Listo para comenzar tu transformación?
        </Typography>
        <Typography variant="body1" sx={{ color: '#fff', opacity: 0.8, mb: 4 }}>
          Únete a más de 2,500 miembros que ya están viviendo su mejor versión
        </Typography>
        
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap' }}>
          <Button
            variant="contained"
            size="large"
            startIcon={<WhatsApp />}
            onClick={() => window.open('https://wa.me/571234567890?text=Hola!%20Me%20interesa%20información%20sobre%20los%20planes%20de%20Valhalla%20Gym')}
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
            Consultar por WhatsApp
          </Button>
          
          <Button
            variant="outlined"
            size="large"
            startIcon={<CalendarMonth />}
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
          >
            Agendar visita gratuita
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Prices;