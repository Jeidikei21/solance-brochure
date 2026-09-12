# SOLANCE SPA — Web Brochure (One Page)

Maqueta HTML/CSS/JS de una página web tipo brochure, con diseño industrial
minimalista (blanco / gris / negro + naranjo) y scroll por secciones ("slide"
hacia abajo).

## Estructura de carpetas

```
SOLANCE/
├── index.html              → Página única. Todo el contenido y el texto se edita aquí.
├── css/
│   └── style.css           → Estilos, colores, tipografías, layout y responsive.
├── js/
│   └── main.js              → Menú móvil, navegación activa, contador de estadísticas, barra de progreso.
└── assets/
    ├── img/
    │   ├── logo/            → logo.svg (o logo.png) y favicon.png
    │   ├── hero/             → hero-poster.jpg (imagen de fondo/portada mientras carga el video)
    │   ├── nosotros/         → equipo.jpg (foto para la sección "Nosotros")
    │   ├── proyectos/        → proyecto-01.jpg, proyecto-02.jpg, ... (galería de trabajos)
    │   └── iconos/           → ingenieria.svg, fabricacion.svg, montaje.svg, mantenimiento.svg,
    │                           automatizacion.svg, consultoria.svg (íconos de cada servicio)
    └── video/
        └── hero-loop.mp4     → video de fondo del hero (opcional)
```

## Cómo agregar tus recursos

1. **Logo:** reemplaza `assets/img/logo/logo.svg` por tu logo (idealmente en SVG o PNG
   con fondo transparente). Si el archivo no existe, la web muestra automáticamente el
   texto "SOLANCE." como respaldo — no se rompe el diseño.
2. **Favicon:** agrega `assets/img/logo/favicon.png` (32x32 o 64x64 px).
3. **Video del hero (opcional):** coloca tu video en `assets/video/hero-loop.mp4`
   (ideal: 1920x1080, sin audio, formato mp4, comprimido bajo ~8MB). Si no subes video,
   se ve el fondo negro con la grilla decorativa igual.
4. **Foto de portada del hero:** `assets/img/hero/hero-poster.jpg` se muestra mientras
   carga el video (o si el navegador no puede reproducirlo).
5. **Foto de equipo/instalaciones:** `assets/img/nosotros/equipo.jpg` (proporción vertical,
   idealmente 4:5).
6. **Galería de proyectos:** agrega `proyecto-01.jpg`, `proyecto-02.jpg`, `proyecto-03.jpg`,
   `proyecto-04.jpg` en `assets/img/proyectos/` (proporción horizontal, ideal 16:11).
   Si quieres más de 4 proyectos, copia un bloque `<a class="project-card">...</a>` dentro
   de `index.html` en la sección `#proyectos`.
7. **Íconos de servicios:** `assets/img/iconos/paneles-solares.svg`, `sitios-moviles.svg`
   y `tecnologia.svg` (uno por cada uno de los 3 servicios). Son SVG simples de línea
   (estilo industrial). Si no tienes íconos propios, la tarjeta de servicio simplemente no
   muestra ícono (no rompe el diseño). Puedes descargar íconos de línea gratuitos en sitios
   como Heroicons, Feather Icons o Tabler Icons y guardarlos con esos nombres.

## Contenido de Servicios

La sección "Servicios" ya viene redactada con tus 3 líneas de negocio reales:

1. **Limpieza de Paneles Solares** — hogares, empresas y pequeños negocios.
2. **Mantenimiento de Sitios Móviles** — zonas rurales, en alianza con **DESIGENIA** (Europa).
3. **Tecnología y Optimización Operativa** — seguridad/CCTV, telecomunicaciones,
   automatización, dashboards y control de acceso (basado en tu presentación de servicios).

También se agregó una sección **"Proceso"** (Diagnóstico → Priorización → Propuesta →
Implementación → Seguimiento) tomada de la misma presentación, y una mención a la alianza
con DESIGENIA en "Nosotros" y en una tarjeta flotante sobre el hero. Ajusta cualquiera de
estos textos directamente en `index.html`.

Todas las imágenes usan `onerror` como respaldo visual, así que puedes subir el sitio
a GitHub incluso sin haber agregado todavía tus fotos/videos definitivos.

## Editar textos y colores

- **Textos:** todo el copy (títulos, servicios, descripción de la empresa, datos de
  contacto) está directamente en `index.html`, en español, listo para modificar.
- **Colores:** están centralizados como variables CSS al inicio de `css/style.css`,
  dentro de `:root`. Cambia `--orange` si quieres otro tono de naranjo, o los grises
  (`--gray-100` a `--gray-900`) para ajustar el contraste.
- **Servicios / estadísticas / proyectos:** son bloques repetibles en `index.html`,
  puedes duplicar o eliminar `<article class="service-card">`, `<div class="stat">`
  o `<a class="project-card">` según necesites.

## Subir a GitHub

```bash
git init
git add .
git commit -m "Maqueta inicial brochure SOLANCE SPA"
git branch -M main
git remote add origin <URL_DE_TU_REPOSITORIO>
git push -u origin main
```

### Publicar con GitHub Pages (opcional)

1. Sube el repositorio a GitHub.
2. Ve a **Settings → Pages**.
3. En "Source" elige la rama `main` y la carpeta `/ (root)`.
4. Guarda. En unos minutos tu brochure quedará publicado en
   `https://<tu-usuario>.github.io/<nombre-del-repo>/`.

## Notas técnicas

- El scroll "slide" entre secciones se logra con `scroll-snap-type` en CSS
  (ver `.snap-container` en `style.css`); en pantallas pequeñas se desactiva
  para evitar que se corte contenido largo.
- El menú lateral de puntos (derecha) y el menú superior se resaltan solos según
  la sección visible, usando `IntersectionObserver` en `js/main.js`.
- El formulario de contacto es solo de interfaz (no envía datos todavía). Para
  que funcione de verdad, conéctalo a un servicio como Formspree, EmailJS, o a tu
  propio backend, y reemplaza el `alert()` en `js/main.js`.
