'use client'

import { createContext, useContext, useState, type ReactNode, useEffect } from 'react'
import { useGetAllEntries } from '@/hooks/use-get-contenful-entry'

type Language = 'en' | 'es'

interface LanguageContextType {
  language: Language
  setLanguage: (language: Language) => void
  t: (key: string) => string
  loading: boolean
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

// Default translations
const defaultTranslations = {
  en: {
    // 'hero.title': 'Digital Marketing Professional',
    // 'hero.subtitle': 'Expert in SEO, SEM, digital marketing, and AI-powered marketing strategies',
    // 'hero.cta.book': 'Book a Consultation',
    'stats.clients': 'Happy Clients',
    'stats.experience': 'Years of Experience',
    'stats.projects': 'Projects Completed',
    'services.title': 'Services',
    // 'services.subtitle': 'Comprehensive digital marketing solutions for your business',
    // 'services.seo.title': 'SEO Optimization',
    // 'services.seo.desc': 'Improve your search engine rankings and organic traffic',
    // 'services.sem.title': 'SEM Campaigns',
    // 'services.sem.desc': 'Paid advertising strategies to reach your target audience',
    // 'services.ai.title': 'AI Marketing',
    // 'services.ai.desc': 'Leverage artificial intelligence for better marketing results',
    // 'services.cro.title': 'Conversion Optimization',
    // 'services.cro.desc': 'Increase your website conversion rates',
    // 'services.email.title': 'Email Marketing',
    // 'services.email.desc': 'Engage your audience with effective email campaigns',
    // 'services.analytics.title': 'Analytics & Reporting',
    // 'services.analytics.desc': 'Data-driven insights for better decision making',
    'blog.title': 'Blog',
    // 'blog.subtitle': 'Insights and updates from our team',
    'blog.readMore': 'Read More',
    'blog.viewAll': 'View All Articles',
    'knowledge.title': 'Free Resources',
    'knowledge.subtitle': 'Download our free guides and templates',
    'testimonials.title': 'Client Testimonials',
    'contact.title': 'Contact',
    'contact.subtitle': 'Contact us for more information',
    'contact.button': 'Contact Us',
    'cta.title': 'Ready to Grow Your Business?',
    'cta.subtitle': "Let's discuss how we can help you achieve your goals",
    'cta.button': 'Get Started',
  },
  es: {
    // 'hero.title': 'Profesional de Marketing Digital',
    // 'hero.subtitle': 'Experto en SEO, SEM, marketing digital y estrategias de marketing impulsadas por IA',
    // 'hero.cta.book': 'Reserva una Consulta',
    'stats.clients': 'Clientes Satisfechos',
    'stats.experience': 'Años de Experiencia',
    'stats.projects': 'Proyectos Completados',
    'services.title': 'Servicios',
    // 'services.subtitle': 'Soluciones integrales de marketing digital para tu negocio',
    // 'services.seo.title': 'Optimización SEO',
    // 'services.seo.desc': 'Mejora tu posicionamiento en buscadores y tráfico orgánico',
    // 'services.sem.title': 'Campañas SEM',
    // 'services.sem.desc': 'Estrategias de publicidad paga para llegar a tu audiencia objetivo',
    // 'services.ai.title': 'Marketing con IA',
    // 'services.ai.desc': 'Aprovecha la inteligencia artificial para mejores resultados de marketing',
    // 'services.cro.title': 'Optimización de Conversiones',
    // 'services.cro.desc': 'Aumenta las tasas de conversión de tu sitio web',
    // 'services.email.title': 'Email Marketing',
    // 'services.email.desc': 'Engancha a tu audiencia con campañas de email efectivas',
    // 'services.analytics.title': 'Analítica y Reportes',
    // 'services.analytics.desc': 'Información basada en datos para mejores decisiones',
    'blog.title': 'Últimas perspectivas',
    // 'blog.subtitle': 'Perspectivas y actualizaciones de nuestro equipo',
    'blog.readMore': 'Leer Más',
    'blog.viewAll': 'Ver Todos los Artículos',
    'knowledge.title': 'Recursos Gratuitos',
    'knowledge.subtitle': 'Descarga nuestras guías y plantillas gratuitas',
    'testimonials.title': 'Testimonios de Clientes',
    'contact.title': 'Contacto',
    'contact.subtitle': 'Contacta con nosotros para obtener más información',
    'contact.button': 'Contactar',
    'cta.title': '¿Listo para Hacer Crecer tu Negocio?',
    'cta.subtitle': 'Hablemos de cómo podemos ayudarte a alcanzar tus objetivos',
    'cta.button': 'Comenzar',
  },
}

interface TranslationEntry {
  fields: {
    key: string
    enValue: string
    esValue: string
  }
}

interface Translations {
  [key: string]: string
}

interface ContentfulTranslations {
  en: Translations
  es: Translations
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      return (localStorage.getItem('language') as Language) || 'en'
    }
    return 'en'
  })
  const [contentfulTranslations, setContentfulTranslations] = useState<ContentfulTranslations>({
    en: {},
    es: {},
  })
  const { entries: translationEntries, loading: translationsLoading } = useGetAllEntries('translation')

  useEffect(() => {
    if (!translationsLoading && translationEntries) {
      const newTranslations: ContentfulTranslations = {
        en: {},
        es: {},
      }
      translationEntries.forEach((entry) => {
        if (entry.fields) {
          const key = entry.fields.key as string
          const enValue = entry.fields.en as string
          const esValue = entry.fields.es as string
          if (key) {
            if (enValue) newTranslations.en[key] = enValue
            if (esValue) newTranslations.es[key] = esValue
          }
        }
      })
      setContentfulTranslations(newTranslations)
    }
  }, [translationEntries, translationsLoading])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('language', language)
    }
  }, [language])

  const t = (key: string) => {
    // First try Contentful translations
    const contentfulTranslation = contentfulTranslations[language][key]
    if (contentfulTranslation) {
      return contentfulTranslation
    }

    // Then try default translations as fallback
    const defaultTranslation = defaultTranslations[language][key as keyof typeof defaultTranslations.en]
    if (defaultTranslation) {
      return defaultTranslation
    }

    return key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, loading: translationsLoading }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
