import { Card, CardContent } from '@/components/ui/card'
import type { ReactNode } from 'react'
import TranslatedText from './translated-text'

interface ServiceCardProps {
  icon: ReactNode
  titleKey: string
  descriptionKey: string
}

export default function ServiceCard({ icon, titleKey, descriptionKey }: ServiceCardProps) {
  return (
    <Card className="transition-all duration-300 hover:shadow-lg hover:border-purple-200">
      <CardContent className="p-6">
        <div className="bg-purple-50 w-16 h-16 rounded-lg flex items-center justify-center mb-4">{icon}</div>
        <h3 className="text-xl font-semibold mb-2">
          <TranslatedText textKey={titleKey} as="span" />
        </h3>
        <div className="text-gray-600">
          <TranslatedText textKey={descriptionKey} as="span" />
        </div>
      </CardContent>
    </Card>
  )
}
