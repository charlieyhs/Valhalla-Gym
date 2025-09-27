import { EmojiEvents, LocalOffer } from "@mui/icons-material";
import { Box, Chip, Grid, Stack } from "@mui/material";
import PropTypes from "prop-types";
import { formatPrice } from "../utils/NumbersUtil";

const PlanCardHeader = ({ plan, savings }) => {
    return (
        <Box sx={{mt: 2, ml: 1}}>
            <Stack spacing={2}>
              <Grid columns={1}>
                {plan.popular && (
                  <Chip
                    label="MÁS POPULAR"
                    sx={{
                      backgroundColor: plan.color,
                      color: "#fff",
                      fontWeight: "bold",
                      fontSize: "0.75rem",
                    }}
                  />
                )}
                {plan.recomendado && (
                  <Chip
                    icon={<EmojiEvents />}
                    label="RECOMENDADO"
                    size="small"
                    sx={{
                      backgroundColor: "#FF9800",
                      color: "#fff",
                      fontWeight: "bold",
                    }}
                  />
                )}
                {savings > 0 && (
                  <Chip
                    icon={<LocalOffer />}
                    label={`Ahorra ${formatPrice(savings)}`}
                    size="small"
                    sx={{
                      backgroundColor: "#4CAF50",
                      color: "#fff",
                      fontWeight: "bold",
                    }}
                  />
                )}
              </Grid>
            </Stack>
        </Box>
    );
};

PlanCardHeader.propTypes = {
    plan: PropTypes.object.isRequired,
    savings: PropTypes.number.isRequired,
};

export default PlanCardHeader;