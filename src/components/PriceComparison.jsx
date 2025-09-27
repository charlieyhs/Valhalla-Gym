import { Grid, Paper, Typography } from "@mui/material";
import { GREEN_COLOR, ORANGE_COLOR, RED_COLOR } from "../constants/colors";
import { Close, CompareArrows, Done } from "@mui/icons-material";
import { caracteristicas, planes } from "../constants/Prices";

const PriceComparison = () => {
    const tieneCaracteristicas = (plan, idFeature) => {
        if(idFeature === '1'){
            return plan.includes.sedes;
        }else if(idFeature === '2'){
            return plan.includes.clases;
        }else if(idFeature === '3'){
            return plan.includes.invitados;
        }else if(idFeature === '4'){
            return plan.includes.entrenador;
        }
        return false;
    };
    return (
        <Paper
            sx={{
                p: 4,
                mb: 6,
                background: "linear-gradient(145deg, #2d2d2d 0%, #1a1a1a 100%)",
                border: `1px solid ${ORANGE_COLOR}40`,
                borderRadius: 3,
            }}
            >
            <Typography
                variant="h5"
                sx={{
                color: ORANGE_COLOR,
                fontWeight: "bold",
                textAlign: "center",
                mb: 4,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 1,
                }}
            >
                <CompareArrows />
                Comparación Rápida
            </Typography>

            <Grid container spacing={2} sx={{ textAlign: "center" }}>
                <Grid size={{ xs: 3 }}>
                <Typography
                    variant="body2"
                    sx={{ color: "#fff", fontWeight: "bold", mb: 1 }}
                >
                    Características
                </Typography>
                </Grid>
                {planes.map((plan) => (
                <Grid size={{ xs: 3 }} key={plan.id}>
                    <Typography
                    variant="body2"
                    sx={{ color: plan.color, fontWeight: "bold", mb: 1 }}
                    >
                    {plan.nombre}
                    </Typography>
                </Grid>
                ))}

                {caracteristicas.map((feature) => (
                <Grid
                    container
                    size={{ xs: 12 }}
                    key={feature.id}
                    sx={{ borderTop: "1px solid rgba(255,255,255,0.1)", pt: 1 }}
                >
                    <Grid size={{ xs: 3 }}>
                    <Typography variant="body2" sx={{ color: "#fff", opacity: 0.9 }}>
                        {feature.label}
                    </Typography>
                    </Grid>
                    {planes.map((plan) => (
                    <Grid size={{ xs: 3 }} key={plan.id}>
                        {tieneCaracteristicas(plan, feature.id) ? (
                        <Done sx={{ color: GREEN_COLOR }} />
                        ) : (
                        <Close sx={{ color: RED_COLOR }} />
                        )}
                    </Grid>
                    ))}
                </Grid>
                ))}
            </Grid>
        </Paper>
  );
};

export default PriceComparison;
