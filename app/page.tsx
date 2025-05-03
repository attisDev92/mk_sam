'use client'

import Image from 'next/image'
import { ArrowRight, Mail, MousePointer, Search, TrendingUp, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import BlogCard from '@/components/blog-card'
import KnowledgeCard from '@/components/knowledge-card'
import ServiceCard from '@/components/service-card'
import TestimonialCard from '@/components/testimonial-card'
import { useLanguage } from '@/contexts/language-context'
import { useGetAllEntries } from '@/hooks/use-get-contenful-entry'
import { BlogEntry, ImageEntry, TestimonialFields } from '@/types/contentful'
import { Entry, EntrySkeletonType } from 'contentful'
import { useEffect, useState } from 'react'
import { Skeleton } from '@/components/ui/skeleton'
import TestimonialCardSkeleton from '@/components/testimonial-card-skeleton'
import ServiceCardSkeleton from '@/components/service-card-skeleton'
import KnowledgeCardSkeleton from '@/components/knowledge-card-skeleton'
import TranslatedText from '@/components/translated-text'
import { useRouter } from 'next/navigation'
import { AnimatedSection, ParallaxSection } from '@/components/animated-section'
import AnimatedBackground from '@/components/AnimatedBackground'

export default function Home() {
  const { t, loading: languageLoading } = useLanguage()
  const { entries: imageEntries, loading: imagesLoading } = useGetAllEntries('image')
  const { entries: blogEntries, loading: blogsLoading } = useGetAllEntries('blogs')
  const { entries: testimonialEntries, loading: testimonialsLoading } = useGetAllEntries('testimonials')
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    if (!languageLoading && !imagesLoading && !blogsLoading && !testimonialsLoading) {
      setIsLoading(false)
    }
  }, [languageLoading, imagesLoading, blogsLoading, testimonialsLoading])

  const images = imageEntries
    .map((entry: Entry) => {
      const imageEntry = entry as ImageEntry
      return imageEntry.fields?.file?.fields?.file?.url || null
    })
    .filter(Boolean)

  return (
    <main className="relative min-h-screen">
      <AnimatedBackground />
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-20 md:py-32 flex flex-col md:flex-row items-center">
          <AnimatedSection className="md:w-1/2 mb-10 md:mb-0" delay={0.2}>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              <TranslatedText textKey="hero.title" as="span" />
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              <TranslatedText textKey="hero.subtitle" as="span" />
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                className="bg-purple-600 hover:bg-purple-700 text-lg px-8 py-6"
                onClick={() =>
                  router.push(
                    'mailto:samanthachimborazokolganov@gmail.com?subject=Saludos%20desde%20tu%20sitio%20web&body=Yo%20estoy%20interesado%20en%20tus%20servicios',
                  )
                }
              >
                <TranslatedText textKey="hero.cta.book" as="span" />
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </AnimatedSection>
          <ParallaxSection className="md:w-1/2 relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            <div className="absolute inset-0 w-40 h-40 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000 m-auto"></div>
            <div className="relative">
              {isLoading ? (
                <Skeleton className="w-[600px] h-[600px] rounded-2xl" />
              ) : images[0] ? (
                <Image
                  src={images[0]}
                  alt="Digital Marketing Professional"
                  width={600}
                  height={600}
                  className="rounded-2xl drop-shadow-2xl relative z-10 "
                />
              ) : null}
            </div>
          </ParallaxSection>
        </section>

        {/* Stats Section */}
        <AnimatedSection className="bg-white py-16" delay={0.4}>
          <div className="container mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div className="text-center">
                <p className="text-4xl font-bold text-purple-600 mb-2">50+</p>
                <p className="text-gray-600">{t('stats.clients')}</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-purple-600 mb-2">10+</p>
                <p className="text-gray-600">{t('stats.experience')}</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-purple-600 mb-2">200+</p>
                <p className="text-gray-600">{t('stats.projects')}</p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Services Section */}
        <section id="services" className="container mx-auto px-4 py-20">
          <AnimatedSection className="text-center mb-16" delay={0.2}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <TranslatedText textKey="services.title" as="span" />
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              <TranslatedText textKey="services.subtitle" as="span" />
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {isLoading ? (
              Array.from({ length: 6 }).map((_, i) => <ServiceCardSkeleton key={i} />)
            ) : (
              <>
                <AnimatedSection delay={0.3}>
                  <ServiceCard
                    icon={<Search className="h-8 w-8 text-purple-600" />}
                    titleKey="services.seo.title"
                    descriptionKey="services.seo.desc"
                  />
                </AnimatedSection>
                <AnimatedSection delay={0.4}>
                  <ServiceCard
                    icon={<TrendingUp className="h-8 w-8 text-purple-600" />}
                    titleKey="services.sem.title"
                    descriptionKey="services.sem.desc"
                  />
                </AnimatedSection>
                <AnimatedSection delay={0.5}>
                  <ServiceCard
                    icon={<Zap className="h-8 w-8 text-purple-600" />}
                    titleKey="services.ai.title"
                    descriptionKey="services.ai.desc"
                  />
                </AnimatedSection>
                <AnimatedSection delay={0.6}>
                  <ServiceCard
                    icon={<MousePointer className="h-8 w-8 text-purple-600" />}
                    titleKey="services.cro.title"
                    descriptionKey="services.cro.desc"
                  />
                </AnimatedSection>
                <AnimatedSection delay={0.7}>
                  <ServiceCard
                    icon={<Mail className="h-8 w-8 text-purple-600" />}
                    titleKey="services.email.title"
                    descriptionKey="services.email.desc"
                  />
                </AnimatedSection>
                <AnimatedSection delay={0.8}>
                  <ServiceCard
                    icon={<TrendingUp className="h-8 w-8 text-purple-600" />}
                    titleKey="services.analytics.title"
                    descriptionKey="services.analytics.desc"
                  />
                </AnimatedSection>
              </>
            )}
          </div>
        </section>

        {/* Blog Section */}
        <section id="blog" className="bg-gray-50 py-20">
          <div className="container mx-auto px-4">
            <AnimatedSection className="flex justify-between items-center mb-16" delay={0.2}>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  <TranslatedText textKey="blog.title" as="span" />
                </h2>
                <p className="text-xl text-gray-600">
                  <TranslatedText textKey="blog.subtitle" as="span" />
                </p>
              </div>
              <Button variant="outline" className="hidden md:flex" onClick={() => router.push('/blogs')}>
                <TranslatedText textKey="blog.viewAll" as="span" />
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {isLoading
                ? Array.from({ length: 3 }).map((_, i) => (
                    <AnimatedSection key={i} delay={0.3 + i * 0.1}>
                      <div className="space-y-4">
                        <Skeleton className="h-48 w-full rounded-lg" />
                        <Skeleton className="h-6 w-3/4" />
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-4 w-2/3" />
                      </div>
                    </AnimatedSection>
                  ))
                : blogEntries.slice(0, 3).map((entry, i) => (
                    <AnimatedSection key={entry.sys.id} delay={0.3 + i * 0.1}>
                      <BlogCard entry={entry as BlogEntry} />
                    </AnimatedSection>
                  ))}
            </div>
            <AnimatedSection className="text-center mt-12" delay={0.6}>
              <Button variant="outline" onClick={() => router.push('/blogs')}>
                <TranslatedText textKey="blog.viewAll" as="span" />
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </AnimatedSection>
          </div>
        </section>

        {/* Knowledge Section
        <section id="knowledge" className="container mx-auto px-4 py-20">
          <AnimatedSection className="text-center mb-16" delay={0.2}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('knowledge.title')}</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">{t('knowledge.subtitle')}</p>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {isLoading ? (
              Array.from({ length: 4 }).map((_, i) => (
                <AnimatedSection key={i} delay={0.3 + i * 0.1}>
                  <KnowledgeCardSkeleton />
                </AnimatedSection>
              ))
            ) : (
              <>
                <AnimatedSection delay={0.3}>
                  <KnowledgeCard
                    title="SEO Starter Guide"
                    description="Everything you need to know to start optimizing your website for search engines."
                    downloadCount="2,500+"
                    type="PDF Guide"
                  />
                </AnimatedSection>
                <AnimatedSection delay={0.4}>
                  <KnowledgeCard
                    title="Digital Marketing ROI Calculator"
                    description="Calculate the potential return on investment for your digital marketing campaigns."
                    downloadCount="1,800+"
                    type="Excel Template"
                  />
                </AnimatedSection>
                <AnimatedSection delay={0.5}>
                  <KnowledgeCard
                    title="Content Calendar Template"
                    description="Plan your content strategy with this comprehensive calendar template."
                    downloadCount="3,200+"
                    type="Google Sheet"
                  />
                </AnimatedSection>
                <AnimatedSection delay={0.6}>
                  <KnowledgeCard
                    title="Email Marketing Swipe File"
                    description="Copy-and-paste email templates that convert subscribers into customers."
                    downloadCount="2,100+"
                    type="PDF Guide"
                  />
                </AnimatedSection>
              </>
            )}
          </div>
        </section> */}

        {/* Testimonials */}
        <section className="bg-purple-50 py-20">
          <div className="container mx-auto px-4">
            <AnimatedSection className="text-center mb-16" delay={0.2}>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('testimonials.title')}</h2>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {isLoading
                ? Array.from({ length: 3 }).map((_, i) => (
                    <AnimatedSection key={i} delay={0.3 + i * 0.1}>
                      <TestimonialCardSkeleton />
                    </AnimatedSection>
                  ))
                : testimonialEntries.map((entry: Entry<EntrySkeletonType>, i) => (
                    <AnimatedSection key={entry.sys.id} delay={0.3 + i * 0.1}>
                      <TestimonialCard entry={entry} />
                    </AnimatedSection>
                  ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <AnimatedSection className="container mx-auto px-4 py-20" delay={0.2}>
          <div className="bg-purple-600 rounded-3xl p-8 md:p-16 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{t('cta.title')}</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">{t('cta.subtitle')}</p>
            <Button
              className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-8 py-6"
              onClick={() =>
                router.push(
                  'mailto:samanthachimborazokolganov@gmail.com?subject=Saludos%20desde%20tu%20sitio%20web&body=Yo%20estoy%20interesado%20en%20tus%20servicios',
                )
              }
            >
              {t('cta.button')}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </main>
  )
}
