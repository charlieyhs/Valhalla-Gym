import {location1Img,
  location2Img
} from '../assets/images';

export const ubicaciones =[
  {
    id: 1,
    nombre: 'Valhalla Centro',
    direccion: 'Calle 72 #10-50, Bogotá',
    direccionCorta: 'Calle 72 #10-50',
    zona: 'Zona Rosa',
    telefono: '+57 1 234-5678',
    whatsapp: '+57 123 456-7890',
    horarios: {
      lunesViernes: '5: 00 AM - 11: 00 PM',
      finSemana: '6: 00 AM - 10: 00 PM'
    },
    servicios: [
      {
        id: '1: 1',
        label: 'Pesas',
        icon: '🏋️‍♂️'
      },
      {
        id: '1: 2',
        label: 'Cardio',
        icon: '🏃‍♀️'
      },
      {
        id: '1: 3',
        label: 'Clases grupales',
        icon: '👥'
      },
      {
        id: '1: 4',
        label: 'Vestuarios',
        icon: '🚿'
      },
      {
        id: '1: 5',
        label: 'Parqueadero',
        icon: '🚗'
      },
      {
        id: '1: 6',
        label: 'WiFi Gratis',
        icon: '📶'
      }
    ],
    imagen: location1Img,
    rating: 4.8,
    distancia: '2.1 km',
    capacidad: 150,
    ocupacionActual: 65,
    caracteristicas: [
        {id: '1:1', label: 'Aire acondicionado'},
        {id: '1:2', label: 'Música ambiente'},
        {id: '1:3', label: 'Entrenador personal disponible'},
        {id: '1:4', label: '24/7 los fines de semana'}
    ]
  },
  {
    id: 2,
    nombre: 'Valhalla Norte',
    direccion: 'Carrera 15 #123-45, Bogotá',
    direccionCorta: 'Carrera 15 #123-45',
    zona: 'Zona Norte',
    telefono: '+57 1 234-5679',
    whatsapp: '+57 123 456-7890',
    horarios: {
      lunesViernes: '5: 00 AM - 10: 00 PM',
      finSemana: '7: 00 AM - 9: 00 PM'
    },
    servicios: [
      {
        id: '2: 1',
        label: 'Pesas',
        icon: '🏋️‍♂️'
      },
      {
        id: '2: 2',
        label: 'Cardio',
        icon: '🏃‍♀️'
      },
      {
        id: '2: 3',
        label: 'Crossfit',
        icon: '💪'
      },
      {
        id: '2: 4',
        label: 'Spa',
        icon: '🧘‍♀️'
      },
      {
        id: '2: 5',
        label: 'Piscina',
        icon: '🏊‍♀️'
      },
      {
        id: '2: 6',
        label: 'Sauna',
        icon: '🔥'
      }
    ],
    imagen: location2Img,
    rating: 4.6,
    distancia: '5.3 km',
    capacidad: 200,
    ocupacionActual: 180,
    caracteristicas: [
        {id: '2:1', label: 'Instalaciones premium'},
        {id: '2:2', label: 'Clases especializadas'},
        {id: '2:3', label: 'Nutricionista disponible'},
        {id: '2:4', label: 'Zona de relajación'}
    ]
  }
];