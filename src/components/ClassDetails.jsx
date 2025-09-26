import { CalendarMonth, 
    CheckCircle, 
    Close, 
    FitnessCenter, 
    Notifications, 
    NotificationsOff, 
    PersonAdd, 
    Schedule, 
    Star, 
    TrendingUp, 
    WhatsApp } 
from "@mui/icons-material";
import { Avatar, 
    Box, 
    Button, 
    CardMedia, 
    Chip, 
    Dialog, 
    DialogActions, 
    DialogContent, 
    DialogTitle, 
    FormControlLabel, 
    Grid, 
    IconButton, 
    LinearProgress, 
    List, 
    ListItem, 
    ListItemIcon, 
    ListItemText, 
    Paper, 
    Slide, 
    Switch, 
    Typography, 
    Zoom } 
from "@mui/material";
import PropTypes from "prop-types";
import { useState } from "react";
import { getIntensityColor, getIntensityLabel, handleWhatsAppContact } from "../constants/clases";
import { ORANGE_COLOR } from "../constants/colors";
import { useAlert } from "../hooks/useAlert";

const ClassDetails = ({open, selectedClass, onClose}) => {

    const [reserveDialogOpen, setReserveDialogOpen] = useState(false);
    const [notifications, setNotifications] = useState(new Set());
    const { showAlert } = useAlert();

    const handleReserveDialog = () => {
        setReserveDialogOpen(true);
    };

    const handleCloseReserveDialog = () => {
        setReserveDialogOpen(false);
    };



    const toggleNotifications = (classId) => {
        const isActive = notifications.has(classId);

        if (isActive) {
            showAlert("Notificaciones desactivadas");
        } else {
            showAlert("Te notificaremos sobre esta clase");
        }

        setNotifications(prev => {
            const newNotifications = new Set(prev);
            if (isActive) {
                newNotifications.delete(classId);
            } else {
                newNotifications.add(classId);
            }
            return newNotifications;
        });
    };


    return (
        <div>
            <Dialog 
                open={open} 
                onClose={() => onClose()}
                maxWidth="lg"
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
                <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', pb: 2 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <Avatar
                            src={selectedClass.imagen}
                            alt={selectedClass.nombre}
                            sx={{ 
                                width: 60, 
                                height: 60, 
                                border: `2px solid ${ORANGE_COLOR}` 
                            }}
                        />
                        <Box>
                            <Typography variant="h4" sx={{ color: ORANGE_COLOR, fontWeight: 'bold' }}>
                                {selectedClass.nombre}
                            </Typography>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 1 }}>
                                <Avatar
                                    src={selectedClass.instructorImagen}
                                    alt={selectedClass.instructor}
                                    sx={{ width: 24, height: 24 }}
                                />
                                <Typography variant="subtitle1" sx={{ opacity: 0.8 }}>
                                    Instructor: {selectedClass.instructor}
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                    <IconButton onClick={() => onClose()} sx={{ color: '#fff' }}>
                        <Close />
                    </IconButton>
                </DialogTitle>

                <DialogContent>
                    <Grid container spacing={3}>
                        {/* Imagen principal */}
                        <Grid size={{xs:12, md:6,}}>
                            <CardMedia
                                component="img"
                                image={selectedClass.imagen}
                                alt={selectedClass.nombre}
                                sx={{
                                    width: '100%',
                                    height: 300,
                                    objectFit: 'cover',
                                    borderRadius: 2,
                                    border: `1px solid ${ORANGE_COLOR}40`
                                }}
                            />
                        </Grid>

                        {/* Información básica */}
                        <Grid size={{xs:12, md:6,}}>
                            <Paper sx={{ p: 3, backgroundColor: 'rgba(255, 255, 255, 0.05)', borderRadius: 2 }}>
                                <Typography variant="h6" sx={{ color: ORANGE_COLOR, mb: 2 }}>
                                    Información General
                                </Typography>
                            
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                                    <Typography sx={{fontWeight: 'bold', color: '#fff'}}>Duración:</Typography>
                                    <Typography sx={{ color: '#fff'}}>{selectedClass.duracion}</Typography>
                                </Box>
                            
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                                    <Typography sx={{fontWeight: 'bold', color: '#fff'}}>Nivel:</Typography>
                                    <Typography sx={{color: '#fff'}}>{selectedClass.nivel}</Typography>
                                </Box>
                            
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                                    <Typography sx={{fontWeight: 'bold', color: '#fff'}}>Intensidad:</Typography>
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                        <LinearProgress
                                            variant="determinate"
                                            value={selectedClass.intensidad * 10}
                                            sx={{
                                            width: 60,
                                            height: 8,
                                            borderRadius: 4,
                                            backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                            '& .MuiLinearProgress-bar': {
                                                backgroundColor: getIntensityColor(selectedClass.intensidad),
                                                borderRadius: 4
                                            }
                                            }}
                                        />
                                        <Typography sx={{ fontWeight: 'bold', color: getIntensityColor(selectedClass.intensidad) }}>
                                            {getIntensityLabel(selectedClass.intensidad)}
                                        </Typography>
                                    </Box>
                                </Box>
                            
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                                    <Typography sx={{fontWeight: 'bold', color: '#fff'}}>Calorías quemadas:</Typography>
                                    <Typography sx={{ fontWeight: 'bold', color: '#4CAF50' }}>
                                        ~{selectedClass.calorias} cal
                                    </Typography>
                                </Box>
                            
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                                    <Typography sx={{fontWeight: 'bold', color: '#fff'}}>Precio por clase:</Typography>
                                    <Typography sx={{ fontWeight: 'bold', color: ORANGE_COLOR }}>
                                    {selectedClass.precio}
                                    </Typography>
                                </Box>

                                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                                    <Typography sx={{fontWeight: 'bold', color: '#fff'}}>Rating:</Typography>
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                        <Box sx={{ display: 'flex' }}>
                                            {[1,2,3,4,5].map((star) => (
                                                <Star 
                                                    key={star}
                                                    sx={{ 
                                                        fontSize: 16,
                                                        color: star <= selectedClass.rating ? ORANGE_COLOR : 'rgba(255,255,255,0.3)'
                                                    }} 
                                                />
                                            ))}
                                        </Box>
                                        <Typography sx={{fontWeight: 'bold', color: '#fff'}}>
                                            {selectedClass.rating} ({selectedClass.reviews} reviews)
                                        </Typography>
                                    </Box>
                                </Box>

                                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <Typography sx={{fontWeight: 'bold', color: '#fff'}}>Ubicación:</Typography>
                                    <Typography sx={{color: '#fff'}}>{selectedClass.ubicacion}</Typography>
                                </Box>
                            </Paper>
                        </Grid>

                        {/* Descripción completa */}
                        <Grid size={{xs:12,}}>
                            <Typography variant="h6" sx={{ color: ORANGE_COLOR, mb: 2 }}>
                            Descripción
                            </Typography>
                            <Typography variant="body1" sx={{ lineHeight: 1.7, mb: 3 }}>
                            {selectedClass.descripcionLarga}
                            </Typography>
                        </Grid>

                        {/* Beneficios */}
                        <Grid size={{xs:12, md:6,}}>
                            <Paper sx={{ p: 3, backgroundColor: 'rgba(255, 255, 255, 0.05)', borderRadius: 2 }}>
                                <Typography variant="h6" sx={{ color: ORANGE_COLOR, mb: 2, display: 'flex', alignItems: 'center' }}>
                                    <TrendingUp sx={{ mr: 1 }} />
                                    Beneficios
                                </Typography>
                                <List>
                                    {selectedClass.beneficios.map((beneficio) => (
                                        <ListItem key={beneficio.id} disablePadding>
                                            <ListItemIcon>
                                            <CheckCircle sx={{ color: '#4CAF50', fontSize: 20 }} />
                                                </ListItemIcon>
                                            <ListItemText primary={beneficio.label} sx={{ color: '#fff' }} />
                                        </ListItem>
                                    ))}
                                </List>
                            </Paper>
                        </Grid>

                        {/* Equipamiento */}
                        <Grid size={{xs:12, md:6,}}>
                            <Paper sx={{ p: 3, backgroundColor: 'rgba(255, 255, 255, 0.05)', borderRadius: 2 }}>
                                <Typography variant="h6" sx={{ color: ORANGE_COLOR, mb: 2, display: 'flex', alignItems: 'center' }}>
                                    <FitnessCenter sx={{ mr: 1 }} />
                                    Equipamiento
                                </Typography>
                                <List>
                                    {selectedClass.equipamiento.map((equipo) => (
                                        <ListItem key={equipo.id} disablePadding>
                                            <ListItemIcon>
                                            <FitnessCenter sx={{ color: ORANGE_COLOR, fontSize: 20 }} />
                                                </ListItemIcon>
                                            <ListItemText primary={equipo.label} sx={{ color: '#fff' }} />
                                        </ListItem>
                                    ))}
                                </List>
                            </Paper>
                        </Grid>

                        {/* Horarios detallados */}
                        <Grid size={{xs:12,}}>
                            <Paper sx={{ p: 3, backgroundColor: 'rgba(255, 255, 255, 0.05)', borderRadius: 2 }}>
                                <Typography variant="h6" sx={{ color: ORANGE_COLOR, mb: 2, display: 'flex', alignItems: 'center' }}>
                                    <Schedule sx={{ mr: 1 }} />
                                    Horarios Disponibles
                                </Typography>
                                <Grid container spacing={2}>
                                    {selectedClass.horarios.map((horario) => (
                                        <Grid size={{xs:12, md:3, sm:6,}} key={horario.id}>
                                            <Box sx={{ 
                                                p: 2, 
                                                border: `1px solid ${horario.disponible ? '#4CAF50' : '#F44336'}40`,
                                                backgroundColor: `${horario.disponible ? '#4CAF50' : '#F44336'}10`,
                                                borderRadius: 2,
                                                textAlign: 'center'
                                            }}>
                                            <Typography variant="subtitle2" sx={{ color: ORANGE_COLOR, fontWeight: 'bold' }}>
                                                {horario.dia}
                                            </Typography>
                                            <Typography variant="h6" sx={{ color: '#fff', fontWeight: 'bold', my: 1 }}>
                                                {horario.hora}
                                            </Typography>
                                            <Typography variant="body2" sx={{ color: '#fff', opacity: 0.8 }}>
                                                {horario.inscritos}/{selectedClass.capacidad} inscritos
                                            </Typography>
                                            <Chip
                                                label={horario.disponible ? 'Disponible' : 'Lleno'}
                                                size="small"
                                                color={horario.disponible ? 'success' : 'error'}
                                                sx={{ mt: 1 }}
                                            />
                                            </Box>
                                        </Grid>
                                    ))}
                                </Grid>
                            </Paper>
                        </Grid>
                    </Grid>
                </DialogContent>

                <DialogActions sx={{ p: 3, gap: 1 }}>
                    <Button
                        variant="outlined"
                        startIcon={<WhatsApp />}
                        onClick={() => handleWhatsAppContact(selectedClass)}
                        sx={{
                            borderColor: '#25D366',
                            color: '#25D366',
                            '&:hover': {
                            backgroundColor: 'rgba(37, 211, 102, 0.1)'
                            }
                        }}
                    >
                        Consultar por WhatsApp
                    </Button>
                    <Button 
                        variant="contained"
                        startIcon={<CalendarMonth />}
                        onClick={() => {
                            handleReserveDialog();
                        }}
                        disabled={selectedClass.inscritos >= selectedClass.capacidad}
                        sx={{ 
                            backgroundColor: ORANGE_COLOR,
                            '&:hover': { backgroundColor: '#e55a2b' },
                            '&:disabled': {
                            backgroundColor: 'rgba(255, 87, 52, 0.3)'
                            }
                        }}
                    >
                        {selectedClass.inscritos >= selectedClass.capacidad ? 'Clase llena' : 'Reservar ahora'}
                    </Button>
                </DialogActions>
            </Dialog>

            <Dialog 
                open={reserveDialogOpen} 
                onClose={handleCloseReserveDialog}
                maxWidth="sm"
                fullWidth
                slots={{
                    transition: Slide
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
                    },
                    transition: {
                        direction: 'up'
                    }
                }}
            >
                {selectedClass && (
                    <>
                        <DialogTitle component="div" sx={{ textAlign: 'center', pb: 2 }}>
                            <Avatar
                                src={selectedClass.imagen}
                                alt={selectedClass.nombre}
                                sx={{ 
                                    width: 80, 
                                    height: 80, 
                                    mx: 'auto', 
                                    mb: 2, 
                                    border: `3px solid ${ORANGE_COLOR}` 
                                }}
                            />
                            <Typography variant="h5" sx={{ color: ORANGE_COLOR, fontWeight: 'bold' }}>
                                Reservar clase de {selectedClass.nombre}
                            </Typography>
                            <Typography variant="subtitle1" sx={{ opacity: 0.8 }}>
                                Con {selectedClass.instructor}
                            </Typography>
                        </DialogTitle>

                        <DialogContent>
                            <Box sx={{ textAlign: 'center', mb: 3 }}>
                                <Typography variant="body1" sx={{ color: '#fff', mb: 2 }}>
                                    Selecciona el horario que prefieras
                                </Typography>
                            
                                <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mb: 3, flexWrap: 'wrap' }}>
                                    <Chip
                                    label={`${selectedClass.precio} por clase`}
                                    sx={{
                                        backgroundColor: `${ORANGE_COLOR}20`,
                                        color: ORANGE_COLOR,
                                        border: `1px solid ${ORANGE_COLOR}`,
                                        fontWeight: 'bold'
                                    }}
                                    />
                                    <Chip
                                    label={`${selectedClass.duracion} de duración`}
                                    sx={{
                                        backgroundColor: 'rgba(76, 175, 80, 0.2)',
                                        color: '#4CAF50',
                                        border: '1px solid #4CAF50'
                                    }}
                                    />
                                </Box>
                            </Box>

                            <Grid container spacing={2}>
                                {selectedClass.horarios.filter(h => h.disponible).map((horario) => (
                                    <Grid size={{xs:12,}} key={horario.id}>
                                        <Paper
                                            sx={{
                                            p: 2,
                                            backgroundColor: 'rgba(255, 255, 255, 0.05)',
                                            border: `1px solid ${ORANGE_COLOR}40`,
                                            borderRadius: 2,
                                            cursor: 'pointer',
                                            transition: 'all 0.2s ease',
                                            '&:hover': {
                                                backgroundColor: `${ORANGE_COLOR}20`,
                                                borderColor: ORANGE_COLOR
                                            }
                                            }}
                                        >
                                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                <Box>
                                                    <Typography variant="h6" sx={{ color: ORANGE_COLOR, fontWeight: 'bold' }}>
                                                        {horario.dia} - {horario.hora}
                                                    </Typography>
                                                    <Typography variant="body2" sx={{ color: '#fff', opacity: 0.8 }}>
                                                        {horario.inscritos}/{selectedClass.capacidad} personas inscritas
                                                    </Typography>
                                                </Box>
                                                <Box sx={{ textAlign: 'right' }}>
                                                    <LinearProgress
                                                        variant="determinate"
                                                        value={(horario.inscritos / selectedClass.capacidad) * 100}
                                                        sx={{
                                                            width: 80,
                                                            height: 6,
                                                            borderRadius: 3,
                                                            backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                                            '& .MuiLinearProgress-bar': {
                                                                backgroundColor: getIntensityColor(selectedClass.intensidad),
                                                                borderRadius: 3
                                                            },
                                                            mb: 1
                                                        }}
                                                    />
                                                    <Typography variant="caption" sx={{ color: '#fff', opacity: 0.7 }}>
                                                        {Math.round((horario.inscritos / selectedClass.capacidad) * 100)}% lleno
                                                    </Typography>
                                                </Box>
                                            </Box>
                                        </Paper>
                                    </Grid>
                                ))}
                            </Grid>

                            <Box sx={{ mt: 3, p: 2, backgroundColor: 'rgba(255, 255, 255, 0.05)', borderRadius: 2 }}>
                                <FormControlLabel
                                    control={
                                        <Switch
                                            checked={notifications.has(selectedClass.id)}
                                            onChange={() => toggleNotifications(selectedClass.id)}
                                            sx={{
                                                '& .MuiSwitch-switchBase.Mui-checked': {
                                                    color: ORANGE_COLOR,
                                                },
                                                '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                                                    backgroundColor: ORANGE_COLOR,
                                                },
                                            }}
                                        />
                                    }
                                    label={
                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                            {notifications.has(selectedClass.id) ? <Notifications /> : <NotificationsOff />}
                                            <Typography variant="body2">
                                                Recibir notificaciones de esta clase
                                            </Typography>
                                        </Box>
                                    }
                                    sx={{ color: '#fff' }}
                                />
                            </Box>

                            <Box sx={{ mt: 2, p: 2, backgroundColor: 'rgba(255, 255, 255, 0.05)', borderRadius: 2 }}>
                                <Typography variant="body2" sx={{ color: '#fff', opacity: 0.8, textAlign: 'center' }}>
                                    💡<strong>Tip:</strong> Llega 10 minutos antes para prepararte. 
                                    La cancelación debe hacerse con al menos 2 horas de anticipación.
                                </Typography>
                            </Box>
                        </DialogContent>

                        <DialogActions sx={{ p: 3, gap: 1 }}>
                            <Button 
                                onClick={handleCloseReserveDialog}
                                sx={{ color: '#fff' }}
                            >
                                Cancelar
                            </Button>
                            <Button
                                variant="outlined"
                                startIcon={<WhatsApp />}
                                onClick={() => handleWhatsAppContact(selectedClass)}
                                sx={{
                                    borderColor: '#25D366',
                                    color: '#25D366',
                                    '&:hover': {
                                    backgroundColor: 'rgba(37, 211, 102, 0.1)'
                                    }
                                }}
                            >
                                Consultar
                            </Button>
                            <Button 
                                variant="contained"
                                startIcon={<PersonAdd />}                                
                                onClick={() => {
                                    showAlert(`¡Reserva confirmada para ${selectedClass.nombre}!`);
                                    onClose();
                                    handleCloseReserveDialog();
                                }}
                                sx={{ 
                                    backgroundColor: ORANGE_COLOR,
                                    '&:hover': { backgroundColor: '#e55a2b' },
                                    textTransform: 'none',
                                    fontWeight: 'bold'
                                }}
                            >
                                Confirmar reserva
                            </Button>
                        </DialogActions>
                    </>
                )}
            </Dialog>
        </div>
    );
    
};

