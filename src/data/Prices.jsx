import { BusinessCenter, 
  Elderly, 
  FamilyRestroom, 
  FitnessCenter, 
  School, 
  SportsGymnastics, 
  WorkspacePremium } 
from "../icons/icons";
import { ORANGE_COLOR } from "../constants/colors";


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
        id: '1:1',
        texto: 'Acceso al área de pesas',
        incluido: true,
        premium: false
      },
      {
        id: '1:2',
        texto: 'Área de cardio completa',
        incluido: true,
        premium: false
      },
      {
        id: '1:3',
        texto: 'Vestuarios y duchas',
        incluido: true,
        premium: false
      },
      {
        id: '1:4',
        texto: 'Horario de 6AM a 10PM',
        incluido: true,
        premium: false
      },
      {
        id: '1:5',
        texto: 'WiFi gratuito',
        incluido: true,
        premium: false
      },
      {
        id: '1:6',
        texto: 'Casilleros de uso diario',
        incluido: true,
        premium: false
      }
    ],
    limitaciones: [
      {id: '1:1', label: 'Sin acceso a clases grupales'},
      {id: '1:2', label: 'Una sede únicamente'},
      {id: '1:3', label: 'Sin invitados'}
    ],
    targetAudience: [
      {id: '1:1', label: 'Principiantes'},
      {id: '1:2', label: 'Presupuesto ajustado'},
      {id: '1:3', label: 'Entrenamientos básicos'},
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
      {id: '1:1', label: 'Primera semana gratis'},
      {id: '1:2', label: '50% descuento en productos'}
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
        id: '2:1',
        texto: 'Todo lo del plan Básico',
        incluido: true,
        premium: false
      },
      {
        id: '2:2',
        texto: 'Clases grupales ilimitadas',
        incluido: true,
        premium: true
      },
      {
        id: '2:3',
        texto: 'Acceso a todas las sedes',
        incluido: true,
        premium: true
      },
      {
        id: '2:4',
        texto: 'Horario 24/7 fines de semana',
        incluido: true,
        premium: true
      },
      {
        id: '2:5',
        texto: '2 invitados por mes',
        incluido: true,
        premium: true
      },
      {
        id: '2:6',
        texto: '30% descuento en productos',
        incluido: true,
        premium: true
      },
      {
        id: '2:7',
        texto: 'App móvil con seguimiento',
        incluido: true,
        premium: true
      },
      {
        id: '2:8',
        texto: 'Evaluación física mensual',
        incluido: true,
        premium: true
      }
    ],
    limitaciones: [
      {id: '2:1', label: 'Entrenamiento personalizado no incluido'},
      {id: '2:2', label: 'Sin acceso a spa premium'}
    ],
    targetAudience: [
      {id: '2:1', label: 'Principiantes'},
      {id: '2:1', label: 'Principiantes'},
      {id: '2:1', label: 'Principiantes'},
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
      {id: '2:1', label: 'Matrícula gratis'},
      {id: '2:2', label: 'Kit de bienvenida'},
      {id: '2:3', label: 'Mes adicional gratis (anual)'},
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
        id: '3:1',
        texto: 'Todo lo del plan Premium',
        incluido: true,
        premium: false
      },
      {
        id: '3:2',
        texto: '4 sesiones de entrenamiento personalizado',
        incluido: true,
        premium: true
      },
      {
        id: '3:3',
        texto: 'Asesoría nutricional mensual',
        incluido: true,
        premium: true
      },
      {
        id: '3:4',
        texto: 'Acceso completo a spa y sauna',
        incluido: true,
        premium: true
      },
      {
        id: '3:5',
        texto: 'Estacionamiento VIP gratuito',
        incluido: true,
        premium: true
      },
      {
        id: '3:6',
        texto: 'Toallas y amenities incluidos',
        incluido: true,
        premium: true
      },
      {
        id: '3:7',
        texto: 'Reserva prioritaria en clases',
        incluido: true,
        premium: true
      },
      {
        id: '3:8',
        texto: 'Masajes de recuperación (2/mes)',
        incluido: true,
        premium: true
      },
      {
        id: '3:9',
        texto: 'Plan nutricional personalizado',
        incluido: true,
        premium: true
      }
    ],
    limitaciones: [
      
    ],
    targetAudience: [
      {id: '3:1', label: 'Ejecutivos'},
      {id: '3:2', label: 'Resultados premium'},
      {id: '3:3', label: 'Comodidad máxima'}
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
      {id: '3:1', label: '3 meses = precio de 2'},
      {id: '3:2', label: 'Evaluación corporal gratis'},
      {id: '3:3', label: 'Consulta médica incluida'}
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
    id: '1',
    nombre: "María González",
    plan: "Premium",
    rating: 5,
    comentario: "Excelente relación calidad-precio. Las clases grupales son increíbles.",
    avatar: "/src/assets/testimonios/maria.webp",
    tiempo: "6 meses"
  },
  {
    id: '2',
    nombre: "Carlos Rodriguez",
    plan: "VIP",
    rating: 5,
    comentario: "La atención personalizada vale cada peso. Resultados garantizados.",
    avatar: "/src/assets/testimonios/carlos.webp",
    tiempo: "1 año"
  },
  {
    id: '3',
    nombre: "Ana Silva",
    plan: "Básico",
    rating: 4,
    comentario: "Perfecto para empezar. Instalaciones limpias y buen ambiente.",
    avatar: "/src/assets/testimonios/ana.webp",
    tiempo: "3 meses"
  }
];

export const questions = [
  {
    id: '1',
    q: "¿Puedo cambiar de plan después?",
    a: "Sí, puedes actualizar o cambiar tu plan en cualquier momento."
  },
  {
    id: '2',
    q: "¿Hay periodo de prueba?",
    a: "Ofrecemos una clase gratuita para que conozcas nuestras instalaciones."
  },
  {
    id: '3',
    q: "¿Qué incluye la matrícula?",
    a: "Evaluación física, tour por las instalaciones y configuración de tu plan."
  }
];

export const caracteristicas = [
  {id: '1', label: 'Sedes disponibles'}, 
  {id: '2', label: 'Clases grupales'},
  {id: '3', label: 'Invitados/mes'},
  {id: '4', label: 'Entrenador personal'}
]