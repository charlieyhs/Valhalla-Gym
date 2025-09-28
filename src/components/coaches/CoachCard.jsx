import { Avatar, 
    Badge, 
    Box, 
    Button, 
    Card, 
    CardContent, 
    Chip, 
    Dialog, 
    DialogActions, 
    DialogContent, 
    DialogTitle, 
    Divider, 
    Grid, 
    IconButton, 
    LinearProgress, 
    List, 
    ListItem, 
    ListItemIcon, 
    ListItemText, 
    Paper, 
    Rating, 
    Slide, 
    Tooltip, 
    Typography, 
    Zoom } 
from "@mui/material";
import { ORANGE_COLOR } from "../../constants/colors";
import { useState } from "react";
import PropTypes from "prop-types";
import { CalendarMonth, 
    Close, 
    Email, 
    EmojiEvents, 
    Info, 
    Instagram, 
    People, 
    Phone, 
    Schedule, 
    School, 
    TrendingUp, 
    VideoCall, 
    WhatsApp } 
from "../../icons/icons";;

const CoachCard = ({entrenador}) => {

    const [dialogOpen, setDialogOpen] = useState(false);
    const [contactDialogOpen, setContactDialogOpen] = useState(false);

    const handleOpenDialog = () => {
        setDialogOpen(true);
    };

    const handleContactDialog = () => {
        setContactDialogOpen(true);
    };

    const handleCloseDialog = () => {
        setDialogOpen(false);
    };

    const handleCloseContactDialog = () => {
        setContactDialogOpen(false);
    };
    const handleWhatsApp = () => {
        const mensaje = encodeURIComponent(`Hola ${entrenador.nombre}! Me interesa agendar una sesión de entrenamiento.`);
        window.open(`https://wa.me/${entrenador.contacto.whatsapp.replace(/\D/g, '')}?text=${mensaje}`);
    };

    const handleInstagram = () => {
        window.open(`https://instagram.com/${entrenador.contacto.instagram.replace('@', '')}`, '_blank');
    };

    const handleEmail = () => {
        window.open(`mailto:${entrenador.contacto.email}?subject=Consulta sobre entrenamiento personal`);
    };

    return (
        <Box>
            <Card 
                sx={{ 
                    height: '100%',
                    background: 'linear-gradient(145deg, #1a1a1a 0%, #2d2d2d 100%)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: 3,
                    overflow: 'hidden',
                    position: 'relative',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    '&:hover': {
                        transform: 'translateY(-12px) scale(1.02)',
                        boxShadow: `0 25px 50px rgba(${ORANGE_COLOR.replace('#', '').match(/.{2}/g).map(x => parseInt(x, 16)).join(', ')}, 0.3)`,
                        border: `2px solid ${ORANGE_COLOR}`,
                        '& .coach-avatar': {
                        transform: 'scale(1.1)',
                        },
                        '& .coach-specialty': {
                        color: ORANGE_COLOR
                        }
                    }
                }}
            >
                {/* Badge de popularidad */}
                <Box
                    sx={{
                        position: 'absolute',
                        top: 16,
                        right: 16,
                        zIndex: 2
                    }}
                >
                    <Tooltip title={`${entrenador.clientesActivos} clientes activos`}>
                        <Chip
                        icon={<People sx={{ fontSize: 16 }} />}
                        label={entrenador.clientesActivos}
                        size="small"
                        sx={{
                            backgroundColor: 'rgba(0, 0, 0, 0.8)',
                            color: '#fff',
                            border: `1px solid ${ORANGE_COLOR}`
                        }}
                        />
                    </Tooltip>
                </Box>

                <CardContent sx={{ textAlign: 'center', p: 3, color: '#fff' }}>
                {/* Avatar con indicador online */}
                    <Box sx={{ position: 'relative', display: 'inline-block', mb: 2 }}>
                        <Badge
                            overlap="circular"
                            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                            badgeContent={
                                <Box
                                sx={{
                                    width: 16,
                                    height: 16,
                                    borderRadius: '50%',
                                    backgroundColor: '#4CAF50',
                                    border: '2px solid #fff',
                                    animation: 'pulse 2s infinite'
                                }}
                                />
                            }
                        >
                        <Avatar
                            className="coach-avatar"
                            src={entrenador.imagen}
                            alt={entrenador.nombre}
                            sx={{
                                width: 120,
                                height: 120,
                                border: `4px solid ${ORANGE_COLOR}40`,
                                transition: 'transform 0.3s ease',
                                boxShadow: `0 8px 24px rgba(${ORANGE_COLOR.replace('#', '').match(/.{2}/g).map(x => parseInt(x, 16)).join(', ')}, 0.3)`
                            }}
                            slotProps={{
                                img: {
                                    loading: "lazy",
                                },
                            }}
                        />
                        </Badge>
                    </Box>

                    <Typography 
                        variant="h5" 
                        component="h3" 
                        sx={{ 
                            color: ORANGE_COLOR, 
                            fontWeight: 'bold',
                            mb: 1 
                        }}
                    >
                        {entrenador.nombre}
                    </Typography>

                    <Typography 
                        variant="subtitle1" 
                        className="coach-specialty"
                        sx={{ 
                            color: '#fff',
                            opacity: 0.9,
                            mb: 2,
                            transition: 'color 0.3s ease',
                            fontWeight: 500
                        }}
                    >
                        {entrenador.especialidad}
                    </Typography>

                    {/* Rating mejorado */}
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mb: 2 }}>
                        <Rating 
                            value={entrenador.rating} 
                            readOnly 
                            precision={0.1}
                            sx={{
                                color: ORANGE_COLOR,
                                '& .MuiRating-iconEmpty': {
                                color: 'rgba(255, 255, 255, 0.3)'
                                }
                            }}
                        />
                        <Typography variant="body2" sx={{ ml: 1, color: '#fff', opacity: 0.8 }}>
                            {entrenador.rating} ({entrenador.reviewCount})
                        </Typography>
                    </Box>

                    {/* Estadísticas rápidas */}
                    <Box sx={{ display: 'flex', justifyContent: 'space-around', mb: 2 }}>
                        <Box sx={{ textAlign: 'center' }}>
                            <Typography variant="h6" sx={{ color: ORANGE_COLOR, fontWeight: 'bold' }}>
                                {entrenador.experiencia}
                            </Typography>
                            <Typography variant="caption" sx={{ color: '#fff', opacity: 0.7 }}>
                                Experiencia
                            </Typography>
                        </Box>
                        <Box sx={{ textAlign: 'center' }}>
                            <Typography variant="h6" sx={{ color: ORANGE_COLOR, fontWeight: 'bold' }}>
                                {entrenador.satisfaccion}%
                            </Typography>
                            <Typography variant="caption" sx={{ color: '#fff', opacity: 0.7 }}>
                                Satisfacción
                            </Typography>
                        </Box>
                        <Box sx={{ textAlign: 'center' }}>
                            <Typography variant="h6" sx={{ color: ORANGE_COLOR, fontWeight: 'bold' }}>
                                {entrenador.precio}
                            </Typography>
                            <Typography variant="caption" sx={{ color: '#fff', opacity: 0.7 }}>
                                Por sesión
                            </Typography>
                        </Box>
                    </Box>

                    <Typography 
                        variant="body2" 
                        sx={{ 
                        color: '#fff',
                        opacity: 0.9,
                        mb: 3,
                        lineHeight: 1.6,
                        minHeight: 40
                        }}
                    >
                        {entrenador.descripcion}
                    </Typography>

                    {/* Certificaciones top */}
                    <Box sx={{ mb: 3 }}>
                        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', justifyContent: 'center' }}>
                        {entrenador.certificaciones.slice(0, 2).map((cert) => (
                            <Chip 
                            key={cert.nombre}
                            icon={<School sx={{ fontSize: 16 }} />}
                            label={cert.nombre}
                            size="small"
                            sx={{
                                backgroundColor: `${ORANGE_COLOR}20`,
                                color: '#fff',
                                border: `1px solid ${ORANGE_COLOR}40`,
                                fontSize: '0.75rem'
                            }}
                            />
                        ))}
                        {entrenador.certificaciones.length > 2 && (
                            <Tooltip title="Ver más certificaciones">
                                <Chip
                                    label={`+${entrenador.certificaciones.length - 2}`}
                                    size="small"
                                    onClick={() => handleOpenDialog()}
                                    sx={{
                                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                    color: '#fff',
                                    cursor: 'pointer',
                                    '&:hover': {
                                        backgroundColor: 'rgba(255, 255, 255, 0.2)'
                                    }
                                    }}
                                />
                            </Tooltip>
                        )}
                        </Box>
                    </Box>

                    {/* Botones de acción */}
                    <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
                        <Button 
                        variant="contained"
                        fullWidth
                        onClick={() => handleContactDialog()}
                        sx={{ 
                            backgroundColor: ORANGE_COLOR,
                            '&:hover': { 
                            backgroundColor: '#e55a2b',
                            transform: 'translateY(-2px)',
                            boxShadow: 3
                            },
                            fontWeight: 'bold',
                            borderRadius: 2,
                            textTransform: 'none'
                        }}
                        >
                        Entrenar con {entrenador.nombre.split(' ')[0]}
                        </Button>
                        <Tooltip title="Ver perfil completo">
                        <IconButton
                            onClick={() => handleOpenDialog()}
                            sx={{
                            color: ORANGE_COLOR,
                            border: `1px solid ${ORANGE_COLOR}40`,
                            borderRadius: 2,
                            '&:hover': {
                                backgroundColor: `${ORANGE_COLOR}20`
                            }
                            }}
                        >
                            <Info />
                        </IconButton>
                        </Tooltip>
                    </Box>

                    {/* Indicador de satisfacción */}
                    <Box sx={{ width: '100%' }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                        <Typography variant="caption" sx={{ color: '#fff', opacity: 0.7 }}>
                            Satisfacción del cliente
                        </Typography>
                        <Typography variant="caption" sx={{ color: ORANGE_COLOR, fontWeight: 'bold' }}>
                            {entrenador.satisfaccion}%
                        </Typography>
                        </Box>
                        <LinearProgress 
                            variant="determinate" 
                            value={entrenador.satisfaccion} 
                            sx={{
                                height: 6,
                                borderRadius: 3,
                                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                '& .MuiLinearProgress-bar': {
                                backgroundColor: ORANGE_COLOR,
                                borderRadius: 3
                                }
                            }}
                        />
                    </Box>
                </CardContent>
            </Card>
            {/* Dialog de perfil completo */}
            <Dialog 
                open={dialogOpen} 
                onClose={handleCloseDialog}
                maxWidth="md"
                fullWidth
                slots={{
                    transition: Zoom
                }}
                transitionDuration={400}
                slotProps={{
                    paper: {
                        sx: {
                            background: 'linear-gradient(145deg, #1a1a1a 0%, #2d2d2d 100%)',
                            color: '#fff',
                            borderRadius: 3,
                            border: `1px solid ${ORANGE_COLOR}40`
                        }
                    }
                }}
            >
                {dialogOpen && (
                <>
                    <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                            <Avatar
                                src={entrenador.imagen}
                                alt={entrenador.nombre}
                                sx={{ width: 60, height: 60, border: `2px solid ${ORANGE_COLOR}` }}
                                slotProps={{
                                    img: {
                                        loading: "lazy",
                                    },
                                }}
                                />
                            <Box>
                                <Typography variant="h5" sx={{ color: ORANGE_COLOR, fontWeight: 'bold' }}>
                                    {entrenador.nombre}
                                </Typography>
                                <Typography variant="subtitle1" sx={{ opacity: 0.8 }}>
                                    {entrenador.especialidad}
                                </Typography>
                            </Box>
                        </Box>
                        <IconButton onClick={handleCloseDialog} sx={{ color: '#fff' }}>
                            <Close />
                        </IconButton>
                    </DialogTitle>

                    <DialogContent>
                        <Grid container spacing={3}>
                            <Grid size={{xs:12, md: 6}}>
                                <Paper sx={{ p: 3, backgroundColor: 'rgba(255, 255, 255, 0.05)', borderRadius: 2 }}>
                                    <Typography variant="h6" sx={{ color: ORANGE_COLOR, mb: 2, display: 'flex', alignItems: 'center' }}>
                                        <TrendingUp sx={{ mr: 1 }} />
                                        Logros y Especialidades
                                    </Typography>
                                    <List>
                                        {entrenador.logros.map((logro) => (
                                            <ListItem key={logro.id} disablePadding>
                                                <ListItemIcon>
                                                    <EmojiEvents sx={{ color: ORANGE_COLOR, fontSize: 20 }} />
                                                </ListItemIcon>
                                                <ListItemText primary={logro.label} sx={{ color: '#fff' }} />
                                            </ListItem>
                                        ))}
                                    </List>
                                </Paper>
                            </Grid>

                            <Grid size={{xs:12, md: 6}}>
                                <Paper sx={{ p: 3, backgroundColor: 'rgba(255, 255, 255, 0.05)', borderRadius: 2 }}>
                                    <Typography variant="h6" sx={{ color: ORANGE_COLOR, mb: 2, display: 'flex', alignItems: 'center' }}>
                                        <School sx={{ mr: 1 }} />
                                        Certificaciones
                                    </Typography>
                                    <List>
                                        {entrenador.certificaciones.map((cert) => (
                                            <ListItem key={cert.id} disablePadding>
                                                <ListItemText 
                                                    primary={cert.nombre}
                                                    secondary={`${cert.nivel} - ${cert.año}`}
                                                    sx={{ 
                                                        color: '#fff',
                                                        '& .MuiListItemText-secondary': { color: 'rgba(255, 255, 255, 0.6)' }
                                                    }} 
                                                />
                                            </ListItem>
                                        ))}
                                    </List>
                                </Paper>
                            </Grid>

                            <Grid size={{xs:12, }}>
                                <Paper sx={{ p: 3, backgroundColor: 'rgba(255, 255, 255, 0.05)', borderRadius: 2 }}>
                                    <Typography variant="h6" sx={{ color: ORANGE_COLOR, mb: 2, display: 'flex', alignItems: 'center' }}>
                                        <Schedule sx={{ mr: 1 }} />
                                        Horarios de Disponibilidad
                                    </Typography>
                                    <Grid container spacing={2}>
                                        {Object.entries(entrenador.disponibilidad).map(([dia, horario]) => (
                                            <Grid size={{xs:12, md: 4, sm: 6 }} key={dia}>
                                                <Box sx={{ 
                                                    p: 2, 
                                                    border: '1px solid rgba(255, 255, 255, 0.1)', 
                                                    borderRadius: 1,
                                                    textAlign: 'center'
                                                }}>
                                                    <Typography variant="subtitle2" sx={{ color: ORANGE_COLOR, fontWeight: 'bold' }}>
                                                        {dia.charAt(0).toUpperCase() + dia.slice(1)}
                                                    </Typography>
                                                    <Typography variant="body2" sx={{ color: '#fff', opacity: 0.8 }}>
                                                        {horario}
                                                    </Typography>
                                                </Box>
                                            </Grid>
                                        ))}
                                    </Grid>
                                </Paper>
                            </Grid>

                            <Grid size={{xs:12,}}>
                            <Typography variant="h6" sx={{ color: ORANGE_COLOR, mb: 2 }}>
                                Acerca de {entrenador.nombre.split(' ')[0]}
                            </Typography>
                            <Typography variant="body1" sx={{ color: '#fff', lineHeight: 1.7 }}>
                                {entrenador.descripcionLarga}
                            </Typography>
                            </Grid>
                        </Grid>
                    </DialogContent>

                    <DialogActions sx={{ p: 3 }}>
                        <Button 
                            variant="contained"
                            onClick={() => {
                                handleContactDialog();
                            }}
                            sx={{ 
                                backgroundColor: ORANGE_COLOR,
                                '&:hover': { backgroundColor: '#e55a2b' }
                            }}
                        >
                            Contactar ahora
                        </Button>
                    </DialogActions>
                </>
                )}
            </Dialog>

            {/* Dialog de contacto */}
            <Dialog 
                open={contactDialogOpen} 
                onClose={handleCloseContactDialog}
                maxWidth="sm"
                fullWidth
                slots={{
                    transition: Slide,
                }}
                slotProps={{
                    transition: {
                        direction: 'up'
                    },
                    paper: {
                        sx: {
                            background: 'linear-gradient(145deg, #1a1a1a 0%, #2d2d2d 100%)',
                            color: '#fff',
                            borderRadius: 3,
                            border: `1px solid ${ORANGE_COLOR}40`
                        },
                    },
                }}
            >
                {contactDialogOpen && (
                <>
                    <DialogTitle component="div" sx={{ textAlign: 'center', pb: 1 }}>
                        <Avatar
                            src={entrenador.imagen}
                            alt={entrenador.nombre}
                            sx={{ 
                                width: 80, 
                                height: 80, 
                                mx: 'auto', 
                                mb: 2, 
                                border: `3px solid ${ORANGE_COLOR}` 
                            }}
                            slotProps={{
                                img: {
                                    loading: "lazy",
                                },
                            }}
                        />
                        <Typography variant="h5" sx={{ color: ORANGE_COLOR, fontWeight: 'bold' }}>
                            Contactar a {entrenador.nombre}
                        </Typography>
                        <Typography variant="subtitle1" sx={{ opacity: 0.8 }}>
                            {entrenador.especialidad}
                        </Typography>
                    </DialogTitle>

                    <DialogContent sx={{ pt: 0 }}>
                        <Box sx={{ textAlign: 'center', mb: 3 }}>
                            <Typography variant="body1" sx={{ color: '#fff', mb: 2 }}>
                                Elige tu método de contacto preferido
                            </Typography>
                            
                            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mb: 3 }}>
                                <Chip
                                    label={`${entrenador.precio} por sesión`}
                                    sx={{
                                    backgroundColor: `${ORANGE_COLOR}20`,
                                    color: ORANGE_COLOR,
                                    border: `1px solid ${ORANGE_COLOR}`,
                                    fontWeight: 'bold'
                                    }}
                                />
                                <Chip
                                    label={`${entrenador.satisfaccion}% satisfacción`}
                                    sx={{
                                    backgroundColor: 'rgba(76, 175, 80, 0.2)',
                                    color: '#4CAF50',
                                    border: '1px solid #4CAF50'
                                    }}
                                />
                            </Box>
                        </Box>

                    <Grid container spacing={2}>
                        <Grid size={{xs:12,}}>
                            <Button
                                fullWidth
                                variant="contained"
                                startIcon={<WhatsApp />}
                                onClick={() => handleWhatsApp()}
                                sx={{
                                backgroundColor: '#25D366',
                                '&:hover': { backgroundColor: '#20b858' },
                                py: 1.5,
                                fontSize: '1rem',
                                fontWeight: 'bold',
                                textTransform: 'none'
                                }}
                            >
                                Escribir por WhatsApp
                            </Button>
                        </Grid>

                        <Grid size={{xs:12, sm: 6}}>
                            <Button
                                fullWidth
                                variant="outlined"
                                startIcon={<Phone />}
                                onClick={() => window.open(`tel:${entrenador.contacto.whatsapp}`)}
                                sx={{
                                borderColor: '#4CAF50',
                                color: '#4CAF50',
                                '&:hover': { 
                                    backgroundColor: 'rgba(76, 175, 80, 0.1)',
                                    borderColor: '#4CAF50'
                                },
                                py: 1.5,
                                textTransform: 'none'
                                }}
                            >
                                Llamar
                            </Button>
                        </Grid>

                        <Grid size={{xs:12, sm: 6}}>
                            <Button
                                fullWidth
                                variant="outlined"
                                startIcon={<Email />}
                                onClick={() => handleEmail()}
                                sx={{
                                borderColor: ORANGE_COLOR,
                                color: ORANGE_COLOR,
                                '&:hover': { 
                                    backgroundColor: `${ORANGE_COLOR}20`,
                                    borderColor: ORANGE_COLOR
                                },
                                py: 1.5,
                                textTransform: 'none'
                                }}
                            >
                                Email
                            </Button>
                        </Grid>

                        <Grid size={{xs:12,}}>
                            <Divider sx={{ my: 2, borderColor: 'rgba(255, 255, 255, 0.1)' }} />
                            <Button
                                fullWidth
                                variant="outlined"
                                startIcon={<Instagram />}
                                onClick={() => handleInstagram()}
                                sx={{
                                borderColor: '#E4405F',
                                color: '#E4405F',
                                '&:hover': { 
                                    backgroundColor: 'rgba(228, 64, 95, 0.1)',
                                    borderColor: '#E4405F'
                                },
                                py: 1.5,
                                textTransform: 'none'
                                }}
                            >
                                Ver en Instagram {entrenador.contacto.instagram}
                            </Button>
                        </Grid>

                        <Grid size={{xs:12,}}>
                            <Button
                                fullWidth
                                variant="outlined"
                                startIcon={<VideoCall />}
                                sx={{
                                borderColor: 'rgba(255, 255, 255, 0.3)',
                                color: '#fff',
                                '&:hover': { 
                                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                    borderColor: '#fff'
                                },
                                py: 1.5,
                                textTransform: 'none'
                                }}
                            >
                                Solicitar videollamada
                            </Button>
                        </Grid>
                    </Grid>

                    <Box sx={{ mt: 3, p: 2, backgroundColor: 'rgba(255, 255, 255, 0.05)', borderRadius: 2 }}>
                        <Typography variant="body2" sx={{ color: '#fff', opacity: 0.8, textAlign: 'center' }}>
                        💡 <strong>Tip:</strong> Para una respuesta más rápida, escribe por WhatsApp. 
                            {entrenador.nombre.split(' ')[0]} suele responder en menos de 30 minutos.
                        </Typography>
                    </Box>
                    </DialogContent>

                    <DialogActions sx={{ p: 3, pt: 1 }}>
                        <Button 
                            onClick={handleCloseContactDialog}
                            sx={{ color: '#fff' }}
                        >
                            Cancelar
                        </Button>
                        <Button 
                            variant="contained"
                            startIcon={<CalendarMonth />}
                            onClick={() => handleWhatsApp()}
                            sx={{ 
                            backgroundColor: ORANGE_COLOR,
                            '&:hover': { backgroundColor: '#e55a2b' },
                            textTransform: 'none'
                            }}
                        >
                            Agendar sesión
                        </Button>
                    </DialogActions>
                </>
                )}
            </Dialog>
        </Box>
    )
};

