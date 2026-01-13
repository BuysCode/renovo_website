"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp, CreditCard, Plus } from "lucide-react"

export function CreditSection() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Card className="border-white/10 p-4 bg-zinc-900/50 backdrop-blur-sm shadow-sm">
      <CardHeader className=" p-4 rounded-lg cursor-pointer hover:bg-white/5 transition-colors" onClick={() => setIsOpen(!isOpen)}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <CreditCard className="h-5 w-5 text-gray-400" />
            <CardTitle className="text-white text-base font-semibold">Créditos</CardTitle>
          </div>
          {isOpen ? <ChevronUp className="h-5 w-5 text-gray-400" /> : <ChevronDown className="h-5 w-5 text-gray-400" />}
        </div>
      </CardHeader>

      {isOpen && (
        <CardContent>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-3xl font-bold text-white">R$ 0,00</p>
              <p className="text-sm text-gray-400 mt-1">Saldo disponível para uso</p>
            </div>
            <Button className="bg-green-600 hover:bg-green-700 gap-2">
              <Plus className="h-4 w-4" />
              Adicionar Fundos
            </Button>
          </div>
        </CardContent>
      )}
    </Card>
  )
}