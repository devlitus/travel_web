# 🌍 Viajes Para Ti - Travel Website

Una elegante página web de viajes implementada con Astro y diseñada siguiendo las especificaciones de Figma.

## 🚀 Características

- **Diseño Responsivo**: Adaptado para dispositivos móviles y de escritorio
- **Componentes Modulares**: Arquitectura basada en componentes reutilizables
- **Imágenes Optimizadas**: Imágenes descargadas directamente desde Figma
- **Tipografía Moderna**: Utiliza la fuente Plus Jakarta Sans
- **Interfaz Intuitiva**: Navegación clara y llamadas a la acción efectivas

## 🎨 Diseño

El diseño fue implementado basándose en el archivo de Figma:
[Travel Design - Figma](https://www.figma.com/design/px14EzdeCOqx6IVBfXZI8n/Travel-desing?node-id=13-2&t=8juij1YnLY8x9vx5-11)

### Secciones Principales

1. **Header**: Navegación con logo, menú y botones de autenticación
2. **Hero**: Sección principal con búsqueda de destinos
3. **Destinos Populares**: Tarjetas de ciudades destacadas
4. **Ofertas Especiales**: Promociones de viajes temáticos
5. **Call-to-Action**: Invitación a contactar
6. **Footer**: Enlaces y redes sociales

## 🛠️ Tecnologías Utilizadas

- **Astro**: Framework web moderno y rápido
- **CSS**: Estilos personalizados con variables CSS
- **TypeScript**: Para tipado de componentes
- **Plus Jakarta Sans**: Fuente principal del proyecto

## 🎯 Componentes

### `Header.astro`
- Logo con iconos SVG
- Menú de navegación
- Botones de registro e inicio de sesión

### `Hero.astro`
- Imagen de fondo con overlay
- Título y descripción principal
- Formulario de búsqueda de destinos

### `DestinationCard.astro`
- Tarjeta reutilizable para destinos
- Imagen, título y descripción
- Diseño responsive

### `OfferCard.astro`
- Tarjeta para ofertas especiales
- Layout optimizado para promociones
- Imágenes de alta calidad

### `Footer.astro`
- Enlaces de navegación secundaria
- Iconos de redes sociales
- Copyright y términos legales

## 🎨 Paleta de Colores

```css
--background-color: #122117   /* Verde oscuro principal */
--color-primary: #122117      /* Verde oscuro */
--color-secondary: #ffffff    /* Blanco */
--color-tertiary: #38e078     /* Verde claro/accent */
--color-quaternary: #264533   /* Verde medio */
--color-quinary: #1c3024      /* Verde oscuro alternativo */
--color-senary: #96c4a8       /* Verde claro/texto secundario */
--color-septenary: #366347    /* Verde medio borders */
--color-octonary: #e5e8eb     /* Gris claro borders */
```

## 🚀 Instalación y Uso

1. **Instalar dependencias**:
   ```bash
   npm install
   ```

2. **Iniciar servidor de desarrollo**:
   ```bash
   npm run dev
   ```

3. **Compilar para producción**:
   ```bash
   npm run build
   ```

4. **Previsualizar build de producción**:
   ```bash
   npm run preview
   ```

## 📁 Estructura del Proyecto

```
travel_web/
├── public/
│   └── images/          # Imágenes descargadas de Figma
├── src/
│   ├── components/      # Componentes reutilizables
│   ├── layouts/         # Layout principal
│   ├── pages/          # Páginas del sitio
│   └── styles/         # Estilos globales
├── astro.config.mjs    # Configuración de Astro
├── package.json        # Dependencias del proyecto
└── tsconfig.json       # Configuración de TypeScript
```

## 🌟 Características del Diseño

- **Navegación Fija**: Header siempre visible
- **Búsqueda Integrada**: Formulario de búsqueda en el hero
- **Grid Responsivo**: Layout adaptativo para diferentes pantallas
- **Hover Effects**: Interacciones suaves en botones y enlaces
- **Imágenes de Alta Calidad**: Optimizadas desde Figma

## 📱 Responsive Design

El sitio está optimizado para:
- **Desktop**: 1280px y superior
- **Tablet**: 768px - 1279px
- **Mobile**: Menos de 768px

## 🤝 Contribuciones

Este proyecto implementa fielmente el diseño proporcionado en Figma. Para contribuciones:

1. Fork el proyecto
2. Crea una rama para tu feature
3. Commit los cambios
4. Push a la rama
5. Abre un Pull Request

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

---

**Desarrollado con ❤️ usando Astro y diseño de Figma**

```sh
npm create astro@latest -- --template basics
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/basics)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/basics)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/basics/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

![just-the-basics](https://github.com/withastro/astro/assets/2244813/a0a5533c-a856-4198-8470-2d67b1d7c554)

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
