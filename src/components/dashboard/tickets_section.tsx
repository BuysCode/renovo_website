"use client"

import { useRouter } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, MessageSquare, MessageSquarePlus, Plus } from "lucide-react"
import { Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from "../ui/empty"

export function TicketsSection() {
  const router = useRouter()

  return (
    <Card className="border-white/10 bg-zinc-900/50 backdrop-blur-sm shadow-sm">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <MessageSquare className="h-5 w-5 text-gray-400" />
            <CardTitle className="text-white text-base font-semibold">Tickets</CardTitle>
          </div>
          <div className="flex flex-row space-x-2">
            <Button
              size="sm"
              className="bg-blue-500 hover:bg-blue-600 gap-2"
              onClick={() => router.push("/dashboard/tickets")}
            >
              <Plus className="h-4 w-4" />
              Novo Ticket
            </Button>
            <Button
              size={'sm'}
              variant={'link'}
              className="gap-2"
              onClick={() => router.push("/painel/tickets")}
            >
              <p>Ver Tickets</p>
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Empty>
          <EmptyHeader>
            <EmptyMedia variant="icon">
              <MessageSquarePlus />
            </EmptyMedia>
            <EmptyTitle className="text-2xl font-bold">Nenhum Ticket Encontrado</EmptyTitle>
            <EmptyDescription>
              Você ainda não abriu nenhum ticket.
            </EmptyDescription>
          </EmptyHeader>
          <EmptyContent>
            <div className="flex gap-2">
              <Button className="text-orange-600" variant="link">Criar Ticket</Button>
            </div>
          </EmptyContent>
        </Empty>
      </CardContent>
    </Card>
  )
}
