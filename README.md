# Guía de Traducciones en Contentful

Este documento describe la estructura de las traducciones en Contentful para el sitio web.

## Estructura de Claves

Las claves de traducción siguen una estructura jerárquica basada en las secciones del sitio:

### Sección Hero (Banner Principal)

```
hero.title = Título principal
hero.subtitle = Subtítulo
hero.cta.book = Texto del botón de CTA
```

### Sección Estadísticas

```
stats.clients = Clientes Felices
stats.experience = Años de Experiencia
stats.projects = Proyectos Completados
```

### Sección Servicios

```
services.title = Nuestros Servicios
services.subtitle = Descripción general de servicios

// Servicio SEO
services.seo.title = Optimización SEO
services.seo.desc = Descripción del servicio SEO

// Servicio SEM
services.sem.title = Campañas SEM
services.sem.desc = Descripción del servicio SEM

// Servicio IA
services.ai.title = Marketing con IA
services.ai.desc = Descripción del servicio IA

// Servicio CRO
services.cro.title = Optimización de Conversiones
services.cro.desc = Descripción del servicio CRO

// Servicio Email Marketing
services.email.title = Email Marketing
services.email.desc = Descripción del servicio Email Marketing

// Servicio Analytics
services.analytics.title = Analítica y Reportes
services.analytics.desc = Descripción del servicio Analytics
```

### Sección Blog

```
blog.title = Blog
blog.subtitle = Descripción de la sección de blog
blog.readMore = Leer Más
blog.viewAll = Ver Todos los Artículos
```

### Sección Conocimiento

```
knowledge.title = Recursos Gratuitos
knowledge.subtitle = Descripción de la sección de recursos
knowledge.download = Descargar
knowledge.downloads = Descargas
```

### Sección Testimonios

```
testimonials.title = Testimonios de Clientes
```

### Sección Contacto

```
contact.title = Contacto
contact.subtitle = Descripción de la sección de contacto
contact.button = Contactar
```

### Sección CTA (Call to Action)

```
cta.title = ¿Listo para Hacer Crecer tu Negocio?
cta.subtitle = Descripción del CTA
cta.button = Comenzar
```

## Instrucciones para Contentful

1. Crea un nuevo tipo de contenido llamado "translation"
2. Agrega los siguientes campos:

   - `key` (Texto corto): La clave de traducción (ej: "hero.title")
   - `en` (Texto largo): Traducción en inglés
   - `es` (Texto largo): Traducción en español

3. Para cada traducción:
   - Usa exactamente las claves especificadas arriba
   - Asegúrate de que las claves coincidan exactamente (son sensibles a mayúsculas/minúsculas)
   - Completa tanto la versión en inglés como en español

## Ejemplo de Entrada

```
key: hero.title
en: Digital Marketing Professional
es: Profesional de Marketing Digital
```

## Notas Importantes

- Las claves deben coincidir exactamente con las usadas en el código
- Cada sección debe tener sus propias traducciones
- Mantén un formato consistente en las traducciones
- Verifica que todas las claves necesarias estén presentes
- Las traducciones pueden ser actualizadas en cualquier momento

## Verificación

Para verificar que las traducciones funcionan correctamente:

1. Cambia el idioma usando el selector de idioma
2. Verifica que todos los textos se actualicen correctamente
3. Si un texto no se traduce, verifica que la clave exista en Contentful

## Tipos de Contenido en Contentful

### 1. Translation (Traducciones)

### 2. Blog (Artículos)

#### Estructura del Tipo de Contenido

1. Crea un nuevo tipo de contenido llamado "blog"
2. Agrega los siguientes campos:
   - `title` (Texto corto): Título del artículo
   - `slug` (Texto corto): URL amigable (ej: "como-mejorar-seo")
   - `excerpt` (Texto largo): Resumen del artículo
   - `content` (Texto largo): Contenido completo del artículo
   - `featuredImage` (Media): Imagen destacada del artículo
   - `author` (Referencia): Autor del artículo
   - `publishedAt` (Fecha y hora): Fecha de publicación
   - `category` (Texto corto): Categoría del artículo
   - `tags` (Texto corto, múltiple): Etiquetas del artículo

#### Ejemplo de Entrada

```
title: Cómo Mejorar el SEO de tu Sitio Web
slug: como-mejorar-seo
excerpt: Aprende las mejores prácticas para optimizar tu sitio web y mejorar su posicionamiento en buscadores.
content: [Contenido completo del artículo en formato Markdown]
featuredImage: [Imagen destacada]
author: [Referencia al autor]
publishedAt: 2024-03-20T10:00:00Z
category: SEO
tags: ["SEO", "Optimización", "Marketing Digital"]
```

#### Notas Importantes

- El slug debe ser único y en minúsculas
- Usa formato Markdown para el contenido
- Las imágenes deben ser optimizadas para web
- La fecha de publicación controla cuándo aparece el artículo
- Las categorías y tags ayudan en la organización y búsqueda

### 3. Testimonios

#### Estructura del Tipo de Contenido

1. Crea un nuevo tipo de contenido llamado "testimonial"
2. Agrega los siguientes campos:
   - `name` (Texto corto): Nombre del cliente
   - `company` (Texto corto): Empresa del cliente
   - `position` (Texto corto): Cargo del cliente
   - `content` (Texto largo): Contenido del testimonio
   - `image` (Media): Foto del cliente
   - `rating` (Número): Calificación (1-5)
   - `project` (Texto corto): Proyecto relacionado
   - `published` (Booleano): Si el testimonio está publicado

#### Ejemplo de Entrada

```
name: Juan Pérez
company: Tech Solutions Inc.
position: Director de Marketing
content: "El trabajo realizado por el equipo superó nuestras expectativas. La estrategia de marketing digital implementada resultó en un aumento significativo de nuestras conversiones."
image: [Foto del cliente]
rating: 5
project: Estrategia de Marketing Digital
published: true
```

#### Notas Importantes

- Los testimonios deben ser auténticos y verificables
- Las imágenes deben ser profesionales y de alta calidad
- La calificación debe reflejar la experiencia real del cliente
- Solo los testimonios con `published: true` se mostrarán en el sitio

## Proceso de Publicación

### Para Blogs

1. Crear el artículo en Contentful
2. Completar todos los campos requeridos
3. Agregar la imagen destacada
4. Establecer la fecha de publicación
5. Publicar el contenido

### Para Testimonios

1. Crear el testimonio en Contentful
2. Completar todos los campos requeridos
3. Agregar la foto del cliente
4. Establecer `published: true`
5. Publicar el contenido

## Verificación de Contenido

### Blogs

1. Verifica que el artículo aparezca en la lista de blogs
2. Comprueba que la URL sea correcta
3. Verifica que la imagen destacada se muestre correctamente
4. Asegúrate de que el formato del contenido sea el adecuado

### Testimonios

1. Verifica que el testimonio aparezca en la sección correspondiente
2. Comprueba que la foto del cliente se muestre correctamente
3. Verifica que la calificación se muestre correctamente
4. Asegúrate de que el testimonio esté en el idioma correcto
