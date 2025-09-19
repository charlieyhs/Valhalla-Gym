import { Box, Button, Chip, Grid, Paper, Typography } from "@mui/material";
import { ORANGE_COLOR } from "../constants/colors";
import { CheckCircle } from "@mui/icons-material";

const Prices = () => {
    const planes = [
        {
            id: 1,
            nombre: 'Básico',
            precio: '$80.000',
            periodo: '/mes',
            popular: false,
            beneficios: [
                'Acceso al área de pesas',
                'Área de cardio',
                'Vestuarios y duchas',
                'Horario completo'
            ]
        },
        {
            id: 2,
            nombre: 'Premium',
            precio: '$120.000',
            periodo: '/mes',
            popular: true,
            beneficios: [
                'Todo lo del plan Básico',
                'Clases grupales ilimitadas',
                'Acceso a todas las sedes',
                'Invitados (2 por mes)',
                'Descuento en productos'
            ]
        },
        {
            id: 3,
            nombre: 'VIP',
            precio: '$180.000',
            periodo: '/mes',
            popular: false,
            beneficios: [
                'Todo lo del plan Premium',
                'Entrenamiento personalizado',
                'Asesoría nutricional',
                'Acceso a spa y sauna',
                'Estacionamiento gratis'
            ]
        }
    ];

  return (
    <Box>
      <Typography variant="h3" component="h2" gutterBottom align="center" sx={{ color: ORANGE_COLOR, mb: 4 }}>
        Planes y Precios
      </Typography>
      <Typography variant="h6" align="center" sx={{ mb: 6, color: 'text.secondary' }}>
        Elige el plan que mejor se adapte a tus necesidades
      </Typography>
      
      <Grid container spacing={4} justifyContent="center">
        {planes.map((plan) => (
          <Grid size={{ xs: 12, sm: 6, md: 4}} key={plan.id}>
            <Paper
              elevation={plan.popular ? 8 : 4}
              sx={{
                p: 3,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                border: plan.popular ? `2px solid ${ORANGE_COLOR}` : 'none',
                transform: plan.popular ? 'scale(1.05)' : 'none'
              }}
            >
              {plan.popular && (
                <Chip
                  label="MÁS POPULAR"
                  sx={{
                    position: 'absolute',
                    top: -10,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    backgroundColor: ORANGE_COLOR,
                    color: 'white',
                    fontWeight: 'bold'
                  }}
                />
              )}

              <Typography variant="h4" component="h3" align="center" gutterBottom color={ORANGE_COLOR}>
                {plan.nombre}
              </Typography>

              <Box sx={{ textAlign: 'center', mb: 3 }}>
                <Typography variant="h3" component="div" sx={{ fontWeight: 'bold' }}>
                  {plan.precio}
                  <Typography variant="h6" component="span" color="text.secondary">
                    {plan.periodo}
                  </Typography>
                </Typography>
              </Box>

              <Box sx={{ flexGrow: 1, mb: 3 }}>
                {plan.beneficios.map((beneficio) => (
                  <Box key={beneficio} sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <CheckCircle sx={{ color: ORANGE_COLOR, mr: 1, fontSize: 20 }} />
                    <Typography variant="body2">
                      {beneficio}
                    </Typography>
                  </Box>
                ))}
              </Box>

              <Button
                variant={plan.popular ? "contained" : "outlined"}
                fullWidth
                size="large"
                sx={{
                  backgroundColor: plan.popular ? ORANGE_COLOR : 'transparent',
                  color: plan.popular ? 'white' : ORANGE_COLOR,
                  borderColor: ORANGE_COLOR,
                  '&:hover': {
                    backgroundColor: ORANGE_COLOR,
                    color: 'white'
                  }
                }}
              >
                Elegir Plan
              </Button>
            </Paper>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ mt: 6, textAlign: 'center' }}>
        <Typography variant="body2" color="text.secondary">
          * Todos los planes incluyen matrícula gratuita este mes
        </Typography>
        <Typography variant="body2" color="text.secondary">
          * Descuentos especiales para estudiantes y adultos mayores
        </Typography>
      </Box>
    </Box>
  );
};

export default Prices;