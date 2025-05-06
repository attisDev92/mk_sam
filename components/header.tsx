import { useLanguage } from '@/contexts/language-context'
import LanguageSwitcher from './language-switcher'
import { Button } from './ui/button'
import { ChevronDown } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function Header() {
  const { t } = useLanguage()
  const router = useRouter()
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-10 w-10 rounded-full bg-purple-600 flex items-center justify-center text-white font-bold">
            SAM
          </div>
          <span className="font-semibold text-xl">Sam Marketing</span>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/#services" className="text-gray-600 hover:text-purple-600 transition-colors">
            {t('services.title')}
          </Link>
          <Link href="/#blog" className="text-gray-600 hover:text-purple-600 transition-colors">
            {t('blog.title')}
          </Link>
          <Link href="/#contact" className="text-gray-600 hover:text-purple-600 transition-colors">
            {t('contact.title')}
          </Link>
        </nav>
        <LanguageSwitcher />
        <Button
          className="hidden md:flex bg-purple-600 hover:bg-purple-700"
          onClick={() =>
            router.push(
              'mailto:samanthachimborazokolganov@gmail.com?subject=Saludos%20desde%20tu%20sitio%20web&body=Yo%20estoy%20interesado%20en%20tus%20servicios',
            )
          }
        >
          {t('contact.title')}
        </Button>
        <Button variant="ghost" size="icon" className="md:hidden">
          <ChevronDown className="h-5 w-5" />
        </Button>
      </div>
    </header>
  )
}
