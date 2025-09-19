import { Box, Button, Typography } from "@mui/material";

export default function Hero() {
    return (
        <Box
            sx={{
                height: "100vh",
                width: "100%",
                position: "relative",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                color: "white",
                overflow: "hidden",
            }}
        >
            <Box
                component="img"
                src="/src/images/landing_page/Hero.png"
                alt="Hero background"
                sx={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center",
                    zIndex: -1,
                }}
            />
            
            <Box sx={{ zIndex: 1 }}>
                <Typography variant="h3" fontWeight="bold">
                    Transforma tu vida con Olimpo
                </Typography>
                <Typography variant="h6" sx={{ mt: 2, maxWidth: 600 }}>
                    Alcanza tus metas de fitness con entrenamientos personalizados y un ambiente motivador.
                </Typography>
                <Button variant="contained" color="secondary" sx={{ mt: 3 }}>
                    Unirse ahora
                </Button>
            </Box>
        </Box>

    );
};