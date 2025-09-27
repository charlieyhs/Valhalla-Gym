import { Box, Grid, Paper, Typography } from "@mui/material";
import { questions } from "../constants/Prices";
import { ORANGE_COLOR } from "../constants/colors";

const Faq = () => {
    return (
        <Paper sx={{ 
            p: 4, 
            mb: 6,
            background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02))',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: 3
        }}>
            <Typography 
                variant="h6" 
                sx={{ 
                color: ORANGE_COLOR,
                fontWeight: 'bold', 
                textAlign: 'center', 
                mb: 3 
                }}
            >
                Preguntas Frecuentes
            </Typography>
            
            <Grid container spacing={3}>
                {questions.map((faq) => (
                    <Grid size={{xs:12,md:4,}} key={faq.id}>
                        <Box sx={{ textAlign: 'center' }}>
                            <Typography variant="subtitle2" sx={{ color: '#fff', fontWeight: 'bold', mb: 1 }}>
                                {faq.q}
                            </Typography>
                            <Typography variant="body2" sx={{ color: '#fff', opacity: 0.8 }}>
                                {faq.a}
                            </Typography>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Paper>
    );
};

export default Faq;