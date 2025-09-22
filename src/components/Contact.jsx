import { Grid, Card, CardContent, Typography } from "@mui/material";
import { ORANGE_COLOR } from "../constants/colors";
import { Facebook, Instagram, WhatsApp } from "@mui/icons-material";

const contacts = [
  { id: 1, icon: <Instagram fontSize="large" />, title: "Síguenos en Instagram", desc: "@gym" },
  { id: 2, icon: <Facebook fontSize="large" />, title: "Facebook", desc: "Gym" },
  { id: 3, icon: <WhatsApp fontSize="large" />, title: "WhatsApp", desc: "+57 300 000 0000" },
];

export default function Contact() {
  return (
    <div>
      <Typography variant="h3" component="h2" gutterBottom align="center" sx={{ color: ORANGE_COLOR, mb: 4 }}>
        Nuestros contactos
      </Typography>
      <Typography variant="h6" align="center" sx={{ mb: 6, color: '#fff' }}>
        Contáctanos para más información, consultas o para unirte a nuestra comunidad.
        <br />
        Estamos aquí para ayudarte a alcanzar tus metas de salud y bienestar.
      </Typography>

      <Grid container spacing={3} justifyContent="center" sx={{ py: 6 }}>
        {contacts.map((contact) => (
          <Grid size={{xs:12, md:4}} key={contact.id}>
            <Card sx={{ textAlign: "center", p: 2 }}>
              <CardContent>
                {contact.icon}
                <Typography variant="h6" fontWeight="bold" sx={{ mt: 1 }}>
                  {contact.title}
                </Typography>
                <Typography variant="body2">{contact.desc}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
