import { 
  Box, 
  Button, 
  Card, 
  Chip, 
  Rating, 
  Typography } from "@mui/material";
import { ORANGE_COLOR } from "../constants/colors";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import '../css/coaches.css'
import { AvatarTooltip } from "./AvatarTooltip";

const Coaches = () => {
    const entrenadores = [
    {
      id: 1,
      nombre: 'Carlos Mendez',
      especialidad: 'CrossFit & Functional Training',
      experiencia: '8 años',
      certificaciones: ['CrossFit L2', 'NSCA-CPT'],
      rating: 4.9,
      imagen: '/src/assets/coaches/entrenador1.png',
      descripcion: 'Especialista en entrenamientos funcionales de alta intensidad'
    },
    {
      id: 2,
      nombre: 'María González',
      especialidad: 'Yoga & Pilates',
      experiencia: '6 años',
      certificaciones: ['RYT-500', 'Pilates Mat'],
      rating: 4.8,
      imagen: '/src/assets/coaches/entrenador3.png',
      descripcion: 'Instructora certificada en yoga y pilates con enfoque holístico'
    },
    {
      id: 3,
      nombre: 'David Rodriguez',
      especialidad: 'Musculación & Powerlifting',
      experiencia: '10 años',
      certificaciones: ['NSCA-CSCS', 'USA Powerlifting'],
      rating: 4.9,
      imagen: '/src/assets/coaches/entrenador2.png',
      descripcion: 'Entrenador personal especializado en fuerza y desarrollo muscular'
    },
    {
      id: 3,
      nombre: 'Luisa Castro',
      especialidad: 'Functional training',
      experiencia: '10 años',
      certificaciones: ['NSCA-CSCS'],
      rating: 4.9,
      imagen: '/src/assets/coaches/entrenador4.png',
      descripcion: 'Entrenador personal especializado en fuerza y desarrollo muscular'
    }
  ];

  return (
    <div>
      <Typography variant="h3" component="h2" gutterBottom align="center" sx={{ color: ORANGE_COLOR, mb: 4 }}>
        Nuestros Entrenadores
      </Typography>
      <Typography variant="h6" align="center" sx={{ mb: 6, color: '#fff' }}>
        Conoce al equipo de profesionales que te ayudarán a alcanzar tus metas
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
            
      >
        {entrenadores.map((entrenador) => (
          <SwiperSlide key={entrenador.id} style={{ overflow: 'visible' }}>
            <Card className='card' sx={{ height: '100%', textAlign: 'center', p: 2 }}>
              <div>
                <AvatarTooltip src={entrenador.imagen} alt={entrenador.nombre} />
              </div>

              <Typography variant="h5" component="h3" gutterBottom color={ORANGE_COLOR}>
                {entrenador.nombre}
              </Typography>
              <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                {entrenador.especialidad}
              </Typography>
              
              <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mb: 2 }}>
                <Rating value={entrenador.rating} readOnly precision={0.1} />
                <Typography variant="body2" sx={{ ml: 1 }}>
                  ({entrenador.rating})
                </Typography>
              </Box>

              <Typography variant="body2" component="p">
                {entrenador.descripcion}
              </Typography>

              <Box sx={{ mb: 2 }}>
                <Typography variant="subtitle2" gutterBottom>
                  Experiencia: {entrenador.experiencia}
                </Typography>
                <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', justifyContent: 'center' }}>
                  {entrenador.certificaciones.map((cert) => (
                    <Chip key={cert} label={cert} size="small" />
                  ))}
                </Box>
              </Box>

              <Button 
                variant="outlined" 
                fullWidth
                sx={{ 
                  color: ORANGE_COLOR,
                  borderColor: ORANGE_COLOR,
                  '&:hover': { 
                    backgroundColor: ORANGE_COLOR,
                    color: 'white'
                  }
                }}
              >
                Entrenar con {entrenador.nombre.split(' ')[0]}
              </Button>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Coaches;