import { Info } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  LinearProgress,
  Tooltip,
  Typography,
  Zoom,
} from "@mui/material";
import PropTypes from "prop-types";
import { useState } from "react";
import BenefitDetails from "./BenefitDetails";

const BenefitCard = ({ benefit, index }) => {
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleOpenDialog = () => {
    setDialogOpen(true);
  };
  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  return (
    <div>
      <Zoom in={true} style={{ transitionDelay: `${index * 100}ms` }}>
        <Card
          sx={{
            height: "100%",
            background: "linear-gradient(145deg, #1a1a1a 0%, #2d2d2d 100%)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            borderRadius: 3,
            overflow: "hidden",
            position: "relative",
            cursor: "pointer",
            transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
            "&:hover": {
              transform: "translateY(-12px) scale(1.03)",
              boxShadow: `0 25px 50px rgba(${benefit.color
                .replace("#", "")
                .match(/.{2}/g)
                .map((x) => parseInt(x, 16))
                .join(", ")}, 0.3)`,
              border: `2px solid ${benefit.color}`,
              "& .benefit-icon": {
                transform: "scale(1.2) rotate(10deg)",
                color: benefit.color,
              },
              "& .benefit-category": {
                backgroundColor: benefit.color,
                color: "#fff",
              },
            },
          }}
          onClick={() => handleOpenDialog()}
        >
          {/* Badge de categoría */}
          <Box
            sx={{
              position: "absolute",
              top: 16,
              right: 16,
              zIndex: 2,
            }}
          >
            <Chip
              className="benefit-category"
              label={benefit.category}
              size="small"
              sx={{
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                color: "#fff",
                fontWeight: "bold",
                transition: "all 0.3s ease",
              }}
            />
          </Box>

          <CardContent
            sx={{
              textAlign: "center",
              p: 4,
              color: "#fff",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            {/* Icono principal */}
            <Box sx={{ mb: 3 }}>
              <Box
                className="benefit-icon"
                sx={{
                  display: "inline-flex",
                  p: 3,
                  borderRadius: "50%",
                  backgroundColor: `${benefit.color}20`,
                  border: `2px solid ${benefit.color}40`,
                  color: benefit.color,
                  fontSize: 48,
                  transition: "all 0.4s ease",
                  mb: 2,
                }}
              >
                {benefit.icon}
              </Box>

              <Typography
                variant="h5"
                sx={{
                  fontWeight: "bold",
                  mb: 2,
                  color: "#fff",
                  lineHeight: 1.2,
                }}
              >
                {benefit.title}
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  color: "#fff",
                  opacity: 0.9,
                  lineHeight: 1.6,
                  mb: 3,
                }}
              >
                {benefit.desc}
              </Typography>
            </Box>

            {/* Estadísticas rápidas */}
            <Box sx={{ mt: "auto" }}>
              <Box
                sx={{ display: "flex", justifyContent: "space-around", mb: 2 }}
              >
                <Box sx={{ textAlign: "center" }}>
                  <Typography
                    variant="h6"
                    sx={{ color: benefit.color, fontWeight: "bold" }}
                  >
                    {benefit.stats.satisfaction}%
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{ color: "#fff", opacity: 0.7 }}
                  >
                    Satisfacción
                  </Typography>
                </Box>
                <Box sx={{ textAlign: "center" }}>
                  <Typography
                    variant="h6"
                    sx={{ color: benefit.color, fontWeight: "bold" }}
                  >
                    {benefit.stats.timeFrame}
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{ color: "#fff", opacity: 0.7 }}
                  >
                    Resultados
                  </Typography>
                </Box>
              </Box>

              {/* Barra de progreso de efectividad */}
              <Box sx={{ width: "100%", mb: 2 }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mb: 1,
                  }}
                >
                  <Typography
                    variant="caption"
                    sx={{ color: "#fff", opacity: 0.7 }}
                  >
                    Efectividad
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{ color: benefit.color, fontWeight: "bold" }}
                  >
                    {benefit.stats.avgResults}%
                  </Typography>
                </Box>
                <LinearProgress
                  variant="determinate"
                  value={benefit.stats.avgResults}
                  sx={{
                    height: 6,
                    borderRadius: 3,
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    "& .MuiLinearProgress-bar": {
                      backgroundColor: benefit.color,
                      borderRadius: 3,
                    },
                  }}
                />
              </Box>

              <Tooltip title="Ver detalles completos">
                <Button
                  variant="outlined"
                  size="small"
                  startIcon={<Info />}
                  sx={{
                    borderColor: benefit.color,
                    color: benefit.color,
                    "&:hover": {
                      backgroundColor: `${benefit.color}20`,
                      borderColor: benefit.color,
                    },
                    textTransform: "none",
                    borderRadius: 2,
                  }}
                >
                  Más información
                </Button>
              </Tooltip>
            </Box>
          </CardContent>
        </Card>
      </Zoom>
      {dialogOpen && (
        <BenefitDetails
          dialogOpen={dialogOpen}
          benefit={benefit}
          handleCloseDialog={handleCloseDialog}
        />
      )}
    </div>
  );
};
BenefitCard.propTypes = {
  benefit: PropTypes.shape({
    id: PropTypes.number.isRequired,
    icon: PropTypes.element.isRequired,
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      satisfaction: PropTypes.number.isRequired,
      timeFrame: PropTypes.string.isRequired,
      avgResults: PropTypes.number.isRequired
    }).isRequired
  }).isRequired,
  index: PropTypes.number.isRequired
};

export default BenefitCard;