const horariosPropType = PropTypes.shape({
    id: PropTypes.string.isRequired,
    dia: PropTypes.string.isRequired,
    hora: PropTypes.string.isRequired,
    disponible: PropTypes.bool.isRequired,
    inscritos: PropTypes.number.isRequired,
});

const equipamientoPropType = PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
});

const beneficiosPropType = PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
});

const clasePropType = PropTypes.shape({
    id: PropTypes.number.isRequired,
    imagen: PropTypes.string.isRequired,
    nombre: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    inscritos: PropTypes.number.isRequired,
    capacidad: PropTypes.number.isRequired,
    instructor: PropTypes.string.isRequired,
    instructorImagen: PropTypes.string.isRequired,
    descripcion: PropTypes.string.isRequired,
    duracion: PropTypes.string.isRequired,
    intensidad: PropTypes.number.isRequired,
    calorias: PropTypes.number.isRequired,
    precio: PropTypes.string.isRequired,
    nivel: PropTypes.string.isRequired,
    ubicacion: PropTypes.string.isRequired,
    horarios: PropTypes.arrayOf(horariosPropType).isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    descripcionLarga : PropTypes.string.isRequired,
    equipamiento :  PropTypes.arrayOf(equipamientoPropType).isRequired,
    reviews : PropTypes.number,
    beneficios : PropTypes.arrayOf(beneficiosPropType),
});


ClassDetails.propTypes = {
    open: PropTypes.bool.isRequired, 
    selectedClass: clasePropType.isRequired, 
    onClose : PropTypes.func,
};

export default ClassDetails;