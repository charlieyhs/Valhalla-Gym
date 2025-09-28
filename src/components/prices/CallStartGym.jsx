import { CalendarMonth, WhatsApp } from "../../icons/icons";;
import { Box, Button, Typography } from "@mui/material";
import { ORANGE_COLOR } from "../../constants/colors";

const CallStartGym = () => {
    return (
        <Box sx={{ textAlign: 'center', mb: 4 }}>
            <Typography variant="h5" sx={{ color: '#fff', mb: 2 }}>
                ¿Listo para comenzar tu transformación?
            </Typography>
            <Typography variant="body1" sx={{ color: '#fff', opacity: 0.8, mb: 4 }}>
                Únete a más de 2,500 miembros que ya están viviendo su mejor versión
            </Typography>
            
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap' }}>
                <Button
                    variant="contained"
                    size="large"
                    startIcon={<WhatsApp />}
                    onClick={() => window.open('https://wa.me/571234567890?text=Hola!%20Me%20interesa%20información%20sobre%20los%20planes%20de%20Valhalla%20Gym')}
                    sx={{
                    backgroundColor: '#25D366',
                    px: 4,
                    py: 1.5,
                    fontSize: '1rem',
                    fontWeight: 'bold',
                    borderRadius: 3,
                    textTransform: 'none',
                    '&:hover': {
                        backgroundColor: '#20b858',
                        transform: 'translateY(-2px)',
                        boxShadow: 6
                    }
                    }}
                >
                    Consultar por WhatsApp
                </Button>
            
                <Button
                    variant="outlined"
                    size="large"
                    startIcon={<CalendarMonth />}
                    sx={{
                    borderColor: ORANGE_COLOR,
                    color: ORANGE_COLOR,
                    px: 4,
                    py: 1.5,
                    fontSize: '1rem',
                    fontWeight: 'bold',
                    borderRadius: 3,
                    textTransform: 'none',
                    '&:hover': {
                        backgroundColor: `${ORANGE_COLOR}20`,
                        borderColor: ORANGE_COLOR,
                        transform: 'translateY(-2px)'
                    }
                    }}
                >
                    Agendar visita gratuita
                </Button>
            </Box>
        </Box>
    );
};

export default CallStartGym;