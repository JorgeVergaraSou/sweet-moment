// src/data/navItems.ts
import { FaConciergeBell, FaEnvelope, FaImages, FaHome } from "react-icons/fa";
import { PublicRoutes } from "../models";

const navItems = [
  { label: "Home", path: PublicRoutes.HOME, icon: FaHome },
  { label: "Galería", path: PublicRoutes.GALERIA, icon: FaImages },
  { label: "Servicios", path: PublicRoutes.SERVICIOS, icon: FaConciergeBell },
  { label: "Contacto", path: PublicRoutes.CONTACTO, icon: FaEnvelope },
];

export default navItems;
