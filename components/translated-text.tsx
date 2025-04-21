import { useLanguage } from '@/contexts/language-context'
import { Skeleton } from '@/components/ui/skeleton'
import { cn } from '@/lib/utils'
import { ElementType, forwardRef } from 'react'

interface TranslatedTextProps<T extends ElementType = 'span'> {
  textKey: string
  className?: string
  as?: T
}

const TranslatedText = forwardRef<HTMLElement, TranslatedTextProps>(function TranslatedText(
  { textKey, className, as: Component = 'span' },
  ref,
) {
  const { t, loading } = useLanguage()
  const text = t(textKey)

  if (loading) {
    return <Skeleton className={cn('h-4 w-24', className)} />
  }

  // If the text is the same as the key, it means no translation was found
  if (text === textKey) {
    return <Skeleton className={cn('h-4 w-24', className)} />
  }

  return (
    <Component ref={ref} className={className}>
      {text}
    </Component>
  )
})

export default TranslatedText
