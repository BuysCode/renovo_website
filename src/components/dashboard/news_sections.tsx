"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Newspaper, ArrowRight } from "lucide-react"

export function NewsSection() {
  return (
    <Card className="border-white/10 bg-zinc-900/50 backdrop-blur-sm shadow-sm">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Newspaper className="h-5 w-5 text-gray-400" />
            <CardTitle className="text-white text-base font-semibold">Últimas Notícias</CardTitle>
          </div>
          <Button variant="ghost" size="sm" className="text-orange-500 hover:text-orange-400 gap-2 hover:bg-white/5">
            Ver todos
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <div className="border-l-4 border-orange-500 pl-3 py-2">
            <h4 className="font-medium text-white text-sm">Promoção de Natal Ativa</h4>
            <p className="text-xs text-gray-400 mt-1">20% de desconto em todos os planos até 31/12</p>
          </div>
          <div className="border-l-4 border-blue-500 pl-3 py-2">
            <h4 className="font-medium text-white text-sm">Novos Datacenters Disponíveis</h4>
            <p className="text-xs text-gray-400 mt-1">Expandimos para São Paulo e Rio de Janeiro</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
