'use client'

import BlogCard from '@/components/blog-card'
import { Skeleton } from '@/components/ui/skeleton'
import { useGetAllEntries } from '@/hooks/use-get-contenful-entry'
import { BlogEntry } from '@/types/contentful'

export default function BlogPage() {
  const { entries: blogEntries, loading: blogsLoading } = useGetAllEntries('blogs')

  return (
    <div className="flex flex-col gap-8 px-4 py-12 container">
      {blogsLoading
        ? Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="space-y-4">
              <Skeleton className="h-48 w-full rounded-lg" />
              <Skeleton className="h-6 w-3/4" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-2/3" />
            </div>
          ))
        : blogEntries.map((entry) => <BlogCard key={entry.sys.id} entry={entry as BlogEntry} />)}
    </div>
  )
}
