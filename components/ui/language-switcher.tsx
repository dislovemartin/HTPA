"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function LanguageSwitcher() {
  const [currentLang, setCurrentLang] = useState("中文")

  const handleLanguageChange = (lang: string) => {
    setCurrentLang(lang)
    // In a real implementation, this would change the language of the site
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="text-white/80 hover:text-gold-400">
          <Globe size={20} />
          <span className="sr-only">Switch Language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-neutral-900 border border-gold-900/30">
        <DropdownMenuItem
          onClick={() => handleLanguageChange("中文")}
          className={`${
            currentLang === "中文" ? "text-gold-500" : "text-white/80"
          } hover:text-gold-400 hover:bg-neutral-800`}
        >
          中文
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => handleLanguageChange("English")}
          className={`${
            currentLang === "English" ? "text-gold-500" : "text-white/80"
          } hover:text-gold-400 hover:bg-neutral-800`}
        >
          English
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => handleLanguageChange("粤语")}
          className={`${
            currentLang === "粤语" ? "text-gold-500" : "text-white/80"
          } hover:text-gold-400 hover:bg-neutral-800`}
        >
          粤语
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
