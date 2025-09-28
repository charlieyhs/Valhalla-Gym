import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Grid,
  Typography,
  IconButton,
  Collapse,
  Divider,
  Skeleton,
  Tooltip,
} from "@mui/material";
import {
  CheckCircle,
  LocationOn,
  AccessTime,
  ExpandMore,
  Map,
  DirectionsWalk,
  Star,
  Phone,
  WhatsApp,
  Share,
} from "../../icons/icons";;
import { useState } from "react";
import { ORANGE_COLOR } from "../../constants/colors";
import { useAlert } from "../../hooks/useAlert";
import { ubicaciones } from "../../data/locations";

const Locations = () => {
  const [expandedCards, setExpandedCards] = useState({});
  const [loadingMap, setLoadingMap] = useState({});
  const { showAlert } = useAlert();

  const handleExpandCard = (id) => {
    setExpandedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleViewMap = async (ubicacion) => {
    setLoadingMap((prev) => ({ ...prev, [ubicacion.id]: true }));

    setTimeout(() => {
      setLoadingMap((prev) => ({ ...prev, [ubicacion.id]: false }));
      const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
        ubicacion.direccion
      )}`;
      window.open(mapsUrl, "_blank");
    }, 1000);
  };

  const handleCall = (telefono) => {
    window.open(`tel:${telefono}`);
  };

  const handleWhatsApp = (whatsapp, nombre) => {
    const mensaje = encodeURIComponent(
      `Hola! Me interesa información sobre el gym ${nombre}`
    );
    window.open(`https://wa.me/${whatsapp.replace(/\D/g, "")}?text=${mensaje}`);
  };

  const handleShare = async (ubicacion) => {
    if (!navigator.share) {
      try {
        await navigator.share({
          title: `${ubicacion.nombre} - Valhalla Gym`,
          text: `Conoce nuestro gym en ${ubicacion.zona}`,
          url: window.location.href,
        });
      } catch (error) {
        console.log("Error sharing:", error);
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      showAlert("Enlace copiado al portapapeles");
    }
  };

  const getOcupacionColor = (ocupacion, capacidad) => {
    const porcentaje = (ocupacion / capacidad) * 100;
    if (porcentaje < 50) return "success";
    if (porcentaje < 80) return "warning";
    return "error";
  };

  const getOcupacionText = (ocupacion, capacidad) => {
    const porcentaje = Math.round((ocupacion / capacidad) * 100);
    if (porcentaje < 50) return `Poco ocupado (${porcentaje}%)`;
    if (porcentaje < 80) return `Moderadamente ocupado (${porcentaje}%)`;
    return `Muy ocupado (${porcentaje}%)`;
  };

  return (
    <>
      <Box sx={{ textAlign: "center", mb: 6 }}>
        <Typography
          variant="h3"
          component="h2"
          gutterBottom
          sx={{
            color: ORANGE_COLOR,
            fontWeight: "bold",
            mb: 2,
            background: `linear-gradient(45deg, ${ORANGE_COLOR}, #ff6b35)`,
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Nuestras Ubicaciones
        </Typography>
        <Typography
          variant="h6"
          sx={{
            mb: 2,
            color: "#fff",
            opacity: 0.9,
          }}
        >
          Encuentra el gym más cercano a ti
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: "#fff",
            opacity: 0.7,
            maxWidth: 600,
            mx: "auto",
          }}
        >
          Dos ubicaciones estratégicas en Bogotá con las mejores instalaciones y
          equipos de última generación
        </Typography>
      </Box>

      <Grid container spacing={4} sx={{ mb: 4 }}>
        {ubicaciones.map((ubicacion) => (
          <Grid size={{ xs: 12, lg: 6 }} key={ubicacion.id}>
            <Card
              sx={{
                height: "fit-content",
                background: "linear-gradient(145deg, #1a1a1a 0%, #2d2d2d 100%)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                borderRadius: 3,
                overflow: "hidden",
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                "&:hover": {
                  transform: "translateY(-8px)",
                  boxShadow: `0 20px 40px rgba(${ORANGE_COLOR.replace("#", "")
                    .match(/.{2}/g)
                    .map((x) => parseInt(x, 16))
                    .join(", ")}, 0.2)`,
                  border: `1px solid ${ORANGE_COLOR}40`,
                },
              }}
            >
              <Box sx={{ position: "relative" }}>
                <CardMedia
                  component="img"
                  height="220"
                  image={ubicacion.imagen}
                  alt={ubicacion.nombre}
                  sx={{
                    objectFit: "cover",
                    transition: "transform 0.3s ease",
                  }}
                  loading="lazy"
                />

                {/* Overlay con información rápida */}
                <Box
                  sx={{
                    position: "absolute",
                    top: 12,
                    left: 12,
                    display: "flex",
                    gap: 1,
                  }}
                >
                  <Chip
                    icon={<Star sx={{ fontSize: 16 }} />}
                    label={ubicacion.rating}
                    size="small"
                    sx={{
                      backgroundColor: "rgba(0, 0, 0, 0.8)",
                      color: "#fff",
                      border: `1px solid ${ORANGE_COLOR}`,
                    }}
                  />
                  <Chip
                    icon={<DirectionsWalk sx={{ fontSize: 16 }} />}
                    label={ubicacion.distancia}
                    size="small"
                    sx={{
                      backgroundColor: "rgba(0, 0, 0, 0.8)",
                      color: "#fff",
                    }}
                  />
                </Box>

                <IconButton
                  onClick={() => handleShare(ubicacion)}
                  sx={{
                    position: "absolute",
                    top: 12,
                    right: 12,
                    backgroundColor: "rgba(0, 0, 0, 0.6)",
                    color: "#fff",
                    "&:hover": {
                      backgroundColor: ORANGE_COLOR,
                    },
                  }}
                >
                  <Share />
                </IconButton>
              </Box>

              <CardContent sx={{ color: "#fff", p: 3 }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    mb: 2,
                  }}
                >
                  <Box>
                    <Typography
                      variant="h5"
                      component="h3"
                      sx={{ color: ORANGE_COLOR, fontWeight: "bold", mb: 0.5 }}
                    >
                      {ubicacion.nombre}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "#fff", opacity: 0.7 }}
                    >
                      {ubicacion.zona}
                    </Typography>
                  </Box>

                  <Chip
                    label={getOcupacionText(
                      ubicacion.ocupacionActual,
                      ubicacion.capacidad
                    )}
                    color={getOcupacionColor(
                      ubicacion.ocupacionActual,
                      ubicacion.capacidad
                    )}
                    size="small"
                    sx={{ fontSize: "0.75rem" }}
                  />
                </Box>

                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  <LocationOn
                    sx={{ mr: 1, color: ORANGE_COLOR, fontSize: 20 }}
                  />
                  <Typography variant="body1" sx={{ color: "#fff" }}>
                    {ubicacion.direccionCorta}
                  </Typography>
                </Box>

                {/* Información de contacto */}
                <Box sx={{ display: "flex", gap: 1, mb: 3 }}>
                  <Tooltip title="Llamar">
                    <IconButton
                      size="small"
                      onClick={() => handleCall(ubicacion.telefono)}
                      sx={{
                        backgroundColor: "rgba(76, 175, 80, 0.2)",
                        color: "#4CAF50",
                        "&:hover": {
                          backgroundColor: "#4CAF50",
                          color: "#fff",
                        },
                      }}
                    >
                      <Phone sx={{ fontSize: 18 }} />
                    </IconButton>
                  </Tooltip>

                  <Tooltip title="WhatsApp">
                    <IconButton
                      size="small"
                      onClick={() =>
                        handleWhatsApp(ubicacion.whatsapp, ubicacion.nombre)
                      }
                      sx={{
                        backgroundColor: "rgba(37, 211, 102, 0.2)",
                        color: "#25D366",
                        "&:hover": {
                          backgroundColor: "#25D366",
                          color: "#fff",
                        },
                      }}
                    >
                      <WhatsApp sx={{ fontSize: 18 }} />
                    </IconButton>
                  </Tooltip>
                </Box>

                {/* Horarios */}
                <Box sx={{ mb: 3 }}>
                  <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                    <AccessTime
                      sx={{ mr: 1, color: ORANGE_COLOR, fontSize: 18 }}
                    />
                    <Typography
                      variant="subtitle2"
                      sx={{ color: "#fff", fontWeight: "bold" }}
                    >
                      Horarios de atención
                    </Typography>
                  </Box>
                  <Box sx={{ pl: 3 }}>
                    <Typography
                      variant="body2"
                      sx={{ color: "#fff", opacity: 0.9, mb: 0.5 }}
                    >
                      <strong>Lun - Vie:</strong>{" "}
                      {ubicacion.horarios.lunesViernes}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "#fff", opacity: 0.9 }}
                    >
                      <strong>Sáb - Dom:</strong> {ubicacion.horarios.finSemana}
                    </Typography>
                  </Box>
                </Box>

                {/* Servicios con iconos */}
                <Box sx={{ mb: 3 }}>
                  <Typography
                    variant="subtitle2"
                    gutterBottom
                    sx={{ color: "#fff", fontWeight: "bold", mb: 2 }}
                  >
                    Servicios disponibles
                  </Typography>
                  <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
                    {ubicacion.servicios.slice(0, 4).map((servicio) => (
                      <Chip
                        key={servicio.id}
                        label={
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              gap: 0.5,
                            }}
                          >
                            <span>{servicio.icon}</span>
                            <span>{servicio.label}</span>
                          </Box>
                        }
                        size="small"
                        sx={{
                          backgroundColor: `${ORANGE_COLOR}20`,
                          color: "#fff",
                          border: `1px solid ${ORANGE_COLOR}40`,
                          "&:hover": {
                            backgroundColor: `${ORANGE_COLOR}30`,
                          },
                        }}
                      />
                    ))}
                    {ubicacion.servicios.length > 4 && (
                      <Chip
                        label={`+${ubicacion.servicios.length - 4} más`}
                        size="small"
                        onClick={() => handleExpandCard(ubicacion.id)}
                        sx={{
                          backgroundColor: "rgba(255, 255, 255, 0.1)",
                          color: "#fff",
                          cursor: "pointer",
                          "&:hover": {
                            backgroundColor: "rgba(255, 255, 255, 0.2)",
                          },
                        }}
                      />
                    )}
                  </Box>
                </Box>

                {/* Sección expandible */}
                <Collapse
                  in={expandedCards[ubicacion.id]}
                  timeout="auto"
                  unmountOnExit
                >
                  <Divider
                    sx={{ mb: 2, borderColor: "rgba(255, 255, 255, 0.1)" }}
                  />

                  <Box sx={{ mb: 2 }}>
                    <Typography
                      variant="subtitle2"
                      sx={{ color: "#fff", fontWeight: "bold", mb: 1 }}
                    >
                      Servicios adicionales
                    </Typography>
                    <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
                      {ubicacion.servicios.slice(4).map((servicio) => (
                        <Chip
                          key={servicio.id}
                          label={
                            <Box
                              sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: 0.5,
                              }}
                            >
                              <span>{servicio.icon}</span>
                              <span>{servicio.label}</span>
                            </Box>
                          }
                          size="small"
                          sx={{
                            backgroundColor: `${ORANGE_COLOR}20`,
                            color: "#fff",
                            border: `1px solid ${ORANGE_COLOR}40`,
                          }}
                        />
                      ))}
                    </Box>
                  </Box>

                  <Box sx={{ mb: 2 }}>
                    <Typography
                      variant="subtitle2"
                      sx={{ color: "#fff", fontWeight: "bold", mb: 1 }}
                    >
                      Características especiales
                    </Typography>
                    {ubicacion.caracteristicas.map((caracteristica) => (
                      <Box
                        key={caracteristica.id}
                        sx={{ display: "flex", alignItems: "center", mb: 0.5 }}
                      >
                        <CheckCircle
                          sx={{ fontSize: 16, color: ORANGE_COLOR, mr: 1 }}
                        />
                        <Typography
                          variant="body2"
                          sx={{ color: "#fff", opacity: 0.9 }}
                        >
                          {caracteristica.label}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </Collapse>

                {/* Botones de acción */}
                <Box sx={{ display: "flex", gap: 1, mt: 2 }}>
                  <Button
                    variant="contained"
                    fullWidth
                    onClick={() => handleViewMap(ubicacion)}
                    disabled={loadingMap[ubicacion.id]}
                    startIcon={
                      loadingMap[ubicacion.id] ? (
                        <Skeleton width={20} height={20} />
                      ) : (
                        <Map />
                      )
                    }
                    sx={{
                      backgroundColor: ORANGE_COLOR,
                      "&:hover": {
                        backgroundColor: "#e55a2b",
                        transform: "translateY(-2px)",
                        boxShadow: 3,
                      },
                      "&:disabled": {
                        backgroundColor: "rgba(255, 87, 52, 0.3)",
                      },
                      transition: "all 0.2s ease",
                    }}
                  >
                    {loadingMap[ubicacion.id] ? "Cargando..." : "Ver en mapa"}
                  </Button>

                  <IconButton
                    onClick={() => handleExpandCard(ubicacion.id)}
                    sx={{
                      color: ORANGE_COLOR,
                      border: `1px solid ${ORANGE_COLOR}40`,
                      "&:hover": {
                        backgroundColor: `${ORANGE_COLOR}20`,
                      },
                      transform: expandedCards[ubicacion.id]
                        ? "rotate(180deg)"
                        : "rotate(0deg)",
                      transition: "transform 0.3s ease",
                    }}
                  >
                    <ExpandMore />
                  </IconButton>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Locations;
