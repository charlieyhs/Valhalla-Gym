import { Avatar, Chip, Paper, Typography, Zoom } from "@mui/material";
import PropTypes from "prop-types";
import { ORANGE_COLOR } from "../../constants/colors";

const TeamMemberCard = ({ member, index }) => (
    <Zoom in={true} style={{ transitionDelay: `${index * 150 + 600}ms` }}>
        <Paper
        sx={{
            p: 3,
            textAlign: 'center',
            background: 'linear-gradient(145deg, #1a1a1a 0%, #2d2d2d 100%)',
            border: `1px solid ${ORANGE_COLOR}40`,
            borderRadius: 3,
            transition: 'all 0.3s ease',
            '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: `0 10px 25px rgba(255, 107, 53, 0.3)`,
            border: `1px solid ${ORANGE_COLOR}`
            }
        }}
        >
        <Avatar
            sx={{ 
                width: 80, 
                height: 80, 
                mx: 'auto', 
                mb: 2,
                bgcolor: ORANGE_COLOR,
                fontSize: '2rem'
            }}
        >
            {member.name.split(' ').map(n => n[0]).join('')}
        </Avatar>
        
        <Typography variant="h6" sx={{ color: ORANGE_COLOR, fontWeight: 'bold', mb: 0.5 }}>
            {member.name}
        </Typography>
        
        <Chip
            label={member.role}
            size="small"
            sx={{
            backgroundColor: `${ORANGE_COLOR}20`,
            color: ORANGE_COLOR,
            mb: 2,
            fontWeight: 'bold'
            }}
        />
        
        <Typography variant="body2" sx={{ color: '#fff', opacity: 0.8, mb: 1 }}>
            {member.specialty}
        </Typography>
        
        <Typography variant="body2" sx={{ color: '#fff', opacity: 0.9, mb: 0.5 }}>
            📞 {member.phone}
        </Typography>
        
        <Typography variant="body2" sx={{ color: '#fff', opacity: 0.9 }}>
            ✉️ {member.email}
        </Typography>
        </Paper>
    </Zoom>
);

TeamMemberCard.propTypes = {
  member: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    specialty: PropTypes.string.isRequired
  }).isRequired,
  index: PropTypes.number.isRequired
};


export default TeamMemberCard;