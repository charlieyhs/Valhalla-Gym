import { BusinessCenter, Elderly, FamilyRestroom, FitnessCenter, School, SportsGymnastics, WorkspacePremium } from "@mui/icons-material"
import { ORANGE_COLOR } from "./colors";

export const planes=[
  {
    id: 1,
    nombre: 'Básico',
    precio: {
      mensual: 80000,
      anual: 800000
    },
    precioOriginal: {
      mensual: 100000,
      anual: 1000000
    },
    ahorro: {
      mensual: 20,
      anual: 20
    },
    popular: false,
    recomendado: false,
    color: '#4CAF50',
    icon: <FitnessCenter sx={{fontSize: 40}}/>,
    descripcion: 'Perfecto para comenzar tu journey fitness',
    beneficios: [
      {
        texto: 'Acceso al área de pesas',
        incluido: true,
        premium: false
      },
      {
        texto: 'Área de cardio completa',
        incluido: true,
        premium: false
      },
      {
        texto: 'Vestuarios y duchas',
        incluido: true,
        premium: false
      },
      {
        texto: 'Horario de 6AM a 10PM',
        incluido: true,
        premium: false
      },
      {
        texto: 'WiFi gratuito',
        incluido: true,
        premium: false
      },
      {
        texto: 'Casilleros de uso diario',
        incluido: true,
        premium: false
      }
    ],
    limitaciones: [
      'Sin acceso a clases grupales',
      'Una sede únicamente',
      'Sin invitados'
    ],
    targetAudience: [
      'Principiantes',
      'Presupuesto ajustado',
      'Entrenamientos básicos'
    ],
    garantia: '30 días',
    includes: {
      evaluacion: false,
      nutricion: false,
      entrenador: false,
      clases: 0,
      invitados: 0,
      sedes: 1
    },
    promociones: [
      'Primera semana gratis',
      '50% descuento en productos'
    ],
    satisfaccion: 87
  },
  {
    id: 2,
    nombre: 'Premium',
    precio: {
      mensual: 120000,
      anual: 1200000
    },
    precioOriginal: {
      mensual: 150000,
      anual: 1500000
    },
    ahorro: {
      mensual: 20,
      anual: 25
    },
    popular: true,
    recomendado: true,
    color: ORANGE_COLOR,
    icon: <SportsGymnastics sx={{fontSize: 40}}/>,
    descripcion: 'La opción más completa para resultados serios',
    beneficios: [
      {
        texto: 'Todo lo del plan Básico',
        incluido: true,
        premium: false
      },
      {
        texto: 'Clases grupales ilimitadas',
        incluido: true,
        premium: true
      },
      {
        texto: 'Acceso a todas las sedes',
        incluido: true,
        premium: true
      },
      {
        texto: 'Horario 24/7 fines de semana',
        incluido: true,
        premium: true
      },
      {
        texto: '2 invitados por mes',
        incluido: true,
        premium: true
      },
      {
        texto: '30% descuento en productos',
        incluido: true,
        premium: true
      },
      {
        texto: 'App móvil con seguimiento',
        incluido: true,
        premium: true
      },
      {
        texto: 'Evaluación física mensual',
        incluido: true,
        premium: true
      }
    ],
    limitaciones: [
      'Entrenamiento personalizado no incluido',
      'Sin acceso a spa premium'
    ],
    targetAudience: [
      'Usuarios regulares',
      'Amantes de clases',
      'Flexibilidad de horarios'
    ],
    garantia: '60 días',
    includes: {
      evaluacion: true,
      nutricion: false,
      entrenador: false,
      clases: 'Ilimitadas',
      invitados: 2,
      sedes: 'Todas'
    },
    promociones: [
      'Matrícula gratis',
      'Kit de bienvenida',
      'Mes adicional gratis (anual)'
    ],
    satisfaccion: 94,
    valorExtra: 180000
  },
  {
    id: 3,
    nombre: 'VIP',
    precio: {
      mensual: 180000,
      anual: 1800000
    },
    precioOriginal: {
      mensual: 220000,
      anual: 2200000
    },
    ahorro: {
      mensual: 18,
      anual: 22
    },
    popular: false,
    recomendado: false,
    color: '#9C27B0',
    icon: <WorkspacePremium sx={{fontSize: 40}
    }/>,
    descripcion: 'Experiencia premium con atención personalizada',
    beneficios: [
      {
        texto: 'Todo lo del plan Premium',
        incluido: true,
        premium: false
      },
      {
        texto: '4 sesiones de entrenamiento personalizado',
        incluido: true,
        premium: true
      },
      {
        texto: 'Asesoría nutricional mensual',
        incluido: true,
        premium: true
      },
      {
        texto: 'Acceso completo a spa y sauna',
        incluido: true,
        premium: true
      },
      {
        texto: 'Estacionamiento VIP gratuito',
        incluido: true,
        premium: true
      },
      {
        texto: 'Toallas y amenities incluidos',
        incluido: true,
        premium: true
      },
      {
        texto: 'Reserva prioritaria en clases',
        incluido: true,
        premium: true
      },
      {
        texto: 'Masajes de recuperación (2/mes)',
        incluido: true,
        premium: true
      },
      {
        texto: 'Plan nutricional personalizado',
        incluido: true,
        premium: true
      }
    ],
    limitaciones: [
      
    ],
    targetAudience: [
      'Ejecutivos',
      'Resultados premium',
      'Comodidad máxima'
    ],
    garantia: '90 días',
    includes: {
      evaluacion: true,
      nutricion: true,
      entrenador: true,
      clases: 'Ilimitadas + VIP',
      invitados: 5,
      sedes: 'Todas + Acceso VIP'
    },
    promociones: [
      '3 meses = precio de 2',
      'Evaluación corporal gratis',
      'Consulta médica incluida'
    ],
    satisfaccion: 98,
    valorExtra: 350000
  }
];

