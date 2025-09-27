import { CheckCircle } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import PropTypes from "prop-types";

const MainBenefitsPricingPlan = ({ plan, onOpenDialog }) => {
    return (
        <Box sx={{ textAlign: "left", mb: 3, flexGrow: 1 }}>
            {plan.beneficios.slice(0, 6).map((beneficio) => (
                <Box
                    key={beneficio.id}
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
                    onClick={onOpenDialog}
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
    );
}


const planPropType = PropTypes.shape({
    color: PropTypes.string.isRequired,
    beneficios: PropTypes.arrayOf(
      PropTypes.shape({
        texto: PropTypes.string.isRequired,
        incluido: PropTypes.bool,
        premium: PropTypes.bool
      })
    ).isRequired,
  }
);

MainBenefitsPricingPlan.propTypes = {
  plan: planPropType.isRequired,
  onOpenDialog: PropTypes.func.isRequired
};

export default MainBenefitsPricingPlan;