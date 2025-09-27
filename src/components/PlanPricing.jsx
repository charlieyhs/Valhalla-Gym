import { Box, Chip, Typography } from "@mui/material";
import { formatPrice } from "../utils/NumbersUtil";
import PropTypes from "prop-types";

const PlanPricing = ({ plan, isAnnual, calculateSavings }) => {
    return (
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
    );
};

const planPropType = PropTypes.shape({
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
    color: PropTypes.string.isRequired,
    valorExtra: PropTypes.number,
  }
);

PlanPricing.propTypes = {
    plan: planPropType.isRequired,
    isAnnual: PropTypes.bool.isRequired,
    calculateSavings: PropTypes.func.isRequired,
};

export default PlanPricing;