import { 
  Typography, 
  Grid, 
  Card, 
  CardContent, 
  CardMedia, 
  Button, 
  Box,
  Chip
} from '@mui/material';
import { 
  Schedule,
} from '@mui/icons-material';
import { ORANGE_COLOR } from '../constants/colors';

const Clases = () => {
  const clases = [
    {
        id: 1,
        nombre: 'CrossFit',
        descripcion: 'Entrenamiento funcional de alta intensidad',
        duracion: '60 min',
        nivel: 'Intermedio',
        imagen: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=200&fit=crop',
        horarios: [
            {id : '1:1', label: '6:00 AM'},
            {id : '1:2', label: '8:00 PM'},
            {id : '1:3', label: '7:00 PM'},
        ]
    },
    {
        id: 2,
        nombre: 'Yoga',
        descripcion: 'Equilibrio entre mente y cuerpo',
        duracion: '90 min',
        nivel: 'Principiante',
        imagen: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=300&h=200&fit=crop',
        horarios: [
            {id : '2:1', label: '6:00 AM'},
            {id : '2:2', label: '8:00 PM'},
            {id : '2:3', label: '7:00 PM'},
        ]
    },
    {
        id: 3,
        nombre: 'Spinning',
        descripcion: 'Ciclismo indoor con música energizante',
        duracion: '45 min',
        nivel: 'Todos los niveles',
        imagen: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=200&fit=crop',
        horarios: [
            {id : '3:1', label: '6:00 AM'},
            {id : '3:2', label: '8:00 PM'},
            {id : '3:3', label: '7:00 PM'},
        ]
    }
  ];

  return (
    <Box>
        <Typography variant="h3" component="h2" gutterBottom align="center" sx={{ color: ORANGE_COLOR, mb: 4 }}>
            Nuestras Clases
        </Typography>
        <Typography variant="h6" align="center" sx={{ mb: 6, color: 'text.secondary' }}>
            Descubre la variedad de entrenamientos que tenemos para ti
        </Typography>
        
        <Grid container spacing={4}>
            {clases.map((clase) => (
                <Grid size={{ xs: 12, md: 4}} key={clase.id}>
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <CardMedia
                    component="img"
                    height="200"
                    image={clase.imagen}
                    alt={clase.nombre}
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant="h5" component="h3" gutterBottom color={ORANGE_COLOR}>
                        {clase.nombre}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" component="p">
                        {clase.descripcion}
                    </Typography>
                    
                    <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
                        <Chip icon={<Schedule />} label={clase.duracion} size="small" />
                        <Chip label={clase.nivel} size="small" variant="outlined" />
                    </Box>

                    <Typography variant="subtitle2" gutterBottom>
                        Horarios disponibles:
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 2 }}>
                        {clase.horarios.map((horario) => (
                        <Chip key={horario.id} label={horario.label} size="small" color="primary" />
                        ))}
                    </Box>

                    <Button 
                        variant="contained" 
                        fullWidth 
                        sx={{ 
                        mt: 'auto',
                        backgroundColor: ORANGE_COLOR,
                        '&:hover': { backgroundColor: '#e55a2b' }
                        }}
                    >
                        Reservar Clase
                    </Button>
                    </CardContent>
                </Card>
                </Grid>
            ))}
        </Grid>
    </Box>
  );
};

export default Clases;