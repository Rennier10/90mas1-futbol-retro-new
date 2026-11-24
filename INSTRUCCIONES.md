# 90+1 Fútbol Retro & New — Instrucciones completas

---

## Contenido del proyecto

```
WebMD90mas1/
├── index.html              ← Página de inicio (Hero + Camerino + Featured)
├── pages/
│   ├── catalog.html        ← Catálogo completo
│   ├── cart.html           ← Carrito simulado
│   ├── nosotros.html       ← Nosotros + Guía de marca
│   └── contacto.html       ← Formulario de contacto
├── css/
│   ├── reset.css
│   ├── variables.css       ← Tokens de diseño (colores, fuentes, espacios)
│   ├── main.css            ← Botones, toast, cursor, base
│   ├── nav.css
│   ├── hero.css            ← Scoreboard animado, camerino bg
│   ├── locker.css          ← Perchero, hangers, guayos
│   ├── product-modal.css   ← Modal de detalle de producto
│   ├── cart.css            ← Cart drawer lateral
│   ├── sections.css        ← Highlights, featured, brands
│   ├── footer.css
│   └── animations.css      ← Preloader, reveal, partículas
├── js/
│   ├── data.js             ← Catálogo de productos (SVG inline + datos)
│   ├── cart.js             ← Estado del carrito con localStorage
│   ├── locker.js           ← Renderiza el perchero y los guayos
│   ├── modal.js            ← Modal de producto
│   └── main.js             ← GSAP, preloader, animaciones, orquestador
└── assets/
    ├── img/                ← (imágenes adicionales si las agregas)
    └── fonts/
```

---

## ▶ Cómo probarlo localmente en VS Code

### Opción A — Live Server (recomendado, gratis)

1. Abre VS Code.
2. Abre la carpeta `WebMD90mas1` con **File → Open Folder…**
3. Si no tienes la extensión, ve a **Extensions** (Ctrl+Shift+X) y busca **"Live Server"** (Ritwick Dey). Instálala.
4. Haz clic derecho sobre `index.html` en el explorador de archivos → **"Open with Live Server"**.
5. El sitio se abre en `http://127.0.0.1:5500` con recarga automática al guardar.

### Opción B — Sin extensión (solo Python)

Si tienes Python instalado, abre una terminal en la carpeta del proyecto:

```bash
# Python 3
python -m http.server 8080
```

Luego abre `http://localhost:8080` en el navegador.

### Opción C — npx serve

```bash
npx serve .
```

---

> ⚠️ **No abrir index.html doble-clic en Windows** — las fuentes de Google Fonts y los scripts externos requieren servidor HTTP (protocolo `http://`). Con `file://` el carrito y el CSS externo no funcionan correctamente.

---

## 🐙 Paso a paso — Subir a GitHub y compartir el link

### Paso 1 — Crear cuenta en GitHub

1. Ve a [https://github.com](https://github.com) y regístrate si aún no tienes cuenta.

### Paso 2 — Crear repositorio

1. Inicia sesión y haz clic en el botón verde **"New"** (arriba a la izquierda).
2. Rellena:
   - **Repository name:** `90mas1-futbol-retro-new`
   - **Description:** `Tienda de camisetas de fútbol — Proyecto Diseño de Interfaces & Motion Design`
   - Visibilidad: **Public**
   - **No** marques "Add a README file" (ya tienes los archivos).
3. Clic en **"Create repository"**.

### Paso 3 — Inicializar Git en tu proyecto

Abre una terminal en la carpeta `WebMD90mas1`:

```bash
git init
git add .
git commit -m "feat: proyecto inicial 90+1 Fútbol Retro & New"
```

### Paso 4 — Conectar con GitHub y subir

GitHub te mostrará este bloque al crear el repositorio. Cópialo o escribe:

```bash
git remote add origin https://github.com/TU_USUARIO/90mas1-futbol-retro-new.git
git branch -M main
git push -u origin main
```

Reemplaza `TU_USUARIO` con tu nombre de usuario de GitHub.

### Paso 5 — Activar GitHub Pages (URL pública)

1. Ve a tu repositorio en GitHub.
2. Haz clic en **Settings** (pestaña superior).
3. En el menú izquierdo → **Pages**.
4. En **"Source"** selecciona:
   - Branch: `main`
   - Folder: `/ (root)`
5. Clic en **Save**.
6. Espera 1–2 minutos. GitHub te mostrará una URL como:

```
https://TU_USUARIO.github.io/90mas1-futbol-retro-new/
```

### Paso 6 — Compartir con el profesor

Entrega estos dos links:
- **Repositorio:** `https://github.com/TU_USUARIO/90mas1-futbol-retro-new`
- **Sitio en vivo:** `https://TU_USUARIO.github.io/90mas1-futbol-retro-new/`

---

## 🔄 Cómo subir cambios futuros

Cada vez que modifiques archivos:

```bash
git add .
git commit -m "descripción del cambio"
git push
```

GitHub Pages se actualiza automáticamente en 1–2 minutos.

---

## 📋 Requisitos del proyecto — Verificación

| Requisito | Estado |
|-----------|--------|
| Inicio, catálogo, detalle, carrito, nosotros, contacto | ✅ 6 páginas |
| Logo, paleta, tipografía, guía de marca | ✅ variables.css + nosotros.html |
| Hero animado (scoreboard LED) | ✅ GSAP timeline |
| Transiciones entre secciones | ✅ GSAP ScrollTrigger |
| Animaciones al scroll (reveal) | ✅ IntersectionObserver |
| Micro-interacciones (hover, carrito) | ✅ CSS + JS |
| Pieza original (SVG camisetas renderizadas) | ✅ SVG inline en data.js |
| Responsive móvil/tableta/escritorio | ✅ CSS media queries |
| prefers-reduced-motion | ✅ variables.css + main.js |
| Contraste legible (oscuro sobre negro) | ✅ tokens de color |
| Carrito simulado (sin pasarela real) | ✅ localStorage |
| Publicación online | ✅ GitHub Pages |
| Control de versiones | ✅ Git + GitHub |

---

## 🏆 Créditos de recursos

- **Fuentes:** Google Fonts — Bebas Neue, Oswald, Inter (licencia OFL)
- **Animaciones:** GSAP 3.12 — GreenSock (licencia gratuita para uso no comercial)
- **Íconos SVG:** Lucide Icons (MIT License)
- **Imágenes de referencia:** planetafobal.com (imágenes externas, solo referencia visual)
- **Camisetas:** SVGs originales del equipo, creadas para este proyecto