export const descuentosEspeciales = [
  {
    id: 'estudiante',
    titulo: 'Estudiantes',
    descuento: 25,
    icon: <School />,
    descripcion: 'Descuento especial para estudiantes universitarios',
    requisitos: ['Carnet universitario vigente', 'Matrícula académica actual'],
    color: '#2196F3'
  },
  {
    id: 'adulto-mayor',
    titulo: 'Adultos Mayores',
    descuento: 20,
    icon: <Elderly />,
    descripcion: 'Promoción para personas de 60 años en adelante',
    requisitos: ['Documento de identidad', 'Certificado médico'],
    color: '#FF9800'
  },
  {
    id: 'familia',
    titulo: 'Plan Familiar',
    descuento: 30,
    icon: <FamilyRestroom />,
    descripcion: 'Descuento para 3 o más miembros de la misma familia',
    requisitos: ['Mínimo 3 miembros', 'Parentesco comprobable'],
    color: '#E91E63'
  },
  {
    id: 'corporativo',
    titulo: 'Empresarial',
    descuento: 35,
    icon: <BusinessCenter />,
    descripcion: 'Planes especiales para empresas y sus empleados',
    requisitos: ['Mínimo 10 empleados', 'Convenio corporativo'],
    color: '#9C27B0'
  }
];

export const testimonios = [
  {
    nombre: "María González",
    plan: "Premium",
    rating: 5,
    comentario: "Excelente relación calidad-precio. Las clases grupales son increíbles.",
    avatar: "/src/assets/testimonios/maria.jpg",
    tiempo: "6 meses"
  },
  {
    nombre: "Carlos Rodriguez",
    plan: "VIP",
    rating: 5,
    comentario: "La atención personalizada vale cada peso. Resultados garantizados.",
    avatar: "/src/assets/testimonios/carlos.jpg",
    tiempo: "1 año"
  },
  {
    nombre: "Ana Silva",
    plan: "Básico",
    rating: 4,
    comentario: "Perfecto para empezar. Instalaciones limpias y buen ambiente.",
    avatar: "/src/assets/testimonios/ana.jpg",
    tiempo: "3 meses"
  }
];