"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Check } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function NewsletterForm() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const { t } = useLanguage()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      // Here you would typically send the email to your newsletter service
      setSubmitted(true)
      setEmail("")
      setTimeout(() => setSubmitted(false), 3000)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
      {!submitted ? (
        <>
          <Input
            type="email"
            placeholder={t("newsletter.placeholder")}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-grow py-6 px-4"
          />
          <Button type="submit" className="bg-purple-600 hover:bg-purple-700 py-6">
            {t("newsletter.button")}
          </Button>
        </>
      ) : (
        <div className="w-full p-4 bg-green-100 text-green-700 rounded-md flex items-center justify-center">
          <Check className="mr-2 h-5 w-5" />
          <span>{t("newsletter.success")}</span>
        </div>
      )}
    </form>
  )
}
