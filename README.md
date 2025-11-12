# 💼 Mi Portafolio Personal

Sitio web personal y profesional desarrollado con Angular 17 y PrimeNG. Diseñado para mostrar proyectos, habilidades y experiencia de manera elegante y moderna.

[![Angular](https://img.shields.io/badge/Angular-17-red?logo=angular)](https://angular.io/)
[![PrimeNG](https://img.shields.io/badge/PrimeNG-17-blue?logo=primeng)](https://primeng.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.2-blue?logo=typescript)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

## ✨ Características

- 🎨 **Diseño Moderno**: Interfaz limpia y profesional con efectos glassmorphism
- 📱 **Totalmente Responsivo**: Adaptado para todos los dispositivos
- ⚡ **Alto Rendimiento**: Optimizado para carga rápida
- 🎭 **Animaciones Suaves**: Transiciones y efectos visuales elegantes
- 🎯 **SEO Friendly**: Optimizado para motores de búsqueda
- ♿ **Accesible**: Cumple con estándares de accesibilidad web

## 🚀 Demo en Vivo

🔗 [Ver sitio en vivo](https://tu-portafolio.vercel.app) _(Próximamente)_

## 📸 Capturas de Pantalla

![Home](docs/screenshots/home.png)
![Proyectos](docs/screenshots/projects.png)

## �️ Tecnologías Utilizadas

- **Angular 17** - Framework principal
- **PrimeNG 17** - Biblioteca de componentes UI
- **PrimeFlex** - Utilidades CSS
- **PrimeIcons** - Iconografía
- **TypeScript** - Lenguaje de programación
- **SCSS** - Preprocesador CSS

## 📁 Estructura del Proyecto

```
src/
├── app/
│   ├── components/
│   │   ├── navbar/          # Barra de navegación
│   │   ├── home/            # Página de inicio
│   │   ├── biography/       # Página de biografía
│   │   ├── projects/        # Página de proyectos
│   │   └── contact/         # Página de contacto
│   ├── app.component.*      # Componente raíz
│   └── app.routes.ts        # Configuración de rutas
├── styles.scss              # Estilos globales
└── index.html              # Archivo HTML principal
```

## 🛠️ Instalación y Configuración

### Prerrequisitos

- Node.js (versión 18 o superior)
- npm o yarn

### Pasos de instalación

1. **Clonar el repositorio**

   ```bash
   git clone <tu-repositorio>
   cd proyecto-sitio-personal
   ```

2. **Instalar dependencias**

   ```bash
   npm install
   ```

3. **Ejecutar en modo desarrollo**

   ```bash
   npm start
   ```

   El sitio estará disponible en `http://localhost:4200`

4. **Construir para producción**
   ```bash
   npm run build
   ```

## 🎨 Características

- **Diseño Responsivo**: Adaptado para dispositivos móviles y desktop
- **Navegación Intuitiva**: Barra de navegación con enlaces a todas las secciones
- **Componentes Modernos**: Utilizando PrimeNG para una interfaz profesional
- **Arquitectura Standalone**: Componentes independientes de Angular 17
- **Routing**: Navegación por SPA con Angular Router

## 📄 Secciones

### Inicio

- Presentación personal
- Resumen de habilidades principales
- Enlaces directos a proyectos y contacto

### Biografía

- Información personal y profesional
- Experiencia y formación
- Objetivos y pasiones

### Proyectos

- Galería de proyectos realizados
- Descripción de tecnologías utilizadas
- Enlaces a demos y código fuente

### Contacto

- Formulario de contacto funcional
- Información de contacto
- Enlaces a redes sociales

## 🔧 Personalización

Para personalizar el portafolio con tu información:

1. **Información Personal**: Edita los componentes en `src/app/components/`
2. **Estilos**: Modifica `src/styles.scss` y los archivos SCSS específicos
3. **Proyectos**: Actualiza el array de proyectos en `projects.component.ts`
4. **Imágenes**: Agrega tus imágenes en `src/assets/`

## 📱 Comandos Disponibles

- `npm start` - Ejecutar en modo desarrollo
- `npm run build` - Construir para producción
- `npm test` - Ejecutar pruebas
- `npm run watch` - Construir y observar cambios

## 🌐 Despliegue

Este proyecto puede ser desplegado en:

- GitHub Pages
- Netlify
- Vercel
- Firebase Hosting
- Cualquier servidor web estático

## 📧 Contacto

Si tienes preguntas o sugerencias sobre este proyecto, no dudes en contactarme.

---

**Nota**: Este es un proyecto base que puedes personalizar según tus necesidades. ¡Diviértete desarrollando tu portafolio!
