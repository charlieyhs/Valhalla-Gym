import {
    Bookmark,
    BookmarkBorder,
    Favorite,
    FavoriteBorder,
    Info,
    LocationOn,
    Schedule,
    Share,
    Star
} from "../../icons/icons";
import {
    Avatar,
    Box,
    Button,
    Card,
    CardContent,
    CardMedia,
    Chip,
    IconButton,
    LinearProgress,
    Tooltip,
    Typography
} from "@mui/material";
import PropTypes from "prop-types";
import { useState } from "react";
import { getIntensityColor, getIntensityLabel } from "../../data/clases";
import { ORANGE_COLOR } from "../../constants/colors";
import { useAlert } from "../../hooks/useAlert";
import ClassDetails from "./ClassDetails";

const ClassCard = ({ clase }) => {
    const { showAlert } = useAlert();

    const [favorites, setFavorites] = useState(new Set());
    const [bookmarked, setBookmarked] = useState(new Set());
    
    const [selectedClass, setSelectedClass] = useState(null);
    

    const getOccupancyColor = (inscritos, capacidad) => {
        const percentage = (inscritos / capacidad) * 100;
        if (percentage < 60) return 'success';
        if (percentage < 85) return 'warning';
        return 'error';
    };

    const toggleFavorite = (classId) => {
        setFavorites(prev => {
            const newFavorites = new Set(prev);
            if (newFavorites.has(classId)) {
                newFavorites.delete(classId);
                showAlert("Eliminado de favoritos");
            } else {
                newFavorites.add(classId);
                showAlert("Agregado a favoritos");
            }
            return newFavorites;
        });
    };

    const toggleBookmark = (classId) => {
        setBookmarked(prev => {
            const newBookmarked = new Set(prev);
            if (newBookmarked.has(classId)) {
                newBookmarked.delete(classId);
                showAlert("Eliminado de guardados");
            } else {
                newBookmarked.add(classId);
                showAlert("Guardado para después");
            }
            return newBookmarked;
        });
    };
    
    const handleOpenDialog = (clase) => {
        setSelectedClass(clase);
    };

    const handleShare = async (clase) => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: `${clase.nombre} - Valhalla Gym`,
                    text: `¡Únete a la clase de ${clase.nombre}! ${clase.descripcion}`,
                    url: window.location.href
                });
            } catch (error) {
                console.log('Error sharing:', error);
            }
        } else {
            navigator.clipboard.writeText(window.location.href);
            showAlert("Enlace copiado al portapapeles");
        }
    };

    
    

    const handleCloseDialog = () => {
        setSelectedClass(null);
    };

    

    return (
        <Box>
            <Card 
                sx={{ 
                    height: 'fit-content',
                    background: 'linear-gradient(145deg, #1a1a1a 0%, #2d2d2d 100%)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: 3,
                    overflow: 'hidden',
                    position: 'relative',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    '&:hover': {
                        transform: 'translateY(-10px) scale(1.02)',
                        boxShadow: `0 25px 50px rgba(${ORANGE_COLOR.replace('#', '').match(/.{2}/g).map(x => parseInt(x, 16)).join(', ')}, 0.3)`,
                        border: `2px solid ${ORANGE_COLOR}`,
                        '& .class-image': {
                            transform: 'scale(1.1)'
                        }
                    }
                }}
            >
                {/* Imagen con overlay */}
                <Box sx={{ position: 'relative', height: 200, overflow: 'hidden' }}>
                    <CardMedia
                        component="img"
                        className="class-image"
                        image={clase.imagen}
                        alt={clase.nombre}
                        sx={{
                            height: '100%',
                            objectFit: 'cover',
                            transition: 'transform 0.4s ease'
                        }}
                        loading="lazy"
                    />

                    {/* Overlay con acciones */}
                    <Box sx={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            background: 'linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.7))',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            p: 2
                        }}
                    >
                        {/* Acciones superiores */}
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                            <Box sx={{ display: 'flex', gap: 1 }}>
                                <Chip
                                icon={<Star sx={{ fontSize: 16 }} />}
                                label={clase.rating}
                                size="small"
                                sx={{
                                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                                    color: '#fff',
                                    border: `1px solid ${ORANGE_COLOR}`
                                }}
                                />
                                <Chip
                                label={`${clase.inscritos}/${clase.capacidad}`}
                                size="small"
                                color={getOccupancyColor(clase.inscritos, clase.capacidad)}
                                sx={{
                                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                                    color: '#fff'
                                }}
                                />
                            </Box>
            
                            <Box sx={{ display: 'flex', gap: 0.5 }}>
                                <Tooltip title={favorites.has(clase.id) ? "Quitar de favoritos" : "Agregar a favoritos"}>
                                    <IconButton
                                        size="small"
                                        onClick={() => toggleFavorite(clase.id)}
                                        sx={{
                                            backgroundColor: 'rgba(0, 0, 0, 0.6)',
                                            color: favorites.has(clase.id) ? '#F44336' : '#fff',
                                            '&:hover': {
                                                backgroundColor: favorites.has(clase.id) ? '#F44336' : 'rgba(244, 67, 54, 0.1)'
                                            }
                                        }}
                                    >
                                        {favorites.has(clase.id) ? <Favorite /> : <FavoriteBorder />}
                                    </IconButton>
                                </Tooltip>
                                
                                <Tooltip title={bookmarked.has(clase.id) ? "Quitar de guardados" : "Guardar clase"}>
                                <IconButton
                                    size="small"
                                    onClick={() => toggleBookmark(clase.id)}
                                    sx={{
                                    backgroundColor: 'rgba(0, 0, 0, 0.6)',
                                    color: bookmarked.has(clase.id) ? ORANGE_COLOR : '#fff',
                                    '&:hover': {
                                        backgroundColor: bookmarked.has(clase.id) ? ORANGE_COLOR : `${ORANGE_COLOR}30`
                                    }
                                    }}
                                >
                                    {bookmarked.has(clase.id) ? <Bookmark /> : <BookmarkBorder />}
                                </IconButton>
                                </Tooltip>
                
                                <Tooltip title="Compartir clase">
                                    <IconButton
                                        size="small"
                                        onClick={() => handleShare(clase)}
                                        sx={{
                                        backgroundColor: 'rgba(0, 0, 0, 0.6)',
                                        color: '#fff',
                                        '&:hover': {
                                            backgroundColor: 'rgba(255, 255, 255, 0.2)'
                                        }
                                        }}
                                    >
                                        <Share />
                                    </IconButton>
                                </Tooltip>
                            </Box>
                        </Box>
            
                        {/* Información inferior */}
                        <Box>
                            <Typography variant="h5" sx={{ color: '#fff', fontWeight: 'bold', mb: 1 }}>
                                {clase.nombre}
                            </Typography>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                <Avatar
                                    src={clase.instructorImagen}
                                    alt={clase.instructor}
                                    sx={{ width: 24, height: 24 }}
                                />
                                <Typography variant="body2" sx={{ color: '#fff', opacity: 0.9 }}>
                                    {clase.instructor}
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>
        
                <CardContent sx={{ p: 3, color: '#fff' }}>
                    <Typography 
                        variant="body1" 
                        sx={{ 
                            color: '#fff',
                            opacity: 0.9,
                            mb: 2,
                            lineHeight: 1.6,
                            minHeight: 48
                        }}
                    >
                        {clase.descripcion}
                    </Typography>
        
                    {/* Estadísticas rápidas */}
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
                        <Box sx={{ textAlign: 'center' }}>
                            <Typography variant="body2" sx={{ color: ORANGE_COLOR, fontWeight: 'bold' }}>
                                {clase.duracion}
                            </Typography>
                            <Typography variant="caption" sx={{ color: '#fff', opacity: 0.7 }}>
                                Duración
                            </Typography>
                        </Box>
                        
                        <Box sx={{ textAlign: 'center' }}>
                            <Typography variant="body2" sx={{ color: getIntensityColor(clase.intensidad), fontWeight: 'bold' }}>
                                {getIntensityLabel(clase.intensidad)}
                            </Typography>
                            <Typography variant="caption" sx={{ color: '#fff', opacity: 0.7 }}>
                                Intensidad
                            </Typography>
                        </Box>
                        
                        <Box sx={{ textAlign: 'center' }}>
                            <Typography variant="body2" sx={{ color: '#4CAF50', fontWeight: 'bold' }}>
                                {clase.calorias}
                            </Typography>
                            <Typography variant="caption" sx={{ color: '#fff', opacity: 0.7 }}>
                                Calorías
                            </Typography>
                        </Box>
            
                        <Box sx={{ textAlign: 'center' }}>
                            <Typography variant="body2" sx={{ color: ORANGE_COLOR, fontWeight: 'bold' }}>
                                {clase.precio}
                            </Typography>
                            <Typography variant="caption" sx={{ color: '#fff', opacity: 0.7 }}>
                                Precio
                            </Typography>
                        </Box>
                    </Box>
        
                    {/* Nivel y ubicación */}
                    <Box sx={{ display: 'flex', gap: 1, mb: 2, flexWrap: 'wrap' }}>
                        <Chip 
                            icon={<Schedule />} 
                            label={clase.duracion} 
                            size="small" 
                            sx={{
                                backgroundColor: `${ORANGE_COLOR}20`,
                                color: '#fff',
                                border: `1px solid ${ORANGE_COLOR}40`
                            }}
                        />
                        <Chip 
                            label={clase.nivel} 
                            size="small" 
                            variant="outlined"
                            sx={{
                                borderColor: '#fff',
                                color: '#fff'
                            }}
                        />
                        <Chip
                            icon={<LocationOn sx={{ fontSize: 16 }} />}
                            label={clase.ubicacion}
                            size="small"
                            sx={{
                                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                color: '#fff'
                            }}
                        />
                    </Box>
        
                    {/* Próximos horarios */}
                    <Typography variant="subtitle2" gutterBottom sx={{ color: '#fff', fontWeight: 'bold' }}>
                        Próximas clases:
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 3 }}>
                        {clase.horarios.slice(0, 3).map((horario) => (
                        <Tooltip 
                            key={horario.id} 
                            title={`${horario.inscritos}/${clase.capacidad} inscritos`}
                        >
                            <Chip 
                            label={`${horario.dia} ${horario.hora}`}
                            size="small" 
                            color={horario.disponible ? "success" : "error"}
                            variant={horario.disponible ? "filled" : "outlined"}
                            sx={{
                                opacity: horario.disponible ? 1 : 0.6,
                                cursor: 'pointer'
                            }}
                            />
                        </Tooltip>
                        ))}
                    </Box>
        
                    {/* Tags de la clase */}
                    <Box sx={{ display: 'flex', gap: 0.5, flexWrap: 'wrap', mb: 3 }}>
                        {clase.tags.map((tag) => (
                        <Chip
                            key={tag.id}
                            label={tag.label}
                            size="small"
                            sx={{
                                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                color: '#fff',
                                fontSize: '0.7rem'
                            }}
                        />
                        ))}
                    </Box>
        
                    {/* Botones de acción */}
                    <Box sx={{ display: 'flex', gap: 1 }}>
                        <Button 
                            variant="contained" 
                            fullWidth
                            onClick={() => setSelectedClass(clase)}
                            disabled={clase.inscritos >= clase.capacidad}
                            sx={{ 
                                backgroundColor: ORANGE_COLOR,
                                '&:hover': { 
                                    backgroundColor: '#e55a2b',
                                    transform: 'translateY(-2px)',
                                    boxShadow: 3
                                },
                                '&:disabled': {
                                    backgroundColor: 'rgba(255, 87, 52, 0.3)',
                                    color: 'rgba(255, 255, 255, 0.5)'
                                },
                                fontWeight: 'bold',
                                textTransform: 'none'
                            }}
                        >
                            {clase.inscritos >= clase.capacidad ? 'Clase llena' : 'Reservar'}
                        </Button>
                        
                        <Tooltip title="Ver detalles completos">
                            <IconButton
                                onClick={() => handleOpenDialog(clase)}
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
        
                    {/* Barra de ocupación */}
                    <Box sx={{ mt: 2 }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                            <Typography variant="caption" sx={{ color: '#fff', opacity: 0.7 }}>
                                Ocupación promedio
                            </Typography>
                            <Typography variant="caption" sx={{ color: ORANGE_COLOR, fontWeight: 'bold' }}>
                                {Math.round((clase.inscritos / clase.capacidad) * 100)}%
                            </Typography>
                        </Box>
                        <LinearProgress 
                            variant="determinate" 
                            value={(clase.inscritos / clase.capacidad) * 100} 
                            sx={{
                                height: 6,
                                borderRadius: 3,
                                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                '& .MuiLinearProgress-bar': {
                                    backgroundColor: getIntensityColor(clase.intensidad),
                                    borderRadius: 3
                                }
                            }}
                        />
                    </Box>
                </CardContent>
            </Card>
            {/* Detalles de las clases */
                !!selectedClass && (
                    <ClassDetails open={!!selectedClass} 
                        onClose={handleCloseDialog} 
                        selectedClass={selectedClass}/>
                )
            }
        </Box>
    );
};
const horariosPropType = PropTypes.shape({
    id: PropTypes.string.isRequired,
    dia: PropTypes.string.isRequired,
    hora: PropTypes.string.isRequired,
    disponible: PropTypes.bool.isRequired,
    inscritos: PropTypes.number.isRequired,
});

const tagsPropType = PropTypes.shape({
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
    tags: PropTypes.arrayOf(tagsPropType).isRequired,
});

ClassCard.propTypes = {
    clase: clasePropType.isRequired,
};

export default ClassCard;