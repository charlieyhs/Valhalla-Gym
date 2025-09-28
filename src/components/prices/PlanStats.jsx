import { Box, Typography } from "@mui/material";
import PropTypes from "prop-types";

const PlanStats = ({ plan }) => {
  return (
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
        <Typography variant="h6" sx={{ color: plan.color, fontWeight: "bold" }}>
          {plan.includes.sedes === "Todas" ? "2" : plan.includes.sedes}
        </Typography>
        <Typography variant="caption" sx={{ color: "#fff", opacity: 0.7 }}>
          {plan.includes.sedes === "Todas" ? "Sedes" : "Sede"}
        </Typography>
      </Box>
      <Box sx={{ textAlign: "center" }}>
        <Typography variant="h6" sx={{ color: plan.color, fontWeight: "bold" }}>
          {plan.includes.clases === "Ilimitadas" ? "∞" : plan.includes.clases}
        </Typography>
        <Typography variant="caption" sx={{ color: "#fff", opacity: 0.7 }}>
          Clases
        </Typography>
      </Box>
      <Box sx={{ textAlign: "center" }}>
        <Typography variant="h6" sx={{ color: plan.color, fontWeight: "bold" }}>
          {plan.satisfaccion}%
        </Typography>
        <Typography variant="caption" sx={{ color: "#fff", opacity: 0.7 }}>
          Satisfacción
        </Typography>
      </Box>
    </Box>
  );
};

const planPropType = PropTypes.shape({
    includes: PropTypes.shape({
        evaluacion: PropTypes.bool,
        nutricion: PropTypes.bool,
        entrenador: PropTypes.bool,
        clases: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        invitados: PropTypes.number,
        sedes: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    }).isRequired,
    satisfaccion: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,
  }
);

PlanStats.propTypes = {
    plan: planPropType.isRequired,
};

export default PlanStats;