import { Avatar, Box, Card, Chip, Grid, Paper, Typography } from "@mui/material";
import { ORANGE_COLOR } from "../constants/colors";
import { Star, ThumbUp } from "@mui/icons-material";
import { testimonios } from "../constants/Prices";

const Testimonials = () => {
    return (
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
    );
};

export default Testimonials;