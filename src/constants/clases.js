export const CLASES = [
  {
    id: 1,
    nombre: 'CrossFit',
    descripcion: 'Entrenamiento funcional de alta intensidad',
    descripcionLarga: 'El CrossFit combina movimientos funcionales constantemente variados ejecutados a alta intensidad. Desarrolla fuerza, resistencia cardiovascular, flexibilidad y coordinación en un ambiente de grupo motivador.',
    duracion: '60 min',
    nivel: 'Intermedio',
    intensidad: 9,
    calorias: 450,
    imagen: '/src/assets/clases/crossfit.png',
    instructor: 'Carlos Mendez',
    instructorImagen: '/src/assets/coaches/entrenador1.png',
    capacidad: 15,
    inscritos: 12,
    rating: 4.8,
    reviews: 89,
    precio: '$25.000',
    ubicacion: 'Sala Principal',
    equipamiento: [
      {id: '1:1', label: 'Barras olímpicas'},
      {id: '1:2', label: 'Kettlebells'},
      {id: '1:3', label: 'Box jumps'},
      {id: '1:4', label: 'Cuerdas de batalla'},
    ],
    beneficios: [
      {id: '1:1', label: 'Quema grasa eficientemente'},
      {id: '1:2', label: 'Desarrolla fuerza funcional'},
      {id: '1:3', label: 'Mejora resistencia'},
      {id: '1:4', label: 'Fortalece el core'},
    ],
    horarios: [
      {
        id: '1:1',
        dia: 'Lunes',
        hora: '6:00 AM',
        disponible: true,
        inscritos: 8
      },
      {
        id: '1:2',
        dia: 'Miércoles',
        hora: '8:00 PM',
        disponible: true,
        inscritos: 12
      },
      {
        id: '1:3',
        dia: 'Viernes',
        hora: '7:00 PM',
        disponible: false,
        inscritos: 15
      },
      {
        id: '1:4',
        dia: 'Sábado',
        hora: '9:00 AM',
        disponible: true,
        inscritos: 6
      }
    ],
    proximasClases: [
      {
        fecha: '2024-01-15',
        hora: '6:00 AM',
        disponible: true
      },
      {
        fecha: '2024-01-17',
        hora: '8:00 PM',
        disponible: true
      },
      {
        fecha: '2024-01-19',
        hora: '7:00 PM',
        disponible: false
      }
    ],
    tags: [
      {id: '1:1', label: 'Alta Intensidad'},
      {id: '1:2', label: 'Funcional'},
      {id: '1:3', label: 'Grupo'},
      {id: '1:4', label: 'Competitivo'},
    ]
  },
  {
    id: 2,
    nombre: 'Yoga',
    descripcion: 'Equilibrio entre mente y cuerpo',
    descripcionLarga: 'Práctica milenaria que combina posturas físicas, técnicas de respiración y meditación. Ideal para reducir el estrés, aumentar la flexibilidad y encontrar equilibrio interior.',
    duracion: '90 min',
    nivel: 'Principiante',
    intensidad: 3,
    calorias: 180,
    imagen: '/src/assets/clases/yoga.jpg',
    instructor: 'María González',
    instructorImagen: '/src/assets/coaches/entrenador3.png',
    capacidad: 20,
    inscritos: 16,
    rating: 4.9,
    reviews: 124,
    precio: '$20.000',
    ubicacion: 'Estudio de Yoga',
    equipamiento: [
      {id: '2:1', label: 'Mats de yoga'},
      {id: '2:2', label: 'Bloques'},
      {id: '2:3', label: 'Correas'},
      {id: '2:4', label: 'Bolsters'},
    ],
    beneficios: [
      {id: '2:1', label: 'Reduce el estrés'},
      {id: '2:2', label: 'Aumenta flexibilidad'},
      {id: '2:3', label: 'Mejora postura'},
      {id: '2:4', label: 'Calma mental'},
    ],
    horarios: [
      {
        id: '2:1',
        dia: 'Martes',
        hora: '7:00 AM',
        disponible: true,
        inscritos: 14
      },
      {
        id: '2:2',
        dia: 'Jueves',
        hora: '6:00 PM',
        disponible: true,
        inscritos: 16
      },
      {
        id: '2:3',
        dia: 'Domingo',
        hora: '9:00 AM',
        disponible: true,
        inscritos: 8
      }
    ],
    proximasClases: [
      {
        fecha: '2024-01-16',
        hora: '7:00 AM',
        disponible: true
      },
      {
        fecha: '2024-01-18',
        hora: '6:00 PM',
        disponible: true
      },
      {
        fecha: '2024-01-21',
        hora: '9:00 AM',
        disponible: true
      }
    ],
    tags: [
      {id: '2:1', label: 'Relajación'},
      {id: '2:2', label: 'Mindfulness'},
      {id: '2:3', label: 'Flexibilidad'},
      {id: '2:4', label: 'Bienestar'},
    ]
  },
  {
    id: 3,
    nombre: 'Spinning',
    descripcion: 'Ciclismo indoor con música energizante',
    descripcionLarga: 'Entrenamiento cardiovascular intenso sobre bicicletas estacionarias con música motivadora. Quema calorías efectivamente mientras fortaleces piernas y core.',
    duracion: '45 min',
    nivel: 'Todos los niveles',
    intensidad: 8,
    calorias: 400,
    imagen: '/src/assets/clases/spinning.png',
    instructor: 'Ana Rodriguez',
    instructorImagen: '/src/assets/coaches/entrenador4.png',
    capacidad: 25,
    inscritos: 22,
    rating: 4.7,
    reviews: 156,
    precio: '$18.000',
    ubicacion: 'Sala de Spinning',
    equipamiento: [
      {id: '3:1', label: 'Bicicletas Schwinn'},
      {id: '3:2', label: 'Sistema de sonido'},
      {id: '3:3', label: 'Luces LED'},
      {id: '3:4', label: 'Ventiladores'},
    ],
    beneficios: [
      {id: '3:1', label: 'Quema muchas calorías'},
      {id: '3:2', label: 'Fortalece piernas'},
      {id: '3:3', label: 'Mejora resistencia'},
      {id: '3:4', label: 'Bajo impacto'},
    ],
    horarios: [
      {
        id: '3:1',
        dia: 'Lunes',
        hora: '7:00 AM',
        disponible: true,
        inscritos: 18
      },
      {
        id: '3:2',
        dia: 'Miércoles',
        hora: '6:00 PM',
        disponible: true,
        inscritos: 22
      },
      {
        id: '3:3',
        dia: 'Viernes',
        hora: '7:00 AM',
        disponible: false,
        inscritos: 25
      },
      {
        id: '3:4',
        dia: 'Sábado',
        hora: '8:00 AM',
        disponible: true,
        inscritos: 15
      }
    ],
    proximasClases: [
      {
        fecha: '2024-01-15',
        hora: '7:00 AM',
        disponible: true
      },
      {
        fecha: '2024-01-17',
        hora: '6:00 PM',
        disponible: true
      },
      {
        fecha: '2024-01-19',
        hora: '7:00 AM',
        disponible: false
      }
    ],
    tags: [
      {id: '3:1', label: 'Cardio'},
      {id: '3:2', label: 'Música'},
      {id: '3:3', label: 'Energético'},
      {id: '3:4', label: 'Quema Grasa'},
    ]
  },
  {
    id: 4,
    nombre: 'Boxeo',
    descripcion: 'Entrenamiento intenso que mejora tu coordinación',
    descripcionLarga: 'Entrenamiento completo que combina técnicas de boxeo con acondicionamiento físico. Desarrolla fuerza, velocidad, coordinación y confianza personal.',
    duracion: '60 min',
    nivel: 'Todos los niveles',
    intensidad: 8,
    calorias: 500,
    imagen: '/src/assets/clases/boxeo.png',
    instructor: 'Roberto Silva',
    instructorImagen: '/src/assets/coaches/entrenador2.png',
    capacidad: 12,
    inscritos: 9,
    rating: 4.6,
    reviews: 78,
    precio: '$30.000',
    ubicacion: 'Ring de Boxeo',
    equipamiento: [
      {id: '4:1', label: 'Sacos de boxeo'},
      {id: '4:2', label: 'Pads de enfoque'},
      {id: '4:3', label: 'Guantes'},
      {id: '4:4', label: 'Vendas'},
    ],
    beneficios: [
      {id: '4:1', label: 'Mejora coordinación'},
      {id: '4:2', label: 'Libera estrés'},
      {id: '4:3', label: 'Tonifica todo el cuerpo'},
      {id: '4:4', label: 'Desarrolla confianza'},
    ],
    horarios: [
      {
        id: '4:1',
        dia: 'Martes',
        hora: '6:00 PM',
        disponible: true,
        inscritos: 7
      },
      {
        id: '4:2',
        dia: 'Jueves',
        hora: '7:00 PM',
        disponible: true,
        inscritos: 9
      },
      {
        id: '4:3',
        dia: 'Sábado',
        hora: '10:00 AM',
        disponible: true,
        inscritos: 5
      }
    ],
    proximasClases: [
      {
        fecha: '2024-01-16',
        hora: '6:00 PM',
        disponible: true
      },
      {
        fecha: '2024-01-18',
        hora: '7:00 PM',
        disponible: true
      },
      {
        fecha: '2024-01-20',
        hora: '10:00 AM',
        disponible: true
      }
    ],
    tags: [
      {id: '4:1', label: 'Combate'},
      {id: '4:2', label: 'Fuerza'},
      {id: '4:3', label: 'Coordinación'},
      {id: '4:4', label: 'Defensa Personal'},
    ]
  },
  {
    id: 5,
    nombre: 'Pilates',
    descripcion: 'Fortalecimiento del core y flexibilidad',
    descripcionLarga: 'Sistema de ejercicios que se enfoca en el fortalecimiento del core, mejora de la postura y desarrollo de la flexibilidad a través de movimientos controlados y precisos.',
    duracion: '60 min',
    nivel: 'Principiante',
    intensidad: 4,
    calorias: 250,
    imagen: '/src/assets/clases/pilates.jpg',
    instructor: 'Laura Martínez',
    instructorImagen: '/src/assets/coaches/entrenador3.png',
    capacidad: 15,
    inscritos: 11,
    rating: 4.8,
    reviews: 92,
    precio: '$22.000',
    ubicacion: 'Estudio de Pilates',
    equipamiento: [
      {id: '5:1', label: 'Reformers'},
      {id: '5:2', label: 'Pelotas de pilates'},
      {id: '5:3', label: 'Bandas elásticas'},
      {id: '5:4', label: 'Mats'},
    ],
    beneficios: [
      {id: '5:1', label: 'Fortalece el core'},
      {id: '5:2', label: 'Mejora postura'},
      {id: '5:3', label: 'Aumenta flexibilidad'},
      {id: '5:4', label: 'Reduce dolor de espalda'},
    ],
    horarios: [
      {
        id: '5:1',
        dia: 'Lunes',
        hora: '8:00 AM',
        disponible: true,
        inscritos: 10
      },
      {
        id: '5:2',
        dia: 'Miércoles',
        hora: '5:00 PM',
        disponible: true,
        inscritos: 11
      },
      {
        id: '5:3',
        dia: 'Viernes',
        hora: '8:00 AM',
        disponible: true,
        inscritos: 8
      }
    ],
    proximasClases: [
      {
        fecha: '2024-01-15',
        hora: '8:00 AM',
        disponible: true
      },
      {
        fecha: '2024-01-17',
        hora: '5:00 PM',
        disponible: true
      },
      {
        fecha: '2024-01-19',
        hora: '8:00 AM',
        disponible: true
      }
    ],
    tags: [
      {id: '5:1', label: 'Core'},
      {id: '5:2', label: 'Postura'},
      {id: '5:3', label: 'Rehabilitación'},
      {id: '5:4', label: 'Precisión'},
    ]
  }
];

export const getIntensityColor = (intensidad) => {
    if (intensidad <= 3) return '#4CAF50';
    if (intensidad <= 6) return '#FF9800';
    return '#F44336';
};

export const getIntensityLabel = (intensidad) => {
    if (intensidad <= 3) return 'Baja';
    if (intensidad <= 6) return 'Moderada';
    return 'Alta';
};

export const handleWhatsAppContact = (clase) => {
    const mensaje = encodeURIComponent(`Hola! Me interesa reservar una clase de ${clase.nombre} con ${clase.instructor}.`);
    window.open(`https://wa.me/573123456789?text=${mensaje}`);
};