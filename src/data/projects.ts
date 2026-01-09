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
  {
    title: "Sokoban",
    description: "Implementación del juego y de diferentes estrategias de búsqueda para resolver cualquier nivel válido, calculando la secuencia de movimientos hasta encontrar la solución (si la tiene).",
    github: "https://github.com/DavidAragonRodriguez/sokoban",
    tags: ["Python", "Linux", "VS Code"],
    slides: [
      { 
        type: 'video', 
        src: "/projects/sokoban-demo.webm", 
        poster: "/projects/sokoban-img.png" 
      },
      { 
        type: 'image', 
        src: "/projects/sokoban-img.png" 
      }
    ],
  },
  {
    title: "Propuesta Asociación Iker",
    description: "Propuesta de diseño y funcionalidad para la página web de la Asociación Iker, realizada en la asignatura de Comercio Electrónico, enfocada en la gestión de donaciones y tienda solidaria.",
    pdf: "/projects/asociacion-iker-doc.pdf",
    tags: ["WordPress", "WooCommerce"],
    slides: [
      { 
        type: 'image', 
        src: "/projects/asociacion-iker-img1.jpg"
      },
      { 
        type: 'image', 
        src: "/projects/asociacion-iker-img2.jpg"
      },
      { 
        type: 'image', 
        src: "/projects/asociacion-iker-img3.jpg"
      },
      {
        type: 'image',
        src: "/projects/asociacion-iker-img4.jpg"
      },
      {
        type: 'image',
        src: "/projects/asociacion-iker-img5.jpg"
      },
      {
        type: 'image',
        src: "/projects/asociacion-iker-img6.jpg"
      },
      {
        type: 'image',
        src: "/projects/asociacion-iker-img7.jpg"
      },
      {
        type: 'image',
        src: "/projects/asociacion-iker-img8.jpg"
      },
      {
        type: 'image',
        src: "/projects/asociacion-iker-img9.jpg"
      },
      {
        type: 'image',
        src: "/projects/asociacion-iker-img10.jpg"
      },
      {
        type: 'image',
        src: "/projects/asociacion-iker-img11.jpg"
      }
    ],
  },
  {
    title: "PoC CVE-2021-3129",
    description: "Explotación de la vulnerabilidad de Ejecución Remota de Código (RCE) CVE-2021-3129 en Laravel. Práctica realizada en entorno académico controlado para la asignatura de Seguridad en Sistemas Informáticos.",
    pdf: "/projects/poc-cve-2021-3129-doc.pdf",
    tags: ["Metasploit", "Docker", "Linux", "VirtualBox"],
    slides: [
      { 
        type: 'video', 
        src: "/projects/poc-cve-2021-3129-demo.mp4", 
        poster: "/projects/poc-cve-2021-3129-img.png" 
      },
      { 
        type: 'image', 
        src: "/projects/poc-cve-2021-3129-img.png" 
      }
    ],
  },
];
