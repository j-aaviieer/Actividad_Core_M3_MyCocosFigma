# MyCOCOS — Proyecto web

Proyecto académico desarrollado con HTML, CSS y JavaScript, inspirado en la identidad visual y la organización comercial de la tienda oficial MyCOCOS y en el prototipo de Figma.

## Estructura
```
index.html
static/
├── css/style.css
├── js/script.js
└── images/
```

## Secciones
- **Inicio:** presentación, productos destacados y testimonios.
- **Packs & Kits:** catálogo con filtro por categoría.
- **Carrito:** agregar, quitar y modificar cantidades; persistencia local mediante localStorage.
- **Registro / Inicio de sesión:** formularios de demostración con almacenamiento local del perfil.

## Criterios técnicos
- HTML semántico: `header`, `nav`, `main`, `section`, `article`, `aside` y `footer`.
- CSS responsive con Flexbox y Grid, espaciados consistentes y estados de foco accesibles.
- JavaScript sin frameworks, Google Fonts (DM Sans y Manrope) e imágenes locales.

## Publicación con GitHub Pages
1. Abre **Settings → Pages** en GitHub.
2. En **Build and deployment**, selecciona **Deploy from a branch**.
3. Selecciona la rama `main` y la carpeta `/ (root)`.
4. Guarda y espera a que GitHub publique el sitio.

Como `index.html` está en la raíz, la URL del proyecto debe abrir directamente la landing page cuando Pages esté habilitado.

## Alcance y limitaciones
Los precios de los packs no están configurados y se muestran como “Consultar precio”. El carrito guarda cantidades en el navegador, pero no calcula un total real ni procesa pagos. Registro e inicio de sesión son demostrativos: no existe backend, autenticación segura ni base de datos.

La paleta se ha refinado tomando como referencia la apariencia pública de MyCOCOS (contrastes oscuros, superficies blancas y neutras). Los valores no se presentan como extracción exacta del CSS interno de Shopify ni como verificación píxel a píxel del archivo Figma.
