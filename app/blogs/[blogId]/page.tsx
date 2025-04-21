'use client'

import { useParams } from 'next/navigation'
import { useGetContenfulEntry } from '@/hooks/use-get-contenful-entry'
import { BlogEntry } from '@/types/contentful'
import { useLanguage } from '@/contexts/language-context'
import Image from 'next/image'
import { Skeleton } from '@/components/ui/skeleton'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

export default function BlogPost() {
  const { blogId } = useParams()
  const { entry, loading } = useGetContenfulEntry(blogId as string)
  const { language } = useLanguage()

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-12">
        <Skeleton className="h-8 w-3/4 mb-4" />
        <Skeleton className="h-6 w-1/2 mb-8" />
        <Skeleton className="h-[400px] w-full mb-8" />
        <div className="space-y-4">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-3/4" />
        </div>
      </div>
    )
  }

  if (!entry) {
    return <div>Blog post not found</div>
  }

  const blog = entry as BlogEntry
  const title = language === 'en' ? blog.fields.enTitle : blog.fields.esTitle
  const content = language === 'en' ? blog.fields.enContent : blog.fields.esContent
  const imageUrl = blog.fields?.image?.fields?.file?.url || '/placeholder.svg'

  return (
    <article className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl md:text-5xl font-bold mb-6">{title}</h1>
      <div className="flex items-center text-sm text-gray-500 mb-8">
        <span>{new Date(blog.sys.createdAt).toLocaleDateString()}</span>
        <span className="mx-2">•</span>
        <span>{blog.fields.readTime} min</span>
      </div>
      <div className="relative h-[400px] w-full mb-8">
        <Image src={imageUrl || ''} alt={title || ''} fill className="object-cover rounded-lg" />
      </div>

      <div className="prose prose-lg max-w-none">{content && documentToReactComponents(content)}</div>
    </article>
  )
}
