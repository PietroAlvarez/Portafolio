# 🚀 Guía de Despliegue - Portafolio Personal

Esta guía te mostrará cómo poner tu portafolio en línea **GRATIS** usando diferentes plataformas.

## 📋 Preparación Previa

Antes de desplegar, asegúrate de que tu proyecto esté listo:

1. **Personaliza tu contenido**

   - Actualiza tu nombre, información personal, proyectos, etc.
   - Agrega tu foto personal

2. **Compila el proyecto** (para verificar que todo funciona)

   ```bash
   npm run build
   ```

3. **Crea un repositorio en GitHub** (necesario para la mayoría de opciones)
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/TU_USUARIO/TU_REPOSITORIO.git
   git push -u origin main
   ```

---

## 🎯 Opciones de Despliegue Gratuito

### 1. ⭐ **Vercel** (RECOMENDADO - MÁS FÁCIL)

**Ventajas:**

- ✅ Despliegue automático en segundos
- ✅ Dominio gratuito (.vercel.app)
- ✅ HTTPS automático
- ✅ CI/CD automático (se actualiza cada vez que haces push a GitHub)
- ✅ Excelente rendimiento
- ✅ Sin configuración necesaria para Angular

**Pasos:**

1. Ve a [vercel.com](https://vercel.com)
2. Regístrate con tu cuenta de GitHub
3. Haz clic en "Add New Project"
4. Importa tu repositorio de GitHub
5. Vercel detectará automáticamente que es un proyecto Angular
6. Haz clic en "Deploy"
7. ¡Listo! Tu sitio estará en línea en 1-2 minutos

**Dominio:** `tu-portafolio.vercel.app`

**Actualizar:** Solo haz `git push` y se actualiza automáticamente

---

### 2. 🔥 **Netlify**

**Ventajas:**

- ✅ Muy similar a Vercel
- ✅ Dominio gratuito (.netlify.app)
- ✅ HTTPS automático
- ✅ CI/CD automático
- ✅ Funciones serverless

**Pasos:**

1. Ve a [netlify.com](https://netlify.com)
2. Regístrate con tu cuenta de GitHub
3. Haz clic en "Add new site" → "Import an existing project"
4. Conecta tu repositorio de GitHub
5. Configuración de build:
   - Build command: `npm run build`
   - Publish directory: `dist/sitio-personal-portfolio/browser`
6. Haz clic en "Deploy site"

**Dominio:** `tu-portafolio.netlify.app`

---

### 3. 📄 **GitHub Pages**

**Ventajas:**

- ✅ Totalmente gratuito
- ✅ Integrado con GitHub
- ✅ Dominio: `tu-usuario.github.io/tu-repo`

**Pasos:**

1. Instala el paquete angular-cli-ghpages:

   ```bash
   npm install -g angular-cli-ghpages
   ```

2. Compila para producción:

   ```bash
   npm run build -- --base-href "/nombre-de-tu-repo/"
   ```

3. Despliega:

   ```bash
   npx angular-cli-ghpages --dir=dist/sitio-personal-portfolio/browser
   ```

4. Ve a la configuración de tu repositorio en GitHub:
   - Settings → Pages
   - Source: gh-pages branch

**Dominio:** `https://tu-usuario.github.io/nombre-repo/`

---

### 4. ☁️ **Firebase Hosting**

**Ventajas:**

- ✅ Google Cloud Platform
- ✅ CDN global
- ✅ HTTPS gratis
- ✅ Buen rendimiento

**Pasos:**

1. Instala Firebase CLI:

   ```bash
   npm install -g firebase-tools
   ```

2. Inicia sesión:

   ```bash
   firebase login
   ```

3. Inicializa Firebase en tu proyecto:

   ```bash
   firebase init hosting
   ```

   - Selecciona "Create a new project"
   - Public directory: `dist/sitio-personal-portfolio/browser`
   - Single-page app: Yes
   - GitHub deploys: No (por ahora)

4. Compila y despliega:
   ```bash
   npm run build
   firebase deploy
   ```

**Dominio:** `tu-proyecto.web.app` o `tu-proyecto.firebaseapp.com`

---

### 5. 🎨 **Render**

**Ventajas:**

- ✅ Sitios estáticos gratuitos
- ✅ Despliegue automático desde GitHub
- ✅ HTTPS incluido

**Pasos:**

