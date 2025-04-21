"use client"

import { useLanguage } from "@/contexts/language-context"
import { Button } from "@/components/ui/button"

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="flex items-center space-x-1 border rounded-md overflow-hidden">
      <Button
        variant="ghost"
        size="sm"
        className={`px-2 py-1 rounded-none ${
          language === "en" ? "bg-purple-100 text-purple-600" : "bg-transparent text-gray-600"
        }`}
        onClick={() => setLanguage("en")}
      >
        EN
      </Button>
      <Button
        variant="ghost"
        size="sm"
        className={`px-2 py-1 rounded-none ${
          language === "es" ? "bg-purple-100 text-purple-600" : "bg-transparent text-gray-600"
        }`}
        onClick={() => setLanguage("es")}
      >
        ES
      </Button>
    </div>
  )
}
