import { CheckCircle, Close, Star, Timeline } from "@mui/icons-material";
import { Box, 
    Button, 
    Chip, 
    Dialog, 
    DialogActions, 
    DialogContent, 
    DialogTitle, 
    Grid, 
    IconButton, 
    LinearProgress, 
    List, 
    ListItem, 
    ListItemIcon, 
    ListItemText, 
    Paper, 
    Typography, 
    Zoom } 
from "@mui/material";
import PropTypes from "prop-types";
import { ORANGE_COLOR } from "../../constants/colors";

const BenefitDetails = ({benefit, dialogOpen, handleCloseDialog}) => {
  return (
    <Dialog
      open={dialogOpen}
      onClose={() => handleCloseDialog()}
      maxWidth="md"
      fullWidth
      slots={{
        transition: Zoom,
      }}
      transitionDuration={400}
      slotProps={{
        paper: {
          sx: {
            background: "linear-gradient(145deg, #1a1a1a 0%, #2d2d2d 100%)",
            color: "#fff",
            borderRadius: 3,
            border: `1px solid ${benefit?.color}40`,
          },
        },
      }}
    >
      <DialogTitle component='div'
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          pb: 2,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Box
            sx={{
              display: "inline-flex",
              p: 2,
              borderRadius: "50%",
              backgroundColor: `${benefit.color}20`,
              color: benefit.color,
            }}
          >
            {benefit.icon}
          </Box>
          <Box>
            <Typography
              variant="h4"
              sx={{ color: benefit.color, fontWeight: "bold" }}
            >
              {benefit.title}
            </Typography>
            <Chip
              label={benefit.category}
              size="small"
              sx={{
                backgroundColor: benefit.color,
                color: "#fff",
                mt: 1,
              }}
            />
          </Box>
        </Box>
        <IconButton onClick={() => handleCloseDialog()} sx={{ color: "#fff" }}>
          <Close />
        </IconButton>
      </DialogTitle>

      <DialogContent>
        <Grid container spacing={3}>
          <Grid size={{ xs: 12 }}>
            <Typography variant="h6" sx={{ color: benefit.color, mb: 2 }}>
              Descripción Completa
            </Typography>
            <Typography variant="body1" sx={{ lineHeight: 1.7, mb: 3 }}>
              {benefit.detailedDesc}
            </Typography>
          </Grid>

          {/* Características */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Paper
              sx={{
                p: 3,
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                borderRadius: 2,
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  color: benefit.color,
                  mb: 2,
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <CheckCircle sx={{ mr: 1 }} />
                    Características Incluidas
              </Typography>
              <List>
                {benefit.features.map((feature) => (
                  <ListItem key={feature.id} disablePadding>
                    <ListItemIcon>
                      <CheckCircle sx={{ color: "#4CAF50", fontSize: 20 }} />
                    </ListItemIcon>
                    <ListItemText
                      primary={feature.label}
                      sx={{
                        color: "#fff",
                        "& .MuiListItemText-primary": {
                          fontSize: "0.9rem",
                        },
                      }}
                    />
                  </ListItem>
                ))}
              </List>
            </Paper>
          </Grid>

          {/* Estadísticas detalladas */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Paper
              sx={{
                p: 3,
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                borderRadius: 2,
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  color: benefit.color,
                  mb: 2,
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Timeline sx={{ mr: 1 }} />
                Estadísticas y Resultados
              </Typography>

              <Box sx={{ mb: 3 }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mb: 1,
                  }}
                >
                  <Typography sx={{ color: "#fff" }} variant="body2">
                    Satisfacción del cliente
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: benefit.color,
                      fontWeight: "bold",
                    }}
                  >
                    {benefit.stats.satisfaction}%
                  </Typography>
                </Box>
                <LinearProgress
                  variant="determinate"
                  value={benefit.stats.satisfaction}
                  sx={{
                    height: 8,
                    borderRadius: 4,
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    "& .MuiLinearProgress-bar": {
                      backgroundColor: benefit.color,
                      borderRadius: 4,
                    },
                  }}
                />
              </Box>

              <Box sx={{ mb: 3 }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mb: 1,
                  }}
                >
                  <Typography sx={{ color: "#fff" }} variant="body2">
                    Efectividad promedio
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: benefit.color,
                      fontWeight: "bold",
                    }}
                  >
                    {benefit.stats.avgResults}%
                  </Typography>
                </Box>
                <LinearProgress
                  variant="determinate"
                  value={benefit.stats.avgResults}
                  sx={{
                    height: 8,
                    borderRadius: 4,
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    "& .MuiLinearProgress-bar": {
                      backgroundColor: "#4CAF50",
                      borderRadius: 4,
                    },
                  }}
                />
              </Box>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  p: 2,
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                  borderRadius: 1,
                }}
              >
                <Typography sx={{ color: "#fff" }} variant="body2">
                  Tiempo para ver resultados:
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: benefit.color,
                    fontWeight: "bold",
                  }}
                >
                  {benefit.stats.timeFrame}
                </Typography>
              </Box>
            </Paper>
          </Grid>

          {/* Testimonial */}
          <Grid size={{ xs: 12 }}>
            <Paper
              sx={{
                p: 3,
                backgroundColor: `${benefit.color}10`,
                border: `1px solid ${benefit.color}40`,
                borderRadius: 2,
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  color: benefit.color,
                  mb: 2,
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Star sx={{ mr: 1 }} />
                Testimonio de Cliente
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "#fff",
                  fontStyle: "italic",
                  mb: 2,
                  lineHeight: 1.6,
                }}
              >
                {benefit.testimonial.text}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography
                  variant="subtitle2"
                  sx={{
                    color: benefit.color,
                    fontWeight: "bold",
                  }}
                >
                  - {benefit.testimonial.author}
                </Typography>
                <Box sx={{ display: "flex" }}>
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      sx={{
                        fontSize: 16,
                        color:
                          star <= benefit.testimonial.rating
                            ? ORANGE_COLOR
                            : "rgba(255,255,255,0.3)",
                      }}
                    />
                  ))}
                </Box>
              </Box>
            </Paper>
          </Grid>

          {/* Servicios relacionados y precio */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography variant="h6" sx={{ color: benefit.color, mb: 2 }}>
              Servicios Relacionados
            </Typography>
            <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap", mb: 2 }}>
              {benefit.relatedServices.map((service) => (
                <Chip
                  key={service.id}
                  label={service.label}
                  size="small"
                  sx={{
                    backgroundColor: `${benefit.color}20`,
                    color: "#fff",
                    border: `1px solid ${benefit.color}40`,
                  }}
                />
              ))}
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Typography variant="h6" sx={{ color: benefit.color, mb: 2 }}>
              Precio
            </Typography>
            <Box
              sx={{
                p: 2,
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                borderRadius: 1,
                border: `1px solid ${benefit.color}40`,
              }}
            >
              <Typography
                variant="h6"
                sx={{ color: benefit.color, fontWeight: "bold" }}
              >
                {benefit.pricing}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </DialogContent>

      <DialogActions sx={{ p: 3, gap: 1 }}>
        <Button
          variant="outlined"
          sx={{
            borderColor: benefit.color,
            color: benefit.color,
            "&:hover": {
              backgroundColor: `${benefit.color}20`,
              borderColor: benefit.color,
            },
          }}
        >
          Más información
        </Button>
        <Button
          variant="contained"
          sx={{
            backgroundColor: benefit.color,
            "&:hover": {
              backgroundColor: benefit.color,
              filter: "brightness(0.9)",
              transform: "translateY(-1px)",
              boxShadow: 3,
            },
          }}
        >
          Comenzar ahora
        </Button>
      </DialogActions>
    </Dialog>
  );
};

BenefitDetails.propTypes = {
  benefit: PropTypes.shape({
    id: PropTypes.number.isRequired,
    icon: PropTypes.element.isRequired,
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    detailedDesc: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    pricing: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      satisfaction: PropTypes.number.isRequired,
      avgResults: PropTypes.number.isRequired,
      timeFrame: PropTypes.string.isRequired
    }).isRequired,
    features: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired
      })
    ).isRequired,
    testimonial: PropTypes.shape({
      text: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired
    }).isRequired,
    relatedServices: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired
      })
    ).isRequired
  }).isRequired,
  dialogOpen: PropTypes.bool.isRequired,
  handleCloseDialog: PropTypes.func.isRequired
};

export default BenefitDetails;
