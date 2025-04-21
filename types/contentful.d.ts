import { Entry } from 'contentful'

export interface BlogFields {
  enTitle: string
  esTitle: string
  enExcerpt: string
  esExcerpt: string
  readTime: string
  esContent: string
  enContent: string
  image: ImageFields
}

export interface TestimonialFields {
  enQuote: string
  esQuote: string
  author: string
  company: string
  rate: number
  image: ImageFields
}

export interface ImageFields {
  file: {
    fields: {
      file: {
        url: string
      }
    }
  }
}

export interface BlogEntry extends Entry<{ fields: BlogFields }> {}
export interface ImageEntry extends Entry<{ fields: ImageFields }> {}
