import {
  Info,
  Security
} from "../../icons/icons";;
import {
  Box,
  Button,
  CardContent,
  Chip,
  IconButton,
  LinearProgress,
  Paper,
  Tooltip,
  Typography,
  Zoom
} from "@mui/material";
import PropTypes from "prop-types";
import { useMemo, useState } from "react";
import MainBenefitsPricingPlan from "./MainBenefitsPricingPlan";
import PaymentDialog from "./PaymentDialog";
import PlanCardHeader from "./PlanCardHeader";
import PlanDialog from "./PlanDialog";
import PlanPricing from "./PlanPricing";
import PlanStats from "./PlanStats";
import { useAlert } from "../../hooks/useAlert";

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

  const handleSelectPlan = () => {
    showAlert(`¡Excelente elección! Plan ${plan.nombre} seleccionado.`);
    handlePaymentDialog();
  };
  
  const calculateSavings = (plan, isAnnual) => {
    const precioActual = isAnnual ? plan.precio.anual : plan.precio.mensual;
    const precioOriginal = isAnnual
      ? plan.precioOriginal.anual
      : plan.precioOriginal.mensual;
    return precioOriginal - precioActual;
  };
  const savings = useMemo(() => calculateSavings(plan, isAnnual), [plan, isAnnual]);


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
          <PlanCardHeader plan={plan} savings={savings} />

          <CardContent
            sx={{
              p: 4,
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
            <PlanPricing plan={plan} 
                isAnnual={isAnnual} 
                calculateSavings={calculateSavings}/>

            {/* Beneficios principales (primeros 6) */}
            <MainBenefitsPricingPlan  plan={plan} onOpenDialog={handleOpenDialog}/>

            {/* Estadísticas rápidas */}
            <PlanStats plan={plan} />

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
                onClick={() => handleSelectPlan()}
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
                  onClick={() => handleOpenDialog()}
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

      <PlanDialog
        plan={plan}
        isAnnual={isAnnual}
        open={dialogOpen}
        onClose={handleCloseDialog}
        onSelectPlan={handleSelectPlan}
        calculateSavings={calculateSavings}
      />

      {/* Dialog de pago/selección */}
      <PaymentDialog
        plan={plan}
        isAnnual={isAnnual}
        open={paymentDialogOpen}
        onClose={handleClosePaymentDialog}
      />

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
        mensual: PropTypes.number.isRequired,
        anual: PropTypes.number.isRequired
    }).isRequired,
    ahorro: PropTypes.shape({
        mensual: PropTypes.number.isRequired,
        anual: PropTypes.number.isRequired
    }).isRequired,
    popular: PropTypes.bool.isRequired,
    recomendado: PropTypes.bool.isRequired,
    color: PropTypes.string.isRequired,
    icon: PropTypes.element.isRequired,
    descripcion: PropTypes.string.isRequired,
    beneficios: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            texto: PropTypes.string.isRequired,
            incluido: PropTypes.bool.isRequired,
            premium: PropTypes.bool.isRequired
        })
    ).isRequired,
    limitaciones: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired
        })
    ).isRequired,
    targetAudience: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired
        })
    ).isRequired,
    garantia: PropTypes.string.isRequired,
    includes: PropTypes.shape({
        evaluacion: PropTypes.bool.isRequired,
        nutricion: PropTypes.bool.isRequired,
        entrenador: PropTypes.bool.isRequired,
        clases: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        invitados: PropTypes.number.isRequired,
        sedes: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
    }).isRequired,
    promociones: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired
        })
    ).isRequired,
    satisfaccion: PropTypes.number.isRequired,
    valorExtra: PropTypes.number
});

PlanCard.propTypes = {
    plan: planPropType.isRequired,
    index: PropTypes.number.isRequired,
    isAnnual: PropTypes.bool.isRequired
};

export default PlanCard;
