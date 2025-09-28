import { Box, Grid, Typography } from "@mui/material";
import { ORANGE_COLOR } from "../../constants/colors";
import { CreditCard, Group, LocalFireDepartment, Savings, Schedule, Security } from "../../icons/icons";;

const BenefitsPlans = () => {
    return (
        <Box sx={{ mt: 8, mb: 6, textAlign: 'center' }}>
            <Typography 
                variant="h5" 
                sx={{ 
                    color: ORANGE_COLOR, 
                    fontWeight: 'bold', 
                    mb: 4 
                }}
            >
                Incluido en todos los planes
            </Typography>
            
            <Grid container spacing={3} justifyContent="center">
            {[
                { id: '1', icon: <Security />, text: 'Matrícula gratuita este mes' },
                { id: '2', icon: <Schedule />, text: 'Sin permanencia mínima' },
                { id: '3', icon: <Savings />, text: 'Primera clase de prueba gratis' },
                { id: '4', icon: <CreditCard />, text: 'Múltiples formas de pago' },
                { id: '5', icon: <Group />, text: 'Acceso a comunidad exclusiva' },
                { id: '6', icon: <LocalFireDepartment />, text: 'Programas de transformación' }
            ].map((item) => (
                <Grid size={{xs:12,md:4, sm:6,}} key={item.id}>
                    <Box sx={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center',
                        gap: 2,
                        p: 2,
                        backgroundColor: 'rgba(255, 255, 255, 0.05)',
                        borderRadius: 2,
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        '&:hover': {
                        backgroundColor: 'rgba(255, 255, 255, 0.1)'
                        }
                    }}>
                        <Box sx={{ color: ORANGE_COLOR }}>
                            {item.icon}
                        </Box>
                        <Typography variant="body2" sx={{ color: '#fff' }}>
                            {item.text}
                        </Typography>
                    </Box>
                </Grid>
            ))}
            </Grid>
        </Box>
    );
};

export default BenefitsPlans;