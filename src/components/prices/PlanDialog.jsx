import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  Typography,
  Box,
  Grid,
  Paper,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Chip,
  Button,
} from "@mui/material";
import { Close, Security, LocalOffer, CardMembership, WhatsApp, CheckCircle } from "../../icons/icons";;
import { Zoom } from "@mui/material";
import { formatPrice } from "../../utils/NumbersUtil";
import PropTypes from "prop-types";

const PlanDialog = ({ plan, isAnnual, open, onClose, onSelectPlan, calculateSavings }) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="lg"
      fullWidth
      slots={{
        transition: Zoom
      }}
      transitionDuration={400}
      slotProps={{
        paper: {
          sx: {
            background: "linear-gradient(145deg, #1a1a1a 0%, #2d2d2d 100%)",
            color: "#fff",
            borderRadius: 3,
            border: `1px solid ${plan?.color}40`,
          },
        }
      }}
    >
      {open && (
        <>
          <DialogTitle
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              pb: 2,
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Box sx={{ color: plan.color }}>{plan.icon}</Box>
              <Box>
                <Typography variant="h4" sx={{ color: plan.color, fontWeight: "bold" }}>
                  Plan {plan.nombre}
                </Typography>
                <Typography variant="subtitle1" sx={{ opacity: 0.8 }}>
                  {plan.descripcion}
                </Typography>
              </Box>
            </Box>
            <IconButton onClick={onClose} sx={{ color: "#fff" }}>
              <Close />
            </IconButton>
          </DialogTitle>

          <DialogContent>
            <Grid container spacing={3}>
              {/* Precio detallado */}
              <Grid item xs={12} md={4}>
                <Paper
                  sx={{
                    p: 3,
                    backgroundColor: "rgba(255, 255, 255, 0.05)",
                    borderRadius: 2,
                  }}
                >
                  <Typography variant="h6" sx={{ color: plan.color, mb: 2, textAlign: "center" }}>
                    Precio y Ahorros
                  </Typography>

                  <Box sx={{ textAlign: "center", mb: 2 }}>
                    <Typography variant="h4" sx={{ color: plan.color, fontWeight: "bold" }}>
                      {formatPrice(isAnnual ? plan.precio.anual : plan.precio.mensual)}
                    </Typography>
                    <Typography variant="body2" sx={{ opacity: 0.8, color: '#fff' }}>
                      {isAnnual ? '/año' : '/mes'}
                    </Typography>
                  </Box>

                  {calculateSavings(plan, isAnnual) > 0 && (
                    <Box sx={{ textAlign: "center", mb: 2 }}>
                      <Typography
                        variant="body2"
                        sx={{
                          textDecoration: "line-through",
                          opacity: 0.6,
                          mb: 1,
                          color: '#fff'
                        }}
                      >
                        Precio regular:{" "}
                        {formatPrice(
                          isAnnual ? plan.precioOriginal.anual : plan.precioOriginal.mensual
                        )}
                      </Typography>
                      <Chip
                        label={`Ahorras ${formatPrice(calculateSavings(plan, isAnnual))}`}
                        sx={{
                          backgroundColor: "#4CAF50",
                          color: "#fff",
                          fontWeight: "bold",
                        }}
                      />
                    </Box>
                  )}

                  <Divider sx={{ my: 2, borderColor: "rgba(255, 255, 255, 0.1)" }} />

                  <Box sx={{ textAlign: "center" }}>
                    <Typography variant="body2" sx={{ opacity: 0.8, mb: 1, color: '#fff' }}>
                      Garantía de satisfacción
                    </Typography>
                    <Chip
                      icon={<Security />}
                      label={plan.garantia}
                      size="small"
                      sx={{
                        borderColor: plan.color,
                        color: plan.color,
                      }}
                      variant="outlined"
                    />
                  </Box>
                </Paper>
              </Grid>

              {/* Todos los beneficios */}
              <Grid item xs={12} md={8}>
                <Paper
                  sx={{
                    p: 3,
                    backgroundColor: "rgba(255, 255, 255, 0.05)",
                    borderRadius: 2,
                  }}
                >
                  <Typography variant="h6" sx={{ color: plan.color, mb: 2 }}>
                    Beneficios Completos
                  </Typography>

                  <List>
                    {plan.beneficios.map((beneficio) => (
                      <ListItem key={beneficio.id} disablePadding sx={{ mb: 1 }}>
                        <ListItemIcon>
                          <CheckCircle
                            sx={{
                              color: beneficio.premium ? plan.color : "#4CAF50",
                              fontSize: 20,
                              filter: beneficio.premium ? "drop-shadow(0 0 4px currentColor)" : "none",
                            }}
                          />
                        </ListItemIcon>
                        <ListItemText
                          primary={beneficio.texto}
                          sx={{
                            color: "#fff",
                            "& .MuiListItemText-primary": {
                              fontWeight: beneficio.premium ? "bold" : "normal",
                              opacity: beneficio.premium ? 1 : 0.9,
                            },
                          }}
                        />
                        {beneficio.premium && (
                          <Chip
                            label="Premium"
                            size="small"
                            sx={{
                              backgroundColor: plan.color,
                              color: "#fff",
                              fontSize: "0.7rem",
                              height: 20,
                            }}
                          />
                        )}
                      </ListItem>
                    ))}
                  </List>

                  {plan.limitaciones.length > 0 && (
                    <>
                      <Divider sx={{ my: 2, borderColor: "rgba(255, 255, 255, 0.1)" }} />
                      <Typography variant="subtitle2" sx={{ color: "#FF9800", mb: 1 }}>
                        Limitaciones:
                      </Typography>
                      {plan.limitaciones.map((limitacion) => (
                        <Typography
                          key={limitacion.id}
                          variant="body2"
                          sx={{ color: "#fff", opacity: 0.7, mb: 0.5 }}
                        >
                          • {limitacion.label}
                        </Typography>
                      ))}
                    </>
                  )}
                </Paper>
              </Grid>

              {/* Target audience */}
              <Grid item xs={12} md={6}>
                <Paper
                  sx={{
                    p: 3,
                    backgroundColor: "rgba(255, 255, 255, 0.05)",
                    borderRadius: 2,
                  }}
                >
                  <Typography variant="h6" sx={{ color: plan.color, mb: 2 }}>
                    Ideal para:
                  </Typography>
                  <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
                    {plan.targetAudience.map((target) => (
                      <Chip
                        key={target.id}
                        label={target.label}
                        size="small"
                        sx={{
                          backgroundColor: `${plan.color}20`,
                          color: "#fff",
                          border: `1px solid ${plan.color}40`,
                        }}
                      />
                    ))}
                  </Box>
                </Paper>
              </Grid>

              {/* Promociones */}
              <Grid item xs={12} md={6}>
                <Paper
                  sx={{
                    p: 3,
                    backgroundColor: "rgba(255, 255, 255, 0.05)",
                    borderRadius: 2,
                  }}
                >
                  <Typography variant="h6" sx={{ color: plan.color, mb: 2 }}>
                    Promociones Activas:
                  </Typography>
                  {plan.promociones.map((promocion) => (
                    <Box key={promocion.id} sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                      <LocalOffer sx={{ color: "#4CAF50", mr: 1, fontSize: 18 }} />
                      <Typography variant="body2" sx={{ color: "#fff" }}>
                        {promocion.label}
                      </Typography>
                    </Box>
                  ))}
                </Paper>
              </Grid>
            </Grid>
          </DialogContent>

          <DialogActions sx={{ p: 3, gap: 1 }}>
            <Button onClick={onClose} sx={{ color: "#fff" }}>
              Cerrar
            </Button>
            <Button
              variant="outlined"
              startIcon={<WhatsApp />}
              onClick={() =>
                window.open(
                  `https://wa.me/571234567890?text=Hola!%20Me%20interesa%20el%20plan%20${plan.nombre}`
                )
              }
              sx={{
                borderColor: "#25D366",
                color: "#25D366",
                "&:hover": {
                  backgroundColor: "rgba(37, 211, 102, 0.1)",
                },
              }}
            >
              Consultar
            </Button>
            <Button
              variant="contained"
              startIcon={<CardMembership />}
              onClick={onSelectPlan}
              sx={{
                backgroundColor: plan.color,
                "&:hover": {
                  backgroundColor: plan.color,
                  filter: "brightness(0.9)",
                  transform: "translateY(-1px)",
                  boxShadow: 3,
                },
              }}
            >
              Seleccionar Plan
            </Button>
          </DialogActions>
        </>
      )}
    </Dialog>
  );
};
const planPropType = PropTypes.shape({
    id: PropTypes.number.isRequired,
    nombre: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    icon: PropTypes.element.isRequired,
    descripcion: PropTypes.string.isRequired,
    targetAudience: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired
        })
    ).isRequired,
    promociones: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired
        })
    ).isRequired,
    limitaciones: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired
        })
    ).isRequired,
    garantia: PropTypes.string.isRequired,
    beneficios: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            texto: PropTypes.string.isRequired,
            incluido: PropTypes.bool.isRequired,
            premium: PropTypes.bool.isRequired
        })
    ).isRequired,
    precio: PropTypes.shape({
        mensual: PropTypes.number.isRequired,
        anual: PropTypes.number.isRequired
    }).isRequired,
    precioOriginal: PropTypes.shape({
        mensual: PropTypes.number.isRequired,
        anual: PropTypes.number.isRequired
    }).isRequired
});

PlanDialog.propTypes = {
    plan: planPropType.isRequired,
    isAnnual: PropTypes.bool.isRequired,
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    onSelectPlan: PropTypes.func.isRequired,
    calculateSavings: PropTypes.func.isRequired,
};

export default PlanDialog;