import { Card, CardContent } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'

export default function TestimonialCardSkeleton() {
  return (
    <Card className="overflow-hidden">
      <div className="relative h-48 w-full">
        <Skeleton className="h-full w-full" />
      </div>
      <CardContent className="p-6">
        <Skeleton className="h-20 w-full mb-4" />
        <div className="flex items-center justify-between">
          <div className="space-y-2">
            <Skeleton className="h-4 w-32" />
            <Skeleton className="h-3 w-24" />
          </div>
          <div className="flex items-center space-x-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Skeleton key={i} className="w-5 h-5" />
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
