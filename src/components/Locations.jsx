import { Box, Button, Card, CardContent, CardMedia, Chip, Grid, Typography } from "@mui/material";
import { ORANGE_COLOR } from "../constants/colors";
import { CheckCircle, LocationOn } from "@mui/icons-material";

const Locations = () => {
    const ubicaciones = [
    {
        id: 1,
        nombre: 'Valhalla Centro',
        direccion: 'Calle 72 #10-50, Bogotá',
        telefono: '+57 1 234-5678',
        horarios: 'Lunes a Viernes: 5:00 AM - 11:00 PM\nSábado y Domingo: 6:00 AM - 10:00 PM',
        servicios: [
            {id : '1:1', label: 'Pesas'},
            {id : '1:2', label: 'Cardio'},
            {id : '1:3', label: 'Clases grupales'},
            {id : '1:4', label: 'Vestuarios'},
        ],
        imagen: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=200&fit=crop'
    },
    {
        id: 2,
        nombre: 'Valhalla Norte',
        direccion: 'Carrera 15 #123-45, Bogotá',
        telefono: '+57 1 234-5679',
        horarios: 'Lunes a Viernes: 5:00 AM - 10:00 PM\nSábado y Domingo: 7:00 AM - 9:00 PM',
        servicios: [
            {id : '2:1', label: 'Pesas'},
            {id : '2:2', label: 'Cardio'},
            {id : '2:3', label: 'Crossfit'},
            {id : '2:4', label: 'Spa'},
        ],
        imagen: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=200&fit=crop'
    }
  ];

  return (
    <Box>
      <Typography variant="h3" component="h2" gutterBottom align="center" sx={{ color: ORANGE_COLOR, mb: 4 }}>
        Nuestras Ubicaciones
      </Typography>
      <Typography variant="h6" align="center" sx={{ mb: 6, color: 'text.secondary' }}>
        Encuentra el gym más cercano a ti
      </Typography>
      
      <Grid container spacing={4}>
        {ubicaciones.map((ubicacion) => (
          <Grid size={{ xs: 12, md: 6}} key={ubicacion.id}>
            <Card sx={{ height: '100%' }}>
              <CardMedia
                component="img"
                height="200"
                image={ubicacion.imagen}
                alt={ubicacion.nombre}
              />
              <CardContent>
                <Typography variant="h5" component="h3" gutterBottom color={ORANGE_COLOR}>
                  {ubicacion.nombre}
                </Typography>
                
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <LocationOn sx={{ mr: 1, color: 'text.secondary' }} />
                  <Typography variant="body1">
                    {ubicacion.direccion}
                  </Typography>
                </Box>

                <Typography variant="body2" color="text.secondary" component="p">
                  📞 {ubicacion.telefono}
                </Typography>

                <Typography variant="subtitle2" gutterBottom>
                  Horarios de atención:
                </Typography>
                <Typography variant="body2" component="p" sx={{ whiteSpace: 'pre-line' }}>
                  {ubicacion.horarios}
                </Typography>

                <Typography variant="subtitle2" gutterBottom>
                  Servicios disponibles:
                </Typography>
                <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 2 }}>
                  {ubicacion.servicios.map((servicio) => (
                    <Chip 
                      key={servicio.id} 
                      label={servicio.label} 
                      size="small" 
                      icon={<CheckCircle />}
                      color="primary"
                    />
                  ))}
                </Box>

                <Button 
                  variant="contained" 
                  fullWidth
                  sx={{ 
                    backgroundColor: ORANGE_COLOR,
                    '&:hover': { backgroundColor: '#e55a2b' }
                  }}
                >
                  Ver en mapa
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Locations;