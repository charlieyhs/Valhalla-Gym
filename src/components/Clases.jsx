import { 
  Typography,
  Box,
  Chip,
} from '@mui/material';

import '../css/clases.css';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-cards";
import { ORANGE_COLOR } from '../constants/colors';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, EffectCards } from 'swiper/modules';
import { useRef } from 'react';
import { CLASES } from '../constants/clases';
import ClassCard from './ClassCard';

const Clases = () => {
    const swiperRef = useRef(null);    
    return (
    <Box>
        {/* Header mejorado */}
        <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography 
                variant="h3" 
                component="h2" 
                gutterBottom 
                sx={{ 
                    color: ORANGE_COLOR,
                    fontWeight: 'bold',
                    mb: 2,
                    background: `linear-gradient(45deg, ${ORANGE_COLOR}, #ff6b35)`,
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                }}
            >
                Nuestras Clases
            </Typography>
            <Typography 
                variant="h6" 
                sx={{ 
                    mb: 2, 
                    color: '#fff',
                    opacity: 0.9
                }}
            >
                Descubre la variedad de entrenamientos que tenemos para ti
            </Typography>
            <Typography 
                variant="body1" 
                sx={{ 
                    color: '#fff',
                    opacity: 0.7,
                    maxWidth: 600,
                    mx: 'auto'
                }}
            >
                Desde entrenamientos de alta intensidad hasta clases de relajación, encuentra el perfecto para ti
            </Typography>
        </Box>

        {/* Filtros rápidos */}
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mb: 4, flexWrap: 'wrap' }}>
            {['Todos', 'Alta Intensidad', 'Relajación', 'Principiante', 'Avanzado'].map((filter) => (
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

        {/* Swiper */}
        <Box sx={{ position: 'relative' }}>
            <Swiper
                ref={swiperRef}
                modules={[Autoplay, Navigation, Pagination, EffectCards]}
                spaceBetween={30}
                slidesPerView={1}
                centeredSlides={true}
                loop={true}
                grabCursor={true}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                }}
                pagination={{
                    clickable: true,
                    dynamicBullets: true,
                    renderBullet: (index, className) => {
                        return `<span class="${className}" style="background-color: ${ORANGE_COLOR}"></span>`;
                    },
                }}
                navigation={true}
                breakpoints={{
                    640: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 2 },
                    1280: { slidesPerView: 3 }
                }}
                style={{
                    padding: '20px 0 60px 0'
                }}
            >
                {CLASES.map((clase) => (
                    <SwiperSlide key={clase.id}>
                        <ClassCard clase={clase} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </Box>
    </Box>
    );
};

export default Clases;