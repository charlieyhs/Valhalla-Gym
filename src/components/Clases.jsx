import { 
  Typography, 
  Card, 
  CardContent,
  Button, 
  Box,
  Chip
} from '@mui/material';
import { 
  Schedule,
} from '@mui/icons-material';
import '../css/clases.css'
import "swiper/css";
import { ORANGE_COLOR } from '../constants/colors';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay } from 'swiper/modules';

const Clases = () => {
  const clases = [
    {
        id: 1,
        nombre: 'CrossFit',
        descripcion: 'Entrenamiento funcional de alta intensidad',
        duracion: '60 min',
        nivel: 'Intermedio',
        imagen: '/src/assets/clases/crossfit.png',
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
        imagen: '/src/assets/clases/yoga.jpg',
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
        imagen: '/src/assets/clases/spinning.png',
        horarios: [
            {id : '3:1', label: '6:00 AM'},
            {id : '3:2', label: '8:00 PM'},
            {id : '3:3', label: '7:00 PM'},
        ]
    },
    {
        id: 4,
        nombre: 'Boxeo',
        descripcion: 'Entrenamiento intenso que mejora tu coordinación.',
        duracion: '60 min',
        nivel: 'Todos los niveles',
        imagen: '/src/assets/clases/boxeo.png',
        horarios: [
            {id : '4:1', label: '6:00 AM'},
            {id : '4:2', label: '8:00 PM'},
            {id : '4:3', label: '7:00 PM'},
        ]
    }
  ];

  return (
    <div>
        <Typography variant="h3" component="h2" gutterBottom align="center" 
            sx={{ color: ORANGE_COLOR, mb: 2 }}>
            Nuestras Clases
        </Typography>
        <Typography variant="h6" 
            align="center" sx={{ mb: 1, color: '#fff' }}>
            Descubre la variedad de entrenamientos que tenemos para ti
        </Typography>
        <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={3}
            loop={true}
            grabCursor={true}
            breakpoints={{
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
            }}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
            }}    
        >
            {clases.map((clase) => (
                <SwiperSlide key={clase.id}>
                    <Card className='card'>
                        <CardContent>
                            <div className="image-container">
                                <img src={clase.imagen} alt={clase.nombre} className="image" />
                            </div>
                            <Typography variant="h5" component="h3" gutterBottom color={ORANGE_COLOR}>
                                {clase.nombre}
                            </Typography>

                            <Typography variant="body2" color="text.secondary" component="p">
                                {clase.descripcion}
                            </Typography>
                            
                            <Box sx={{ display: 'flex', gap: 1, mb: 2, mt: 2 }}>
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
                </SwiperSlide>
            ))}
        </Swiper>
    </div>
  );
};

export default Clases;