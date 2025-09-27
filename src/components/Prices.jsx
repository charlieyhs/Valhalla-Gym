import {
  Box,
  Chip,
  Container,
  FormControlLabel,
  Grid,
  Switch,
  Typography
} from "@mui/material";
import { ORANGE_COLOR } from "../constants/colors";
import { planes } from "../constants/Prices";
import '../css/prices.css';

import { useState } from "react";
import BenefitsPlans from "./BenefitsPlans";
import CallStartGym from "./CallStartGym";
import Discounts from "./Discounts";
import PlanCard from "./PlanCard";
import PriceComparison from "./PriceComparison";
import Testimonials from "./Testimonials";
import Faq from "./FAQ";

const Prices = () => {
const [isAnnual, setIsAnnual] = useState(false);

    return (
        <Container maxWidth="xl">
            {/* Header mejorado */}
            <Box sx={{ textAlign: 'center', mb: 6 }}>
                <Typography 
                    variant="h3" 
                    component="h2" 
                    gutterBottom 
                    sx={{ 
                        color: ORANGE_COLOR,
                        fontWeight: 'bold',
                        mb: 3,
                        background: `linear-gradient(45deg, ${ORANGE_COLOR}, #ff6b35)`,
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                    }}
                >
                    Planes y Precios
                </Typography>

                <Typography 
                    variant="h6" 
                    sx={{ 
                        mb: 3, 
                        color: '#fff',
                        opacity: 0.9,
                        maxWidth: 600,
                        mx: 'auto'
                    }}
                >
                    Elige el plan que mejor se adapte a tus necesidades y objetivos
                </Typography>

                {/* Toggle anual/mensual */}
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 2, mb: 4 }}>
                    <Typography variant="body1" sx={{ color: isAnnual ? '#fff' : ORANGE_COLOR, opacity: isAnnual ? 0.7 : 1 }}>
                        Mensual
                    </Typography>
                    <FormControlLabel
                        control={
                            <Switch
                                checked={isAnnual}
                                onChange={(e) => setIsAnnual(e.target.checked)}
                                sx={{
                                    '& .MuiSwitch-switchBase.Mui-checked': {
                                        color: ORANGE_COLOR,
                                    },
                                    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                                        backgroundColor: ORANGE_COLOR,
                                    },
                                }}
                            />
                        }
                        label=""
                    />
                    <Typography variant="body1" sx={{ color: isAnnual ? ORANGE_COLOR : '#fff', opacity: isAnnual ? 1 : 0.7 }}>
                        Anual
                    </Typography>
                    {isAnnual && (
                        <Chip
                            label="Hasta 25% OFF"
                            size="small"
                            sx={{
                                backgroundColor: '#4CAF50',
                                color: '#fff',
                            }}
                        />
                    )}
                </Box>
            </Box>

            {/* Grid de planes */}
            <Grid container spacing={4} justifyContent="center" sx={{ mb: 8 }}>
                {planes.map((plan, index) => (
                    <Grid size={{xs:12, md:6, lg:4,}} key={plan.id}>
                        <PlanCard plan={plan} index={index} isAnnual={isAnnual}/>
                    </Grid>
                ))}
            </Grid>

            {/* Comparación rápida */}
            <PriceComparison/>

            {/* Descuentos especiales */}
            <Discounts/> 

            {/* Testimonios de clientes */}
            <Testimonials/>

            {/* Beneficios incluidos */}
            <BenefitsPlans/>

            {/* FAQ rápido */}
            <Faq/>

            {/* Call to action final */}
            <CallStartGym/>

        </Container>
    );
};

export default Prices;