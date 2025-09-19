import { Grid, Card, CardContent, Typography } from "@mui/material";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import FavoriteIcon from "@mui/icons-material/Favorite";
import GroupsIcon from "@mui/icons-material/Groups";

const benefits = [
  {id: 1, icon: <FitnessCenterIcon fontSize="large" />, title: "Entrenamientos personalizados", desc: "Programas adaptados a ti." },
  {id: 2, icon: <FavoriteIcon fontSize="large" />, title: "Salud y bienestar", desc: "Equilibrio físico y mental." },
  {id: 3, icon: <GroupsIcon fontSize="large" />, title: "Comunidad motivadora", desc: "Comparte logros y conéctate." },
];

export default function Benefits() {
  return (
    <Grid container spacing={3} justifyContent="center" sx={{ py: 6 }}>
      {benefits.map((b) => (
        <Grid size={{xs:12, md:4}} key={b.id}>
          <Card sx={{ textAlign: "center", p: 2 }}>
            <CardContent>
              {b.icon}
              <Typography variant="h6" fontWeight="bold" sx={{ mt: 1 }}>
                {b.title}
              </Typography>
              <Typography variant="body2">{b.desc}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
