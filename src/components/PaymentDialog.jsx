import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { CheckCircle, WhatsApp } from "@mui/icons-material";
import { formatPrice } from "../utils/NumbersUtil";
import PropTypes from "prop-types";

const PaymentDialog = ({ plan, isAnnual, open, onClose }) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
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
      {plan && (
        <>
          <DialogTitle component='div' sx={{ textAlign: "center" }}>
            <Box sx={{ color: plan.color, mb: 2 }}>
              {plan.icon}
            </Box>
            <Typography variant="h5" sx={{ color: plan.color, fontWeight: "bold" }}>
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
              <Typography variant="h4" sx={{ color: plan.color, fontWeight: "bold", mb: 1 }}>
                {formatPrice(isAnnual ? plan.precio.anual : plan.precio.mensual)}
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.8 }}>
                {isAnnual ? '/año' : '/mes'}
              </Typography>
            </Box>

            <Typography variant="body2" sx={{ color: "#fff", opacity: 0.8, mb: 2 }}>
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
            <Button onClick={onClose} sx={{ color: "#fff" }}>
              Cerrar
            </Button>
          </DialogActions>
        </>
      )}
    </Dialog>
  );
};

PaymentDialog.propTypes = {
  plan: PropTypes.object.isRequired,
  isAnnual: PropTypes.bool.isRequired,
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default PaymentDialog;