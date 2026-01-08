# Porfolio Personal - David Aragón Rodríguez

Este es el repositorio del código fuente de mi porfolio personal, diseñado para mostrar mi formación, habilidades y proyectos como Ingeniero Informático.

## Tecnologías

El proyecto está construido utilizando un stack moderno enfocado en el rendimiento:

- **[Astro](https://astro.build/):** Framework web principal.
- **[Tailwind CSS](https://tailwindcss.com/):** Framework de estilos "utility-first".
- **[Astro Icon](https://www.astroicon.dev/):** Sistema para gestionar la iconografía.

## Instalación y Uso

Si quieres ejecutar este proyecto en local:

1.  **Clonar e instalar dependencias:**

    ```bash
    npm install
    ```

2.  **Arrancar el servidor de desarrollo:**
    ```bash
    npm run dev
    ```

## Historial de Comandos (Setup del Proyecto)

Estos son los comandos principales que se han ejecutado para configurar el entorno y las librerías actuales:

```bash
# 1. Creación del proyecto base
npm create astro@latest

# 2. Integración de Tailwind CSS
npx astro add tailwind

# 3. Instalación del componente de iconos
npm install astro-icon

# 4. Descarga de colecciones de iconos (Iconify)
# Colección principal para lenguajes de programación
npm install -D @iconify-json/devicon

# Colección para marcas y herramientas extra (ej. VirtualBox)
npm install -D @iconify-json/simple-icons

# Colección alternativa para logos oficiales a color (opcional)
npm install -D @iconify-json/logos
```

## Créditos de Iconos y Recursos

La iconografía del porfolio se gestiona de forma híbrida para asegurar la mejor calidad visual:

### 1. Librerías Automáticas (via Iconify)

Se utilizan las colecciones **Devicon** y **Simple Icons** para la mayoría de las tecnologías (Java, Python, .NET, etc.) a través del componente `<Icon />`.

### 2. SVGs Personalizados (Inline)

Para mejorar la calidad o fidelidad de color de ciertos logotipos, se han insertado los SVG directamente en el código (`Skills.astro`). Estos iconos corresponden a:

- **C:** Logo tipo "Escudo" (Blue Shield version).
- **Cisco Packet Tracer:** Logo oficial detallado.
- **Scrum:** Icono esquemático circular.
- **Visual Basic:** Se ha utilizado el SVG del set original pero insertado en bloque para control de estilos.

---

Hecho por **David Aragón Rodríguez** - 2026
