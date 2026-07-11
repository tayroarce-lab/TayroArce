# 🚀 Portfolio Personal — Tayro Arce

Sitio web de portfolio personal construido con **Next.js 14**, **TypeScript** y **Tailwind CSS**. Diseño oscuro premium con soporte para inglés y español.

---

## 🛠️ Stack Tecnológico

| Tecnología | Uso |
|---|---|
| Next.js 14 (App Router) | Framework principal |
| TypeScript | Tipado estático |
| Tailwind CSS v4 | Estilos |
| Framer Motion | Animaciones |
| Lucide React | Íconos |

---

## 📁 Estructura del Proyecto

```
src/
├── app/
│   ├── layout.tsx          # Layout raíz (fuentes, metadatos)
│   ├── page.tsx            # Página principal
│   └── globals.css         # Estilos globales y variables de color
├── components/
│   ├── Navbar.tsx          # Barra de navegación con selector de idioma
│   ├── Hero.tsx            # Sección hero con animación
│   ├── Projects.tsx        # Tarjetas de proyectos
│   ├── About.tsx           # Foto + descripción personal
│   ├── Skills.tsx          # Lista de tecnologías
│   └── Contact.tsx         # Sección de contacto + footer
├── contexts/
│   └── LanguageContext.tsx # Contexto global para cambio de idioma
└── dictionaries/
    ├── en.json             # Todos los textos en inglés
    └── es.json             # Todos los textos en español
public/
└── profile.png             # Foto de perfil
```

---

## ⚡ Cómo correr el proyecto localmente

```bash
# 1. Clona el repositorio
git clone https://github.com/tayroarce-lab/portfolio.git
cd portfolio

# 2. Instala las dependencias
npm install

# 3. Corre el servidor de desarrollo
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

---

## 🌐 Deploy en Vercel (recomendado)

### Opción A — Deploy con un clic

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/tayroarce-lab/portfolio)

### Opción B — Deploy manual paso a paso

1. Crea una cuenta en [vercel.com](https://vercel.com) si no tienes una.
2. Haz clic en **"Add New Project"**.
3. Importa este repositorio desde GitHub.
4. Vercel detecta automáticamente que es un proyecto Next.js — no necesitas configurar nada.
5. Haz clic en **"Deploy"** y listo. Tu sitio estará en vivo en segundos.

> **Nota:** No hay variables de entorno requeridas para este proyecto. Es 100% estático.

---

## ✏️ Cómo editar el contenido

Todo el texto del sitio vive en dos archivos JSON, uno por idioma. Solo edita ahí y el cambio se refleja automáticamente en el sitio.

| Archivo | Idioma |
|---|---|
| `src/dictionaries/en.json` | Inglés |
| `src/dictionaries/es.json` | Español |

### Cambiar la foto de perfil

Reemplaza el archivo `public/profile.png` con tu nueva foto. Asegúrate de que se llame exactamente `profile.png`.

---

## 🎨 Personalizar colores

Los colores del tema están definidos en `src/app/globals.css` dentro del bloque `@theme`:

```css
@theme {
  --color-background: #0a0a0a;   /* Fondo principal */
  --color-foreground: #f5f5f5;   /* Texto principal */
  --color-accent: #7c3aed;       /* Color de acento (violeta) */
}
```

---

## 📄 Licencia

MIT — Siéntete libre de usarlo como base para tu propio portfolio.
