'use client'

import { client } from '@/config/contentful.config'
import { useEffect, useState } from 'react'
import { Entry } from 'contentful'

export const useGetContenfulEntry = (entryId: string) => {
  const [entry, setEntry] = useState<Entry | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    let isMounted = true

    const fetchEntry = async () => {
      try {
        setLoading(true)
        const entry = await client.getEntry(entryId)
        if (isMounted) {
          setEntry(entry)
          setError(null)
        }
      } catch (error) {
        if (isMounted) {
          setError(error as Error)
          console.error('Error fetching Contentful entry:', error)
        }
      } finally {
        if (isMounted) {
          setLoading(false)
        }
      }
    }

    fetchEntry()

    return () => {
      isMounted = false
    }
  }, [entryId])

  return { entry, loading, error }
}

export const useGetAllEntries = (contentType?: string) => {
  const [entries, setEntries] = useState<Entry[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    let isMounted = true

    const fetchEntries = async () => {
      try {
        setLoading(true)
        const response = await client.getEntries(contentType ? { content_type: contentType } : undefined)
        if (isMounted) {
          setEntries(response.items)
          setError(null)
        }
      } catch (error) {
        if (isMounted) {
          setError(error as Error)
          console.error('Error fetching Contentful entries:', error)
        }
      } finally {
        if (isMounted) {
          setLoading(false)
        }
      }
    }

    fetchEntries()

    return () => {
      isMounted = false
    }
  }, [contentType])

  return { entries, loading, error }
}
