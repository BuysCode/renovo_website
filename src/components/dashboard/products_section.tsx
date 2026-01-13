"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp, LucideShoppingBag, ShoppingBag } from "lucide-react"
import { Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from "../ui/empty"

export function ProductsSection() {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <Card className="border-white/10 bg-zinc-900/50 backdrop-blur-sm shadow-sm p-4">
      <CardHeader className="cursor-pointer hover:bg-white/5 transition-colors p-4 rounded-lg" onClick={() => setIsOpen(!isOpen)}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShoppingBag className="h-5 w-5 text-gray-400" />
            <CardTitle className="text-white text-base font-semibold">Serviços</CardTitle>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="bg-orange-500 text-white border-0 hover:bg-orange-600">
              Meus Serviços
            </Button>
            {isOpen ? (
              <ChevronUp className="h-5 w-5 text-gray-400" />
            ) : (
              <ChevronDown className="h-5 w-5 text-gray-400" />
            )}
          </div>
        </div>
      </CardHeader>

      {isOpen && (
        <CardContent>
          <Empty>
            <EmptyHeader>
              <EmptyMedia variant="icon">
                <LucideShoppingBag />
              </EmptyMedia>
              <EmptyTitle className="text-2xl font-bold">Nenhum Serviço Encontrado</EmptyTitle>
              <EmptyDescription>
                Você ainda não adquiriu nenhum serviço.
              </EmptyDescription>
            </EmptyHeader>
            <EmptyContent>
              <div className="flex gap-2">
                <Button className="text-orange-600" variant="link">Ver nossos serviços</Button>
              </div>
            </EmptyContent>
          </Empty>
        </CardContent>
      )}
    </Card >
  )
}
