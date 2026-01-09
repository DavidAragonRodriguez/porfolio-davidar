// Definimos la interfaz aquí para que esté ordenada
export interface Slide {
  type: 'video' | 'image';
  src: string;
  poster?: string;
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  slides: Slide[];
  github?: string;
  pdf?: string;
  link?: string;
}

export const PROJECTS: Project[] = [
  {
    title: "IPOkemon - Porygon2",
    description: "Aplicación de escritorio que recrea la interfaz y animaciones del Pokémon Porygon2. Desarrollada para la asignatura de Interacción Persona-Ordenador II, enfocada en UX/UI dinámica.",
    github: "https://github.com/DavidAragonRodriguez/ipokemon-porygon2",
    tags: ["C#", ".NET", "XAML"],
    slides: [
      { 
        type: 'video', 
        src: "/projects/porygon2-demo.mp4", 
        poster: "/projects/porygon2-img.png" 
      }
    ],
  },
  {
    title: "Simulación Proyecto ISO II",
    description: "Simulación integral de un proyecto de consultoría real en equipo de 6 personas. Arquitectura cliente-servidor siguiendo la metodología PUD (Proceso Unificado de Desarrollo).",
    github: "https://github.com/DavidAragonRodriguez/2024-ISO2-BC04",
    tags: ["Visual Paradigm", "Git", "PUD", "Ágil"],
    slides: [
      { 
        type: 'image', 
        src: "/projects/simulacion-proyecto-isoii-img.png" 
      }
    ],
  },
  {
    title: "F1 Database Manager",
    description: "Gestor de base de datos de Fórmula 1 con simulación de temporadas. Permite administrar pilotos, escuderías y circuitos, además de generar calendarios y resultados ficticios automáticamente.",
    github: "https://github.com/DavidAragonRodriguez/formula1_bbdd_ficticia",
    tags: ["MySQL", "Visual Basic", "Visual Studio"],
    slides: [
      { 
        type: 'video', 
        src: "/projects/formula1-demo.mp4", 
        poster: "/projects/formula1-img.png" 
      },
      { 
        type: 'image', 
        src: "/projects/formula1-img.png" 
      }
    ],
  },
  // ... Aquí puedes seguir pegando hasta tener tus 12 proyectos
];
