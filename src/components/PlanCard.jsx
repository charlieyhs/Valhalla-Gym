import {
  CardMembership,
  CheckCircle,
  Close,
  EmojiEvents,
  Info,
  LocalOffer,
  Security,
  WhatsApp,
} from "@mui/icons-material";
import {
  Box,
  Button,
  CardContent,
  Chip,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  Grid,
  IconButton,
  LinearProgress,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Tooltip,
  Typography,
  Zoom,
} from "@mui/material";
import { useState } from "react";
import { useAlert } from "../hooks/useAlert";
import { formatPrice } from "../utils/NumbersUtil";
import PropTypes from "prop-types";

const PlanCard = ({ plan, index, isAnnual }) => {
  const { showAlert } = useAlert();
  const [dialogOpen, setDialogOpen] = useState(false);
  const [paymentDialogOpen, setPaymentDialogOpen] = useState(false);

  const handleClosePaymentDialog = () => {
    setPaymentDialogOpen(false);
  };
  const handleOpenDialog = () => {
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  const handlePaymentDialog = () => {
    setDialogOpen(false); // Cerrar el dialog de detalles primero
    setPaymentDialogOpen(true);
  };

  const handleSelectPlan = (plan) => {
    showAlert(`¡Excelente elección! Plan ${plan.nombre} seleccionado.`);
    handlePaymentDialog(plan);
  };

  const calculateSavings = (plan) => {
    const precioActual = isAnnual ? plan.precio.anual : plan.precio.mensual;
    const precioOriginal = isAnnual
      ? plan.precioOriginal.anual
      : plan.precioOriginal.mensual;
    return precioOriginal - precioActual;
  };

  return (
    <div>
      <Zoom in={true} style={{ transitionDelay: `${index * 150}ms` }}>
        <Paper
          elevation={plan.popular ? 12 : 6}
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            position: "relative",
            background: plan.popular
              ? `linear-gradient(145deg, ${plan.color}10, #1a1a1a)`
              : "linear-gradient(145deg, #1a1a1a 0%, #2d2d2d 100%)",
            border: plan.popular
              ? `3px solid ${plan.color}`
              : "1px solid rgba(255, 255, 255, 0.1)",
            borderRadius: 3,
            overflow: "hidden",
            transform: plan.popular ? "scale(1.05)" : "none",
            transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
            "&:hover": {
              transform: plan.popular ? "scale(1.08)" : "scale(1.03)",
              boxShadow: `0 25px 50px rgba(${plan.color
                .replace("#", "")
                .match(/.{2}/g)
                .map((x) => parseInt(x, 16))
                .join(", ")}, 0.3)`,
              border: `2px solid ${plan.color}`,
            },
          }}
        >
          {/* Badges superiores */}
          <Box
            sx={{ position: "absolute", top: 0, left: 0, right: 0, zIndex: 2 }}
          >
            {plan.popular && (
              <Chip
                label="MÁS POPULAR"
                sx={{
                  position: "absolute",
                  top: -12,
                  left: "50%",
                  transform: "translateX(-50%)",
                  backgroundColor: plan.color,
                  color: "#fff",
                  fontWeight: "bold",
                  fontSize: "0.75rem",
                  "&:before": {
                    content: '""',
                    position: "absolute",
                    top: "100%",
                    left: 0,
                    right: 0,
                    height: 10,
                    background: `linear-gradient(to bottom, ${plan.color}, transparent)`,
                  },
                }}
              />
            )}

            {plan.recomendado && (
              <Chip
                icon={<EmojiEvents />}
                label="RECOMENDADO"
                size="small"
                sx={{
                  position: "absolute",
                  top: plan.popular ? 25 : -8,
                  right: 16,
                  backgroundColor: "#FF9800",
                  color: "#fff",
                  fontWeight: "bold",
                }}
              />
            )}

            {calculateSavings(plan) > 0 && (
              <Chip
                icon={<LocalOffer />}
                label={`Ahorra ${formatPrice(calculateSavings(plan))}`}
                size="small"
                sx={{
                  position: "absolute",
                  top: plan.popular
                    ? plan.recomendado
                      ? 55
                      : 25
                    : plan.recomendado
                    ? 25
                    : -8,
                  left: 16,
                  backgroundColor: "#4CAF50",
                  color: "#fff",
                  fontWeight: "bold",
                }}
              />
            )}
          </Box>

          <CardContent
            sx={{
              p: 4,
              pt: plan.popular ? 6 : plan.recomendado ? 5 : 3,
              color: "#fff",
              textAlign: "center",
              flexGrow: 1,
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* Header del plan */}
            <Box sx={{ mb: 3 }}>
              <Box sx={{ color: plan.color, mb: 1 }}>{plan.icon}</Box>
              <Typography
                variant="h4"
                component="h3"
                sx={{
                  color: plan.color,
                  fontWeight: "bold",
                  mb: 1,
                }}
              >
                {plan.nombre}
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "#fff", opacity: 0.8, mb: 2 }}
              >
                {plan.descripcion}
              </Typography>
            </Box>

            {/* Pricing */}
            <Box sx={{ mb: 4 }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "baseline",
                  mb: 1,
                }}
              >
                <Typography
                  variant="h3"
                  component="div"
                  sx={{
                    fontWeight: "bold",
                    color: plan.color,
                  }}
                >
                  {formatPrice(
                    isAnnual ? plan.precio.anual : plan.precio.mensual
                  )}
                </Typography>
                <Typography
                  variant="h6"
                  component="span"
                  sx={{ color: "#fff", opacity: 0.7, ml: 1 }}
                >
                  {isAnnual ? '/año' : '/mes'}
                </Typography>
              </Box>

              {calculateSavings(plan) > 0 && (
                <Box>
                  <Typography
                    variant="body2"
                    sx={{
                      textDecoration: "line-through",
                      color: "#fff",
                      opacity: 0.6,
                      mb: 0.5,
                    }}
                  >
                    Antes:{" "}
                    {formatPrice(
                      isAnnual
                        ? plan.precioOriginal.anual
                        : plan.precioOriginal.mensual
                    )}
                  </Typography>
                  <Chip
                    label={`${
                      isAnnual ? plan.ahorro.anual : plan.ahorro.mensual
                    }% OFF`}
                    size="small"
                    sx={{
                      backgroundColor: "#4CAF50",
                      color: "#fff",
                      fontWeight: "bold",
                    }}
                  />
                </Box>
              )}

              {plan.valorExtra && (
                <Typography
                  variant="caption"
                  sx={{ color: "#4CAF50", display: "block", mt: 1 }}
                >
                  Valor real:{" "}
                  {formatPrice(
                    plan.valorExtra +
                      (isAnnual ? plan.precio.anual : plan.precio.mensual)
                  )}
                </Typography>
              )}
            </Box>

            {/* Beneficios principales (primeros 6) */}
            <Box sx={{ textAlign: "left", mb: 3, flexGrow: 1 }}>
              {plan.beneficios.slice(0, 6).map((beneficio, idx) => (
                <Box
                  key={idx}
                  sx={{ display: "flex", alignItems: "flex-start", mb: 1.5 }}
                >
                  <CheckCircle
                    sx={{
                      color: beneficio.premium ? plan.color : "#4CAF50",
                      mr: 1.5,
                      fontSize: 20,
                      mt: 0.2,
                      filter: beneficio.premium
                        ? "drop-shadow(0 0 4px currentColor)"
                        : "none",
                    }}
                  />
                  <Typography
                    variant="body2"
                    sx={{
                      color: "#fff",
                      opacity: beneficio.premium ? 1 : 0.9,
                      fontWeight: beneficio.premium ? "bold" : "normal",
                      lineHeight: 1.4,
                    }}
                  >
                    {beneficio.texto}
                  </Typography>
                </Box>
              ))}

              {plan.beneficios.length > 6 && (
                <Button
                  size="small"
                  onClick={() => handleOpenDialog(plan)}
                  sx={{
                    color: plan.color,
                    textTransform: "none",
                    p: 0,
                    minWidth: "auto",
                    "&:hover": {
                      backgroundColor: "transparent",
                      color: "#fff",
                    },
                  }}
                >
                  Ver {plan.beneficios.length - 6} beneficios más...
                </Button>
              )}
            </Box>

            {/* Estadísticas rápidas */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-around",
                mb: 3,
                p: 2,
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                borderRadius: 2,
              }}
            >
              <Box sx={{ textAlign: "center" }}>
                <Typography
                  variant="h6"
                  sx={{ color: plan.color, fontWeight: "bold" }}
                >
                  {plan.includes.sedes === "Todas" ? "2" : plan.includes.sedes}
                </Typography>
                <Typography
                  variant="caption"
                  sx={{ color: "#fff", opacity: 0.7 }}
                >
                  {plan.includes.sedes === "Todas" ? "Sedes" : "Sede"}
                </Typography>
              </Box>
              <Box sx={{ textAlign: "center" }}>
                <Typography
                  variant="h6"
                  sx={{ color: plan.color, fontWeight: "bold" }}
                >
                  {plan.includes.clases === "Ilimitadas"
                    ? "∞"
                    : plan.includes.clases}
                </Typography>
                <Typography
                  variant="caption"
                  sx={{ color: "#fff", opacity: 0.7 }}
                >
                  Clases
                </Typography>
              </Box>
              <Box sx={{ textAlign: "center" }}>
                <Typography
                  variant="h6"
                  sx={{ color: plan.color, fontWeight: "bold" }}
                >
                  {plan.satisfaccion}%
                </Typography>
                <Typography
                  variant="caption"
                  sx={{ color: "#fff", opacity: 0.7 }}
                >
                  Satisfacción
                </Typography>
              </Box>
            </Box>

            {/* Garantía */}
            <Box sx={{ mb: 3 }}>
              <Chip
                icon={<Security />}
                label={`Garantía ${plan.garantia}`}
                size="small"
                variant="outlined"
                sx={{
                  borderColor: plan.color,
                  color: plan.color,
                  mb: 2,
                }}
              />
            </Box>

            {/* Botones de acción */}
            <Box sx={{ display: "flex", gap: 1 }}>
              <Button
                variant={plan.popular ? "contained" : "outlined"}
                fullWidth
                size="large"
                onClick={() => handleSelectPlan(plan)}
                sx={{
                  backgroundColor: plan.popular ? plan.color : "transparent",
                  color: plan.popular ? "#fff" : plan.color,
                  borderColor: plan.color,
                  fontWeight: "bold",
                  py: 1.5,
                  borderRadius: 2,
                  textTransform: "none",
                  "&:hover": {
                    backgroundColor: plan.color,
                    color: "#fff",
                    transform: "translateY(-2px)",
                    boxShadow: `0 8px 25px rgba(${plan.color
                      .replace("#", "")
                      .match(/.{2}/g)
                      .map((x) => parseInt(x, 16))
                      .join(", ")}, 0.4)`,
                  },
                }}
              >
                Elegir Plan
              </Button>

              <Tooltip title="Ver detalles completos">
                <IconButton
                  onClick={() => handleOpenDialog(plan)}
                  sx={{
                    color: plan.color,
                    border: `1px solid ${plan.color}40`,
                    borderRadius: 2,
                    "&:hover": {
                      backgroundColor: `${plan.color}20`,
                    },
                  }}
                >
                  <Info />
                </IconButton>
              </Tooltip>
            </Box>

            {/* Barra de satisfacción */}
            <Box sx={{ mt: 2 }}>
              <LinearProgress
                variant="determinate"
                value={plan.satisfaccion}
                sx={{
                  height: 6,
                  borderRadius: 3,
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  "& .MuiLinearProgress-bar": {
                    backgroundColor: plan.color,
                    borderRadius: 3,
                  },
                }}
              />
            </Box>
          </CardContent>
        </Paper>
      </Zoom>

      <Dialog
        open={dialogOpen}
        onClose={handleCloseDialog}
        maxWidth="lg"
        fullWidth
        TransitionComponent={Zoom}
        transitionDuration={400}
        PaperProps={{
          sx: {
            background: "linear-gradient(145deg, #1a1a1a 0%, #2d2d2d 100%)",
            color: "#fff",
            borderRadius: 3,
            border: `1px solid ${plan?.color}40`,
          },
        }}
      >
        {dialogOpen && (
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
                <Box sx={{ color: plan.color }}>
                  {plan.icon}
                </Box>
                <Box>
                  <Typography
                    variant="h4"
                    sx={{ color: plan.color, fontWeight: "bold" }}
                  >
                    Plan {plan.nombre}
                  </Typography>
                  <Typography variant="subtitle1" sx={{ opacity: 0.8 }}>
                    {plan.descripcion}
                  </Typography>
                </Box>
              </Box>
              <IconButton onClick={handleCloseDialog} sx={{ color: "#fff" }}>
                <Close />
              </IconButton>
            </DialogTitle>

            <DialogContent>
              <Grid container spacing={3}>
                {/* Precio detallado */}
                <Grid size={{ xs: 12, md: 4 }}>
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
                        color: plan.color,
                        mb: 2,
                        textAlign: "center",
                      }}
                    >
                      Precio y Ahorros
                    </Typography>

                    <Box sx={{ textAlign: "center", mb: 2 }}>
                      <Typography
                        variant="h4"
                        sx={{ color: plan.color, fontWeight: "bold" }}
                      >
                        {formatPrice(
                          isAnnual
                            ? plan.precio.anual
                            : plan.precio.mensual
                        )}
                      </Typography>
                      <Typography variant="body2" sx={{ opacity: 0.8 }}>
                        {isAnnual ? '/año' : '/mes'}
                      </Typography>
                    </Box>

                    {calculateSavings(plan) > 0 && (
                      <Box sx={{ textAlign: "center", mb: 2 }}>
                        <Typography
                          variant="body2"
                          sx={{
                            textDecoration: "line-through",
                            opacity: 0.6,
                            mb: 1,
                          }}
                        >
                          Precio regular:{" "}
                          {formatPrice(
                            isAnnual
                              ? plan.precioOriginal.anual
                              : plan.precioOriginal.mensual
                          )}
                        </Typography>
                        <Chip
                          label={`Ahorras ${formatPrice(
                            calculateSavings(plan)
                          )}`}
                          sx={{
                            backgroundColor: "#4CAF50",
                            color: "#fff",
                            fontWeight: "bold",
                          }}
                        />
                      </Box>
                    )}

                    <Divider
                      sx={{ my: 2, borderColor: "rgba(255, 255, 255, 0.1)" }}
                    />

                    <Box sx={{ textAlign: "center" }}>
                      <Typography variant="body2" sx={{ opacity: 0.8, mb: 1 }}>
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
                <Grid size={{ xs: 12, md: 8 }}>
                  <Paper
                    sx={{
                      p: 3,
                      backgroundColor: "rgba(255, 255, 255, 0.05)",
                      borderRadius: 2,
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{ color: plan.color, mb: 2 }}
                    >
                      Beneficios Completos
                    </Typography>

                    <List>
                      {plan.beneficios.map((beneficio, index) => (
                        <ListItem key={index} disablePadding sx={{ mb: 1 }}>
                          <ListItemIcon>
                            <CheckCircle
                              sx={{
                                color: beneficio.premium
                                  ? plan.color
                                  : "#4CAF50",
                                fontSize: 20,
                                filter: beneficio.premium
                                  ? "drop-shadow(0 0 4px currentColor)"
                                  : "none",
                              }}
                            />
                          </ListItemIcon>
                          <ListItemText
                            primary={beneficio.texto}
                            sx={{
                              color: "#fff",
                              "& .MuiListItemText-primary": {
                                fontWeight: beneficio.premium
                                  ? "bold"
                                  : "normal",
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
                        <Divider
                          sx={{
                            my: 2,
                            borderColor: "rgba(255, 255, 255, 0.1)",
                          }}
                        />
                        <Typography
                          variant="subtitle2"
                          sx={{ color: "#FF9800", mb: 1 }}
                        >
                          Limitaciones:
                        </Typography>
                        {plan.limitaciones.map((limitacion, index) => (
                          <Typography
                            key={index}
                            variant="body2"
                            sx={{ color: "#fff", opacity: 0.7, mb: 0.5 }}
                          >
                            • {limitacion}
                          </Typography>
                        ))}
                      </>
                    )}
                  </Paper>
                </Grid>

                {/* Target audience */}
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
                      sx={{ color: plan.color, mb: 2 }}
                    >
                      Ideal para:
                    </Typography>
                    <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
                      {plan.targetAudience.map((target, index) => (
                        <Chip
                          key={index}
                          label={target}
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
                      sx={{ color: plan.color, mb: 2 }}
                    >
                      Promociones Activas:
                    </Typography>
                    {plan.promociones.map((promocion, index) => (
                      <Box
                        key={index}
                        sx={{ display: "flex", alignItems: "center", mb: 1 }}
                      >
                        <LocalOffer
                          sx={{ color: "#4CAF50", mr: 1, fontSize: 18 }}
                        />
                        <Typography variant="body2" sx={{ color: "#fff" }}>
                          {promocion}
                        </Typography>
                      </Box>
                    ))}
                  </Paper>
                </Grid>
              </Grid>
            </DialogContent>

            <DialogActions sx={{ p: 3, gap: 1 }}>
              <Button onClick={handleCloseDialog} sx={{ color: "#fff" }}>
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
                onClick={() => handleSelectPlan(plan)}
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

      {/* Dialog de pago/selección */}
      <Dialog
        open={paymentDialogOpen}
        onClose={handleClosePaymentDialog}
        maxWidth="sm"
        fullWidth
        PaperProps={{
          sx: {
            background: "linear-gradient(145deg, #1a1a1a 0%, #2d2d2d 100%)",
            color: "#fff",
            borderRadius: 3,
            border: `1px solid ${plan?.color}40`,
          },
        }}
      >
        {plan && (
          <>
            <DialogTitle component='div' sx={{ textAlign: "center" }}>
              <Box sx={{ color: plan.color, mb: 2 }}>
                {plan.icon}
              </Box>
              <Typography
                variant="h5"
                sx={{ color: plan.color, fontWeight: "bold" }}
              >
                ¡Plan {plan.nombre} Seleccionado!
              </Typography>
            </DialogTitle>

            <DialogContent sx={{ textAlign: "center" }}>
              <Typography variant="body1" sx={{ mb: 3, color: "#fff" }}>
                Has elegido el plan perfecto para tus objetivos.
              </Typography>

              <Box
                sx={{
                  p: 3,
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                  borderRadius: 2,
                  mb: 3,
                }}
              >
                <Typography
                  variant="h4"
                  sx={{ color: plan.color, fontWeight: "bold", mb: 1 }}
                >
                  {formatPrice(
                    isAnnual
                      ? plan.precio.anual
                      : plan.precio.mensual
                  )}
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.8 }}>
                  {isAnnual ? '/año' : '/mes'}
                </Typography>
              </Box>

              <Typography
                variant="body2"
                sx={{ color: "#fff", opacity: 0.8, mb: 2 }}
              >
                Próximos pasos:
              </Typography>

              <List sx={{ textAlign: "left" }}>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircle sx={{ color: "#4CAF50" }} />
                  </ListItemIcon>
                  <ListItemText
                    primary="Contacta con nosotros por WhatsApp"
                    sx={{ color: "#fff" }}
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircle sx={{ color: "#4CAF50" }} />
                  </ListItemIcon>
                  <ListItemText
                    primary="Agenda tu evaluación física gratuita"
                    sx={{ color: "#fff" }}
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircle sx={{ color: "#4CAF50" }} />
                  </ListItemIcon>
                  <ListItemText
                    primary="¡Comienza tu transformación!"
                    sx={{ color: "#fff" }}
                  />
                </ListItem>
              </List>
            </DialogContent>

            <DialogActions sx={{ justifyContent: "center", p: 3, gap: 2 }}>
              <Button
                variant="contained"
                size="large"
                startIcon={<WhatsApp />}
                onClick={() =>
                  window.open(
                    `https://wa.me/571234567890?text=Hola!%20Quiero%20inscribirme%20al%20plan%20${plan.nombre}%20de%20Valhalla%20Gym`
                  )
                }
                sx={{
                  backgroundColor: "#25D366",
                  px: 3,
                  py: 1.5,
                  "&:hover": {
                    backgroundColor: "#20b858",
                  },
                }}
              >
                Continuar por WhatsApp
              </Button>
              <Button onClick={handleClosePaymentDialog} sx={{ color: "#fff" }}>
                Cerrar
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>
    </div>
  );
};

const planPropType = PropTypes.shape({
    id: PropTypes.number.isRequired,
    nombre: PropTypes.string.isRequired,
    precio: PropTypes.shape({
      mensual: PropTypes.number.isRequired,
      anual: PropTypes.number.isRequired
    }).isRequired,
    precioOriginal: PropTypes.shape({
      mensual: PropTypes.number,
      anual: PropTypes.number
    }),
    ahorro: PropTypes.shape({
      mensual: PropTypes.number,
      anual: PropTypes.number
    }),
    popular: PropTypes.bool,
    recomendado: PropTypes.bool,
    color: PropTypes.string.isRequired,
    icon: PropTypes.element.isRequired,
    descripcion: PropTypes.string.isRequired,
    beneficios: PropTypes.arrayOf(
      PropTypes.shape({
        texto: PropTypes.string.isRequired,
        incluido: PropTypes.bool,
        premium: PropTypes.bool
      })
    ).isRequired,
    limitaciones: PropTypes.arrayOf(PropTypes.string),
    targetAudience: PropTypes.arrayOf(PropTypes.string).isRequired,
    garantia: PropTypes.string.isRequired,
    includes: PropTypes.shape({
      evaluacion: PropTypes.bool,
      nutricion: PropTypes.bool,
      entrenador: PropTypes.bool,
      clases: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      invitados: PropTypes.number,
      sedes: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    }).isRequired,
    promociones: PropTypes.arrayOf(PropTypes.string).isRequired,
    satisfaccion: PropTypes.number.isRequired,
    valorExtra: PropTypes.number,
    periodo: PropTypes.string // Nota: Esta propiedad no aparece en tu objeto, pero se usa en el componente
  }
);

PlanCard.propTypes = {
  plan: planPropType.isRequired,
  index: PropTypes.number.isRequired,
  isAnnual: PropTypes.bool.isRequired
};

export default PlanCard;
