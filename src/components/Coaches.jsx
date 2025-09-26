import { 
  Box, 
  Typography
} from "@mui/material";

import { ORANGE_COLOR } from "../constants/colors";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectCoverflow } from "swiper/modules";
import { useRef } from "react";
import '../css/coaches.css';
import { ENTRENADORES } from "../constants/coaches";
import CoachCard from "./CoachCard";

const Coaches = () => {
  
  const swiperRef = useRef(null);

  return (
    <Box>
      t<Box sx={{ textAlign: 'center', mb: 6 }}>
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
          Nuestros Entrenadores
        </Typography>
        <Typography 
          variant="h6" 
          sx={{ 
            mb: 2, 
            color: '#fff',
            opacity: 0.9
          }}
        >
          Conoce al equipo de profesionales que te ayudarán a alcanzar tus metas
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
          Entrenadores certificados con años de experiencia y pasión por transformar vidas
        </Typography>
      </Box>

      {/* Swiper mejorado */}
      <Box sx={{ position: 'relative' }}>
        <Swiper
          ref={swiperRef}
          modules={[Autoplay, Pagination, Navigation, EffectCoverflow]}
          spaceBetween={30}
          slidesPerView={1}
          centeredSlides={true}
          loop={true}
          grabCursor={true}
          effect="coverflow"
          coverflowEffect={{
            rotate: 15,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
            renderBullet: (_, className) => {
              return `<span class="${className}" style="background-color: ${ORANGE_COLOR}"></span>`;
            },
          }}
          navigation={true}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 3 }
          }}
          style={{
            padding: '20px 0 60px 0'
          }}
        >
        	{[...ENTRENADORES, ...ENTRENADORES].map((entrenador, index) => (
				<SwiperSlide key={`${entrenador.id}-${index}`}>
					<CoachCard entrenador={entrenador} index={index} />
				</SwiperSlide>
			))}

        </Swiper>
      </Box>
    </Box>
  );
};

export default Coaches;