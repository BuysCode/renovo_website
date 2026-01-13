"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronDown, ChevronUp, Plus, Star } from "lucide-react"
import { Button } from "../ui/button"

export function ShortcutsSection() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Card className="border-white/10 bg-zinc-900/50 backdrop-blur-sm shadow-sm p-4">
      <CardHeader className="cursor-pointer hover:bg-white/5 transition-colors p-4 rounded-lg" onClick={() => setIsOpen(!isOpen)}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Star className="h-5 w-5 text-gray-400" />
            <CardTitle className="text-white text-base font-semibold">Atalhos</CardTitle>
          </div>
          {isOpen ? <ChevronUp className="h-5 w-5 text-gray-400" /> : <ChevronDown className="h-5 w-5 text-gray-400" />}
        </div>
      </CardHeader>

      {isOpen && (
        <CardContent>
          <Button
            variant="outline"
            className="w-full gap-2 border-white/10 text-gray-300 bg-transparent hover:bg-white/5"
          >
            <Plus className="h-4 w-4" />
            Novo Atalho
          </Button>
        </CardContent>
      )}
    </Card>
  )
}
