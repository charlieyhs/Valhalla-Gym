import { Box, Grid, Paper, Typography } from "@mui/material";
import { ORANGE_COLOR } from "../../constants/colors";

const OpeningHours = () => {

    return (
        <Grid container spacing={4} sx={{ mb: 8 }}>
            <Grid size={{xs:12, md:6,}}>
                <Paper sx={{ p: 4, height: '100%', background: 'linear-gradient(145deg, #1a1a1a 0%, #2d2d2d 100%)', borderRadius: 3 }}>
                    <Typography variant="h5" sx={{ color: ORANGE_COLOR, fontWeight: 'bold', mb: 3 }}>
                    📍 Horarios de Atención
                    </Typography>
                    
                    <Box sx={{ space: 2 }}>
                        {[
                            {id:'1', day: 'Lunes - Viernes', time: '5:00 AM - 11:00 PM' },
                            {id:'2', day: 'Sábados', time: '6:00 AM - 10:00 PM' },
                            {id:'3', day: 'Domingos y Festivos', time: '7:00 AM - 9:00 PM' }
                        ].map((schedule) => (
                            <Box key={schedule.id} sx={{ display: 'flex', justifyContent: 'space-between', mb: 2, p: 2, backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: 2 }}>
                            <Typography variant="body1" sx={{ color: '#fff', fontWeight: 'bold' }}>
                                {schedule.day}
                            </Typography>
                            <Typography variant="body1" sx={{ color: ORANGE_COLOR }}>
                                {schedule.time}
                            </Typography>
                            </Box>
                        ))}
                    </Box>
                </Paper>
            </Grid>

        <Grid size={{xs:12, md:6,}}>
          <Paper sx={{ p: 4, height: '100%', background: 'linear-gradient(145deg, #1a1a1a 0%, #2d2d2d 100%)', borderRadius: 3 }}>
            <Typography variant="h5" sx={{ color: ORANGE_COLOR, fontWeight: 'bold', mb: 3 }}>
              🚀 ¿Por qué elegirnos?
            </Typography>
            
            <Box sx={{ space: 2 }}>
              {[
                { id: '1', feature: 'Respuesta en menos de 2 horas', icon: '⏱️' },
                { id: '2', feature: 'Atención personalizada 24/7', icon: '🌟' },
                { id: '3', feature: 'Asesoramiento fitness gratuito', icon: '💪' },
                { id: '4', feature: 'Soporte multicanales', icon: '📞' }
              ].map((item) => (
                <Box key={item.id} sx={{ display: 'flex', alignItems: 'center', mb: 2, p: 2, backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: 2 }}>
                  <Typography variant="h6" sx={{ mr: 2, color: ORANGE_COLOR }}>
                    {item.icon}
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#fff' }}>
                    {item.feature}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Paper>
        </Grid>
      </Grid>
    );
};

export default OpeningHours;