1. Ve a [render.com](https://render.com)
2. Regístrate con GitHub
3. "New" → "Static Site"
4. Conecta tu repositorio
5. Configuración:
   - Build Command: `npm run build`
   - Publish Directory: `dist/sitio-personal-portfolio/browser`
6. "Create Static Site"

---

## 🌐 Usar tu Propio Dominio (Opcional)

Si quieres usar un dominio personalizado (ej: `www.tunombre.com`):

1. **Compra un dominio** en:

   - [Namecheap](https://www.namecheap.com) (~$10/año)
   - [Google Domains](https://domains.google)
   - [GoDaddy](https://www.godaddy.com)

2. **Configura el DNS** en tu plataforma de hosting:
   - Vercel: Settings → Domains → Add domain
   - Netlify: Domain settings → Add custom domain
   - GitHub Pages: Agrega archivo `CNAME` con tu dominio

---

## 📊 Comparación Rápida

| Plataforma       | Dificultad   | Velocidad     | Auto-Deploy | Recomendado Para |
| ---------------- | ------------ | ------------- | ----------- | ---------------- |
| **Vercel**       | ⭐ Muy Fácil | ⚡ Rapidísimo | ✅ Sí       | Principiantes    |
| **Netlify**      | ⭐ Muy Fácil | ⚡ Rapidísimo | ✅ Sí       | Todos            |
| **GitHub Pages** | ⭐⭐ Fácil   | ⚡ Rápido     | ⚠️ Manual   | Desarrolladores  |
| **Firebase**     | ⭐⭐⭐ Medio | ⚡ Rápido     | ⚠️ Manual   | Con experiencia  |
| **Render**       | ⭐⭐ Fácil   | ⚡ Rápido     | ✅ Sí       | Todos            |

---

## 💡 Mi Recomendación

Para tu portafolio profesional, te recomiendo **Vercel** por estas razones:

1. **Configuración en 2 minutos** - Solo conectas GitHub y listo
2. **Actualizaciones automáticas** - Cada push actualiza el sitio
3. **Rendimiento excepcional** - CDN global ultra rápido
4. **Gratis para siempre** - Para proyectos personales
5. **URL profesional** - Puedes usar dominio custom gratis

### Pasos Rápidos con Vercel:

```bash
# 1. Asegúrate de tener tu código en GitHub
git add .
git commit -m "Ready to deploy"
git push

# 2. Ve a vercel.com y conecta tu repo

# 3. ¡Espera 1 minuto y tu sitio está en línea!
```

---

## 🔧 Optimizaciones Antes de Desplegar

### 1. Agrega un favicon

Coloca tu `favicon.ico` en `/src/`

### 2. Actualiza el título y meta tags

Edita `src/index.html`:

```html
<head>
  <meta charset="utf-8" />
  <title>Tu Nombre - Desarrollador Full Stack</title>
  <meta
    name="description"
    content="Portafolio de Tu Nombre - Desarrollador Full Stack especializado en Angular, Node.js y más"
  />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="icon" type="image/x-icon" href="favicon.ico" />

  <!-- Open Graph para compartir en redes sociales -->
  <meta property="og:title" content="Tu Nombre - Desarrollador Full Stack" />
  <meta
    property="og:description"
    content="Conoce mis proyectos y experiencia"
  />
  <meta property="og:image" content="/assets/preview.jpg" />
  <meta property="og:url" content="https://tu-dominio.com" />
</head>
```

### 3. Optimiza el bundle size

Si el warning de bundle size te preocupa, agrega esto a `angular.json`:

```json
"budgets": [
  {
    "type": "initial",
    "maximumWarning": "2mb",
    "maximumError": "5mb"
  }
]
```

### 4. Agrega Google Analytics (opcional)

Para ver cuántas visitas recibes, agrega Google Analytics en `index.html`.

---

## 📱 Comparte tu Portafolio

Una vez en línea, comparte tu portafolio en:

- ✅ LinkedIn (actualiza tu perfil con la URL)
- ✅ GitHub (añade la URL en la descripción de tu repo)
- ✅ CV/Resume
- ✅ Tarjetas de presentación
- ✅ Email de firma profesional
- ✅ Stack Overflow, Dev.to, etc.

---

## ❓ Preguntas Frecuentes

**Q: ¿Cuánto cuesta mantener el sitio en línea?**
A: $0 - Todas las opciones mencionadas son completamente gratuitas.

**Q: ¿Puedo cambiar de plataforma después?**
A: Sí, puedes migrar fácilmente entre plataformas cuando quieras.

**Q: ¿Necesito saber sobre servidores?**
A: No, estas plataformas manejan todo automáticamente.

**Q: ¿Cuánto tarda en estar en línea?**
A: Entre 1-5 minutos dependiendo de la plataforma.

**Q: ¿Puedo usar HTTPS?**
A: Sí, todas las plataformas incluyen HTTPS gratuito automáticamente.

---

## 🎓 Próximos Pasos

Después de desplegar:

1. ✅ Agrega el enlace a tu LinkedIn
2. ✅ Comparte en redes sociales
3. ✅ Añade más proyectos conforme los hagas
4. ✅ Actualiza tu experiencia regularmente
5. ✅ Considera agregar un blog
6. ✅ Implementa Google Analytics para ver el tráfico

---

¿Necesitas ayuda con el despliegue? ¡Solo pregunta! 🚀
