export const ENTRENADORES = [
  {
    id: 1,
    nombre: 'Carlos Mendez',
    especialidad: 'CrossFit & Functional Training',
    experiencia: '8 años',
    certificaciones: [
      {
        id: '1:1',
        nombre: 'CrossFit L2',
        nivel: 'Avanzado',
        año: '2022'
      },
      {
        id: '1:2',
        nombre: 'NSCA-CPT',
        nivel: 'Certificado',
        año: '2020'
      },
      {
        id: '1:3',
        nombre: 'Olympic Lifting',
        nivel: 'Especialista',
        año: '2021'
      }
    ],
    rating: 4.9,
    reviewCount: 156,
    imagen: '/src/assets/coaches/entrenador1.png',
    descripcion: 'Especialista en entrenamientos funcionales de alta intensidad con enfoque en CrossFit competitivo',
    descripcionLarga: 'Carlos es un entrenador apasionado con más de 8 años de experiencia en CrossFit y entrenamiento funcional. Ha entrenado atletas de élite y ayudado a cientos de personas a transformar sus vidas a través del fitness.',
    especialidades: [
      'CrossFit',
      'Levantamiento Olímpico',
      'Acondicionamiento Metabólico',
      'Gimnasia'
    ],
    logros: [
      {id: '1:1', label: 'Entrenador certificado CrossFit L2'},
      {id: '1:2', label: 'Competidor Regional CrossFit Games'},
      {id: '1:3', label: '200+ atletas entrenados exitosamente'},
      {id: '1:4', label: 'Especialista en técnica de levantamiento'}
    ],
    disponibilidad: {
      lunes: '6:00 AM - 2:00 PM',
      martes: '6:00 AM - 2:00 PM',
      miercoles: '2:00 PM - 9:00 PM',
      jueves: '6:00 AM - 2:00 PM',
      viernes: '6:00 AM - 2:00 PM',
      sabado: '8:00 AM - 12:00 PM'
    },
    contacto: {
      whatsapp: '+57 123 456 7890',
      instagram: '@carlos_crossfit',
      email: 'carlos@valhalla.gym'
    },
    precio: '$80.000/sesión',
    clientesActivos: 45,
    satisfaccion: 98
  },
  {
    id: 2,
    nombre: 'María González',
    especialidad: 'Yoga & Pilates',
    experiencia: '6 años',
    certificaciones: [
      {
        id: '2:1',
        nombre: 'RYT-500',
        nivel: 'Avanzado',
        año: '2021'
      },
      {
        id: '2:2',
        nombre: 'Pilates Mat',
        nivel: 'Certificado',
        año: '2019'
      },
      {
        id: '2:3',
        nombre: 'Yin Yoga',
        nivel: 'Especialista',
        año: '2022'
      }
    ],
    rating: 4.8,
    reviewCount: 203,
    imagen: '/src/assets/coaches/entrenador3.png',
    descripcion: 'Instructora certificada en yoga y pilates con enfoque holístico en bienestar integral',
    descripcionLarga: 'María combina técnicas ancestrales de yoga con métodos modernos de Pilates para crear experiencias transformadoras que nutren tanto el cuerpo como la mente.',
    especialidades: [
      'Hatha Yoga',
      'Vinyasa Flow',
      'Pilates Mat',
      'Meditación',
      'Respiración'
    ],
    logros: [
      {id: '2:1', label: 'RYT-500 Yoga Alliance certificada'},
      {id: '2:2', label: 'Instructora principal de retiros'},
      {id: '2:3', label: 'Especialista en yoga terapéutico'},
      {id: '2:4', label: '300+ estudiantes regulares'}
    ],
    disponibilidad: {
      lunes: '7:00 AM - 11:00 AM, 5:00 PM - 8:00 PM',
      martes: '7:00 AM - 11:00 AM',
      miercoles: '5:00 PM - 8:00 PM',
      jueves: '7:00 AM - 11:00 AM, 5:00 PM - 8:00 PM',
      viernes: '7:00 AM - 11:00 AM',
      sabado: '9:00 AM - 1:00 PM',
      domingo: '10:00 AM - 12:00 PM'
    },
    contacto: {
      whatsapp: '+57 123 456 7890',
      instagram: '@maria_yoga_flow',
      email: 'maria@valhalla.gym'
    },
    precio: '$65.000/sesión',
    clientesActivos: 62,
    satisfaccion: 96
  },
  {
    id: 3,
    nombre: 'David Rodríguez',
    especialidad: 'Musculación & Powerlifting',
    experiencia: '10 años',
    certificaciones: [
      {
        id: '3:1',
        nombre: 'NSCA-CSCS',
        nivel: 'Avanzado',
        año: '2019'
      },
      {
        id: '3:2',
        nombre: 'USA Powerlifting',
        nivel: 'Certificado',
        año: '2020'
      },
      {
        id: '3:3',
        nombre: 'Biomecánica Deportiva',
        nivel: 'Especialista',
        año: '2021'
      }
    ],
    rating: 4.9,
    reviewCount: 189,
    imagen: '/src/assets/coaches/entrenador2.png',
    descripcion: 'Entrenador personal especializado en fuerza y desarrollo muscular con enfoque científico',
    descripcionLarga: 'David es un experto en fisiología del ejercicio con una década de experiencia ayudando a atletas y entusiastas del fitness a maximizar su potencial de fuerza y masa muscular.',
    especialidades: [
      'Powerlifting',
      'Hipertrofia Muscular',
      'Biomecánica',
      'Nutrición Deportiva'
    ],
    logros: [
      {id: '3:1', label: 'Récord nacional en powerlifting'},
      {id: '3:2', label: 'NSCA-CSCS certificado'},
      {id: '3:3', label: 'Mentor de 15+ entrenadores'},
      {id: '3:4', label: 'Transformaciones corporales exitosas: 500+'}
    ],
    disponibilidad: {
      lunes: '5:00 AM - 1:00 PM',
      martes: '5:00 AM - 1:00 PM',
      miercoles: '3:00 PM - 9:00 PM',
      jueves: '5:00 AM - 1:00 PM',
      viernes: '5:00 AM - 1:00 PM',
      sabado: '7:00 AM - 11:00 AM'
    },
    contacto: {
      whatsapp: '+57 123 456 7890',
      instagram: '@david_powerlifter',
      email: 'david@valhalla.gym'
    },
    precio: '$90.000/sesión',
    clientesActivos: 38,
    satisfaccion: 99
  },
  {
    id: 4,
    nombre: 'Luisa Castro',
    especialidad: 'Functional Training & Rehabilitación',
    experiencia: '7 años',
    certificaciones: [
      {
        id: '4:1',
        nombre: 'NSCA-CSCS',
        nivel: 'Certificado',
        año: '2020'
      },
      {
        id: '4:2',
        nombre: 'FMS Level 2',
        nivel: 'Avanzado',
        año: '2021'
      },
      {
        id: '4:3',
        nombre: 'Corrective Exercise',
        nivel: 'Especialista',
        año: '2022'
      }
    ],
    rating: 4.7,
    reviewCount: 142,
    imagen: '/src/assets/coaches/entrenador4.png',
    descripcion: 'Especialista en entrenamiento funcional y ejercicio correctivo para prevención de lesiones',
    descripcionLarga: 'Luisa se especializa en movimiento funcional y rehabilitación, ayudando a sus clientes a moverse mejor, sentirse más fuertes y prevenir lesiones a través del ejercicio inteligente.',
    especialidades: [
      'Entrenamiento Funcional',
      'Ejercicio Correctivo',
      'Prevención de Lesiones',
      'Movilidad'
    ],
    logros: [
      {id: '4:1', label: 'FMS Level 2 certificada'},
      {id: '4:2', label: 'Especialista en dolor de espalda'},
      {id: '4:3', label: 'Rehabilitación post-lesión: 200+ casos'},
      {id: '4:4', label: 'Mentora en biomecánica'},
    ],
    disponibilidad: {
      lunes: '6:00 AM - 2:00 PM',
      martes: '2:00 PM - 9:00 PM',
      miercoles: '6:00 AM - 2:00 PM',
      jueves: '2:00 PM - 9:00 PM',
      viernes: '6:00 AM - 2:00 PM',
      sabado: '8:00 AM - 12:00 PM'
    },
    contacto: {
      whatsapp: '+57 123 456 7890',
      instagram: '@luisa_functional',
      email: 'luisa@valhalla.gym'
    },
    precio: '$75.000/sesión',
    clientesActivos: 41,
    satisfaccion: 95
  }
];