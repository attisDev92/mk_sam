import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'
import { TestimonialFields } from '@/types/contentful'
import { useLanguage } from '@/contexts/language-context'
import { Entry, EntryFields } from 'contentful'

export default function TestimonialCard({ entry }: { entry: Entry<{ fields: TestimonialFields }> }) {
  const { language } = useLanguage()
  const quote = language === 'en' ? entry.fields.enQuote : entry.fields.esQuote
  const imageUrl = entry.fields.image?.fields?.file?.url || '/placeholder.svg'

  return (
    <Card className="transition-all duration-300 hover:shadow-lg">
      <CardContent className="p-6">
        <div className="relative w-full">
          <div className="flex items-center">
            {Array.from({ length: entry.fields.rate }).map((_, i) => (
              <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
        </div>
        <p className="text-gray-700 mb-6 italic">"{quote}"</p>
        <div className="flex items-center">
          <div>
            <p className="font-semibold">{entry.fields.author}</p>
            <p className="text-sm text-gray-500">{entry.fields.company}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