const certificacionPropType = PropTypes.shape({
    id: PropTypes.string.isRequired,
    nombre: PropTypes.string.isRequired,
    nivel: PropTypes.string.isRequired,
    año: PropTypes.string.isRequired,
});

const logroPropType = PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
});

const contactoPropType = PropTypes.shape({
    whatsapp: PropTypes.string.isRequired,
    instagram: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
});

const disponibilidadPropType = PropTypes.shape({
    lunes: PropTypes.string,
    martes: PropTypes.string,
    miercoles: PropTypes.string,
    jueves: PropTypes.string,
    viernes: PropTypes.string,
    sabado: PropTypes.string,
    domingo: PropTypes.string,
});

const entrenadorPropType = PropTypes.shape({
    id: PropTypes.number.isRequired,
    nombre: PropTypes.string.isRequired,
    especialidad: PropTypes.string.isRequired,
    experiencia: PropTypes.string.isRequired,
    certificaciones: PropTypes.arrayOf(certificacionPropType).isRequired,
    rating: PropTypes.number.isRequired,
    reviewCount: PropTypes.number.isRequired,
    imagen: PropTypes.string.isRequired,
    descripcion: PropTypes.string.isRequired,
    descripcionLarga: PropTypes.string.isRequired,
    especialidades: PropTypes.arrayOf(PropTypes.string).isRequired,
    logros: PropTypes.arrayOf(logroPropType).isRequired,
    disponibilidad: disponibilidadPropType.isRequired,
    contacto: contactoPropType.isRequired,
    precio: PropTypes.string.isRequired,
    clientesActivos: PropTypes.number.isRequired,
    satisfaccion: PropTypes.number.isRequired,
});

CoachCard.propTypes = {
    entrenador: entrenadorPropType.isRequired
};

export default CoachCard;