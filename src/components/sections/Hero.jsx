import { Box, Button, Grid, Stack, Typography } from '@mui/material';
import '../../css/hero.css'
import { ORANGE_COLOR } from '../../constants/colors';

export default function Hero() {
  return (
    <Box className="fondo-hero" size={{xs: 12, md: 8}}>
        <Grid container spacing={4} alignItems="center" justifyContent="space-between">
            <Grid size={{xs:12, md:6}} className='contenedor-texto'>
                <Stack spacing={3}>
                    <Typography variant="h3" fontWeight="bold">
                        <span style={{ color: ORANGE_COLOR }}>Cuerpo fuerte, mente fuerte</span>
                    </Typography>

                    <Typography variant="body1" sx={{ color: "#9ca3af" }}>
                        Descubre un espacio donde la disciplina se convierte en resultados.
                        <br />
                        Tu transformación comienza ahora.
                    </Typography>

                    <Stack direction="row" spacing={2}>
                        <Button
                        variant="contained"
                        sx={{ bgcolor: ORANGE_COLOR, borderRadius: 2, px: 3 }}
                        >
                        Unirse ahora
                        </Button>
                    </Stack>
                </Stack>
            </Grid>

            {/* Imagen */}
            <Grid size={{xs:12, md:6}} sx={{ textAlign: "center" }}>
                <div className="hero-illustration">
                    <img
                        src="/src/assets/gym-3d.png"
                        alt="3D Gym Illustration"
                        style={{ width: "100%", maxWidth: '70%'}}
                    />
                </div>
            </Grid>
        </Grid>
    </Box>
  );
}