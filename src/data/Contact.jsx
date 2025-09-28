import { Email, Facebook, Instagram, Phone, WhatsApp } from "../icons/icons";;
import {testimonioMariaImg,
  testimonioAnaImg,
  testimonioCarlosImg
} from '../assets/images';


export const contacts = [
  { 
    id: 1, 
    icon: <Instagram fontSize="large" />, 
    title: "Instagram", 
    desc: "@valhalla_gym", 
    handle: "@valhalla_gym",
    color: "#E4405F",
    link: "https://instagram.com/valhalla_gym",
    followers: "2.5K seguidores",
    responseTime: "Respuesta en 2h"
  },
  { 
    id: 2, 
    icon: <Facebook fontSize="large" />, 
    title: "Facebook", 
    desc: "Valhalla Gym Oficial", 
    handle: "/ValhallaGymOficial",
    color: "#1877F2",
    link: "https://facebook.com/ValhallaGymOficial",
    followers: "3.2K seguidores",
    responseTime: "Respuesta en 1h"
  },
  { 
    id: 3, 
    icon: <WhatsApp fontSize="large" />, 
    title: "WhatsApp", 
    desc: "+57 123 456 7890", 
    handle: "+57 123 456 7890",
    color: "#25D366",
    link: "https://wa.me/571234567890",
    followers: "Respuesta inmediata",
    responseTime: "24/7"
  },
  { 
    id: 5, 
    icon: <Email fontSize="large" />, 
    title: "Email", 
    desc: "info@valhallagym.com", 
    handle: "contacto@valhallagym.com",
    color: "#EA4335",
    link: "mailto:info@valhallagym.com",
    followers: "Respuesta en 24h",
    responseTime: "Formal"
  },
  { 
    id: 6, 
    icon: <Phone fontSize="large" />, 
    title: "Teléfono Fijo", 
    desc: "(604) 444 1234", 
    handle: "Línea directa",
    color: "#34A853",
    link: "tel:+57123456789",
    followers: "Atención personalizada",
    responseTime: "6AM - 10PM"
  },
];

export const teamMembers = [
  {
    id: '1:1',
    name: "Carlos Martínez",
    role: "Gerente General",
    phone: "+57 123 456 7890",
    email: "carlos@valhallagym.com",
    avatar: testimonioCarlosImg,
    specialty: "Fitness & Nutrición"
  },
  {
    id: '1:2',
    name: "Ana Rodríguez",
    role: "Coordinadora de Membresías",
    phone: "+57 123 456 7890",
    email: "ana@valhallagym.com",
    avatar: testimonioAnaImg,
    specialty: "Atención al Cliente"
  },
  {
    id: '1:3',
    name: "Maria López",
    role: "Entrenador Principal",
    phone: "+57 123 456 7890",
    email: "maria@valhallagym.com",
    avatar: testimonioMariaImg,
    specialty: "Entrenamiento Personalizado"
  }
];