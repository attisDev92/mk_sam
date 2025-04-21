'use client'

import type React from 'react'
import { ThemeProvider } from '@/components/theme-provider'
import { LanguageProvider } from '@/contexts/language-context'
import Header from '@/components/header'

export function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
      <LanguageProvider>
        <Header />
        {children}
      </LanguageProvider>
    </ThemeProvider>
  )
}
