import React from "react";
import { ORANGE_COLOR } from "../constants/colors";

const Accessibility = React.lazy(() => import('@mui/icons-material/Accessibility'));
const AcUnit = React.lazy(() => import('@mui/icons-material/AcUnit'));
const ChildFriendly = React.lazy(() => import('@mui/icons-material/ChildFriendly'));
const DirectionsCar = React.lazy(() => import('@mui/icons-material/DirectionsCar'));
const EmojiEvents = React.lazy(() => import('@mui/icons-material/EmojiEvents'));
const Favorite = React.lazy(() => import('@mui/icons-material/Favorite'));
const FitnessCenter = React.lazy(() => import('@mui/icons-material/FitnessCenter'));
const Groups = React.lazy(() => import('@mui/icons-material/Groups'));
const Pool = React.lazy(() => import('@mui/icons-material/Pool'));
const Psychology = React.lazy(() => import('@mui/icons-material/Psychology'));
const Restaurant = React.lazy(() => import('@mui/icons-material/Restaurant'));
const Security = React.lazy(() => import('@mui/icons-material/Security'));
const Spa = React.lazy(() => import('@mui/icons-material/Spa'));
const Wifi = React.lazy(() => import('@mui/icons-material/Wifi'));


export const benefits = [
    {
      id: 1,
      icon: <FitnessCenter fontSize="large" />,
      title: "Entrenamientos Personalizados",
      desc: "Programas diseñados específicamente para tus objetivos y nivel de condición física.",
      category: "Entrenamiento",
      color: ORANGE_COLOR,
      detailedDesc: "Nuestros entrenadores certificados crean planes de entrenamiento únicos basados en tu evaluación inicial, objetivos específicos y progreso continuo. Cada programa se ajusta dinámicamente para maximizar tus resultados.",
      features: [
        {id: '1:1', label: "Evaluación física inicial completa"},
        {id: '1:2', label: "Plan personalizado por entrenador certificado"},
        {id: '1:3', label: "Seguimiento semanal del progreso"},
        {id: '1:4', label: "Ajustes mensuales del programa"},
        {id: '1:5', label: "Acceso a entrenamientos en casa"},
        {id: '1:6', label: "Variedad de modalidades de entrenamiento"},
      ],
      stats: {
        satisfaction: 96,
        avgResults: 85,
        timeFrame: "4-6 semanas"
      },
      testimonial: {
        text: "En 3 meses logré resultados que nunca pensé posibles. El programa personalizado fue clave.",
        author: "María González",
        rating: 5
      },
      relatedServices: [
        {id: '1:1', label: "Evaluación corporal"},
        {id: '1:2', label: "Nutrición deportiva"},
        {id: '1:3', label: "Seguimiento médico"}
      ],
      pricing: "Incluido en membresía Premium"
    },
    {
      id: 2,
      icon: <Favorite fontSize="large" />,
      title: "Salud y Bienestar Integral",
      desc: "Equilibrio perfecto entre salud física, mental y emocional para un bienestar completo.",
      category: "Bienestar",
      color: "#E91E63",
      detailedDesc: "Abordamos tu bienestar desde múltiples dimensiones: física, mental, nutricional y emocional. Nuestro enfoque holístico garantiza resultados sostenibles y una mejor calidad de vida.",
      features: [
        {id: '2:1', label: "Evaluaciones médico-deportivas"},
        {id: '2:2', label: "Sesiones de relajación y meditación"},
        {id: '2:3', label: "Asesoría nutricional especializada"},
        {id: '2:4', label: "Monitoreo de signos vitales"},
        {id: '2:5', label: "Programas anti-estrés"},
        {id: '2:6', label: "Workshops de bienestar mental"},
      ],
      stats: {
        satisfaction: 94,
        avgResults: 78,
        timeFrame: "2-8 semanas"
      },
      testimonial: {
        text: "No solo mejoré físicamente, también encontré equilibrio mental. Es un cambio de vida total.",
        author: "Carlos Mendoza",
        rating: 5
      },
      relatedServices: [
          {id: '2:1', label: "Spa y relajación"},
          {id: '2:2', label: "Consulta nutricional"},
          {id: '2:3', label: "Yoga terapéutico"},
        ],
      pricing: "Desde $150.000/mes"
    },
    {
      id: 3,
      icon: <Groups fontSize="large" />,
      title: "Comunidad Motivadora",
      desc: "Únete a una familia fitness donde compartes logros y te conectas con personas afines.",
      category: "Comunidad",
      color: "#2196F3",
      detailedDesc: "Nuestra comunidad es el corazón de Valhalla. Creamos conexiones genuinas entre miembros que se apoyan mutuamente, celebran logros y enfrentan desafíos juntos.",
      features: [
        {id: '3:1', label: "Eventos mensuales de la comunidad"},
        {id: '3:2', label: "Grupos de entrenamiento por objetivos"},
        {id: '3:3', label: "Retos y competencias internas"},
        {id: '3:4', label: "Red social exclusiva para miembros"},
        {id: '3:5', label: "Mentoría entre miembros experimentados"},
        {id: '3:6', label: "Actividades familiares los fines de semana"},
      ],
      stats: {
        satisfaction: 92,
        avgResults: 88,
        timeFrame: "Inmediato"
      },
      testimonial: {
        text: "Encontré no solo un gym, sino una segunda familia. El apoyo de todos es increíble.",
        author: "Ana Rodriguez",
        rating: 5
      },
      relatedServices: [
          {id: '3:1', label: "Clases grupales"},
          {id: '3:2', label: "Eventos especiales"},
          {id: '3:3', label: "Networking fitness"},
        ],
      pricing: "Incluido en todas las membresías"
    },
    {
      id: 4,
      icon: <Psychology fontSize="large" />,
      title: "Fortaleza Mental",
      desc: "Desarrolla resistencia psicológica y confianza a través del entrenamiento mental.",
      category: "Mental",
      color: "#9C27B0",
      detailedDesc: "El fitness va más allá del cuerpo. Nuestros programas de fortaleza mental te ayudan a desarrollar disciplina, confianza y resistencia psicológica que se refleja en todas las áreas de tu vida.",
      features: [
        {id: '4:1', label: "Técnicas de visualización deportiva"},
        {id: '4:2', label: "Manejo de estrés y ansiedad"},
        {id: '4:3', label: "Construcción de confianza personal"},
        {id: '4:4', label: "Meditación y mindfulness"},
        {id: '4:5', label: "Coaching motivacional"},
        {id: '4:6', label: "Establecimiento de metas efectivo"},
      ],
      stats: {
        satisfaction: 89,
        avgResults: 82,
        timeFrame: "6-12 semanas"
      },
      testimonial: {
        text: "Aprendí a superar mis límites mentales. Ahora me siento capaz de lograr cualquier cosa.",
        author: "David Silva",
        rating: 5
      },
      relatedServices: [
        {id: '4:1', label: "Coaching personal"},
        {id: '4:2', label: "Terapia deportiva"},
        {id: '4:3', label: "Workshops mentales"},
      ],
      pricing: "Desde $80.000/sesión"
    },
    {
      id: 5,
      icon: <EmojiEvents fontSize="large" />,
      title: "Logros y Reconocimientos",
      desc: "Celebra cada meta alcanzada con nuestro sistema de logros y recompensas.",
      category: "Motivación",
      color: "#FF9800",
      detailedDesc: "Reconocemos y celebramos cada paso de tu journey fitness. Nuestro sistema de logros mantiene tu motivación alta y hace que cada entrenamiento sea emocionante.",
      features: [
        {id: '5:1', label: "Sistema de badges y medallas digitales"},
        {id: '5:2', label: "Ceremonia mensual de reconocimientos"},
        {id: '5:3', label: "Premios por constancia y mejoras"},
        {id: '5:4', label: "Tabla de líderes por categorías"},
        {id: '5:5', label: "Recompensas por referir amigos"},
        {id: '5:6', label: "Descuentos especiales por logros"},
      ],
      stats: {
        satisfaction: 91,
        avgResults: 76,
        timeFrame: "Continuo"
      },
      testimonial: {
        text: "Cada logro se siente especial aquí. Me motiva seguir superándome día a día.",
        author: "Luisa Castro",
        rating: 4
      },
      relatedServices: [
        {id: '5:1', label: "Eventos de premiación"},
        {id: '5:2', label: "Fotografía deportiva"},
        {id: '5:3', label: "Social media"},
      ],
      pricing: "Incluido en membresía"
    },
    {
      id: 6,
      icon: <Security fontSize="large" />,
      title: "Seguridad y Higiene",
      desc: "Espacios completamente seguros y sanitizados para tu tranquilidad total.",
      category: "Seguridad",
      color: "#4CAF50",
      detailedDesc: "Tu seguridad es nuestra prioridad. Mantenemos los más altos estándares de limpieza, seguridad y protocolos sanitarios para garantizar una experiencia completamente segura.",
      features: [
        {id: '6:1', label: "Sanitización constante de equipos"},
        {id: '6:2', label: "Personal de seguridad 24/7"},
        {id: '6:3', label: "Protocolos de emergencia médica"},
        {id: '6:4', label: "Seguros de accidentes incluidos"},
        {id: '6:5', label: "Equipos de última generación certificados"},
        {id: '6:6', label: "Vestuarios con casilleros de seguridad"},
      ],
      stats: {
        satisfaction: 97,
        avgResults: 95,
        timeFrame: "Siempre"
      },
      testimonial: {
        text: "Me siento completamente segura entrenando aquí. La limpieza y orden son impecables.",
        author: "Patricia Herrera",
        rating: 5
      },
      relatedServices: [
        {id: '6:1', label: "Seguros deportivos"},
        {id: '6:2', label: "Primeros auxilios"},
        {id: '6:3', label: "Mantenimiento"},
      ],
      pricing: "Sin costo adicional"
    }
  ];

  export const additionalFeatures = [
    { id: '1:1', icon: <Wifi />, title: "WiFi Premium", desc: "Internet de alta velocidad gratuito" },
    { id: '1:2', icon: <AcUnit />, title: "Climatización", desc: "Ambiente controlado todo el año" },
    { id: '1:3', icon: <Pool />, title: "Piscina", desc: "Natación y hidroterapia" },
    { id: '1:4', icon: <Spa />, title: "Zona Spa", desc: "Relajación y recuperación" },
    { id: '1:5', icon: <Restaurant />, title: "Juice Bar", desc: "Batidos y snacks saludables" },
    { id: '1:6', icon: <DirectionsCar />, title: "Parqueadero", desc: "Espacios seguros para tu vehículo" },
    { id: '1:7', icon: <ChildFriendly />, title: "Zona Kids", desc: "Cuidado infantil mientras entrenas" },
    { id: '1:8', icon: <Accessibility />, title: "Accesibilidad", desc: "Instalaciones adaptadas para todos" }
  ];