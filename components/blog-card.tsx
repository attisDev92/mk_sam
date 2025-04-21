'use client'

import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import { useLanguage } from '@/contexts/language-context'
import { BlogEntry } from '@/types/contentful'
import { useRouter } from 'next/navigation'

export default function BlogCard({ entry }: { entry: BlogEntry }) {
  const { language, t } = useLanguage()
  const router = useRouter()
  const title = language === 'en' ? entry.fields.enTitle : entry.fields.esTitle
  const excerpt = language === 'en' ? entry.fields.enExcerpt : entry.fields.esExcerpt
  const imageUrl = entry.fields?.image?.fields?.file?.url || '/placeholder.svg'

  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg max-w-md">
      <div className="relative h-48 w-full">
        <Image src={imageUrl} alt={entry.fields.esTitle} fill className="object-cover" />
      </div>
      <CardContent className="p-6">
        <div className="flex items-center text-sm text-gray-500 mb-3">
          <span>{new Date(entry.sys.createdAt).toLocaleDateString()}</span>
          <span className="mx-2">•</span>
          <span>{entry.fields.readTime || ''}</span>
        </div>
        <h3 className="text-xl font-semibold mb-2">{title || ''}</h3>
        <p className="text-gray-600 mb-4">{excerpt || ''}</p>
        <Button
          variant="ghost"
          className="p-0 h-auto font-medium text-purple-600 hover:text-purple-700"
          onClick={() => router.push(`/blogs/${entry.sys.id}`)}
        >
          {t('blog.readMore')}
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </CardContent>
    </Card>
  )
}
