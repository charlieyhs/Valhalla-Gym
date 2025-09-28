import { Box, Button, Card, Chip, Grid, Paper, Typography } from "@mui/material";
import { LocalOffer } from "../../icons/icons";;
import { ORANGE_COLOR } from "../../constants/colors";
import { descuentosEspeciales } from "../../data/Prices";

const Discounts = () => {
    return (
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
    );
};

export default Discounts;