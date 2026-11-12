export type Padre = {
  nombre: string;
  vinculo: "Mamá" | "Papá";
  estado: "activa" | "invitación enviada";
};

export type Nino = {
  id: number;
  nombre: string;
  edad: string;
  inicial: string;
  colorAvatar: string;
  colorInicial: string;
  fechaNacimiento: string;
  sala: string;
  ingreso: string;
  padres: Padre[];
  alerta?: { etiqueta: "MANÍ" | "LACTOSA"; descripcion: string };
};

export const ninos: Nino[] = [
  {
    id: 1, nombre: "Mateo Fernández", edad: "3 años", inicial: "M", colorAvatar: "#A9D9E8", colorInicial: "#1F7A93",
    fechaNacimiento: "12 mar 2022", sala: "Soles", ingreso: "feb 2025",
    padres: [
      { nombre: "Lucía Fernández", vinculo: "Mamá", estado: "activa" },
      { nombre: "Diego Fernández", vinculo: "Papá", estado: "invitación enviada" },
    ],
    alerta: { etiqueta: "MANÍ", descripcion: "Alergia al maní. Evitar frutos secos. Lleva inhalador en la mochila." },
  },
  {
    id: 2, nombre: "Sofía Méndez", edad: "2 años", inicial: "S", colorAvatar: "#F4B8CC", colorInicial: "#C44A7A",
    fechaNacimiento: "8 sep 2024", sala: "Soles", ingreso: "mar 2025",
    padres: [{ nombre: "Mariana Méndez", vinculo: "Mamá", estado: "activa" }],
  },
  {
    id: 3, nombre: "Benjamín Ruiz", edad: "3 años", inicial: "B", colorAvatar: "#B9DEC4", colorInicial: "#3E8B62",
    fechaNacimiento: "20 abr 2023", sala: "Soles", ingreso: "ene 2025",
    padres: [
      { nombre: "Carla Ruiz", vinculo: "Mamá", estado: "activa" },
      { nombre: "Nicolás Ruiz", vinculo: "Papá", estado: "activa" },
    ],
  },
  {
    id: 4, nombre: "Valentina Soto", edad: "2 años", inicial: "V", colorAvatar: "#F4DC8E", colorInicial: "#9A7B1E",
    fechaNacimiento: "14 oct 2024", sala: "Soles", ingreso: "abr 2025", padres: [],
  },
  {
    id: 5, nombre: "Tomás Díaz", edad: "3 años", inicial: "T", colorAvatar: "#C9B6E8", colorInicial: "#7B5FC0",
    fechaNacimiento: "5 feb 2023", sala: "Soles", ingreso: "feb 2025",
    padres: [{ nombre: "Andrea Díaz", vinculo: "Mamá", estado: "activa" }],
    alerta: { etiqueta: "LACTOSA", descripcion: "Intolerancia a la lactosa. Evitar lácteos en las comidas." },
  },
  {
    id: 6, nombre: "Emma Castro", edad: "2 años", inicial: "E", colorAvatar: "#F4B8CC", colorInicial: "#C44A7A",
    fechaNacimiento: "3 dic 2023", sala: "Soles", ingreso: "mar 2025",
    padres: [{ nombre: "Julia Castro", vinculo: "Mamá", estado: "activa" }],
  },
  {
    id: 7, nombre: "Lucas Romero", edad: "3 años", inicial: "L", colorAvatar: "#A9D9E8", colorInicial: "#1F7A93",
    fechaNacimiento: "11 may 2023", sala: "Soles", ingreso: "ene 2025",
    padres: [{ nombre: "Gabriel Romero", vinculo: "Papá", estado: "activa" }],
  },
  {
    id: 8, nombre: "Olivia Vega", edad: "2 años", inicial: "O", colorAvatar: "#B9DEC4", colorInicial: "#3E8B62",
    fechaNacimiento: "18 nov 2023", sala: "Soles", ingreso: "abr 2025",
    padres: [{ nombre: "Paula Vega", vinculo: "Mamá", estado: "activa" }],
  },
];
