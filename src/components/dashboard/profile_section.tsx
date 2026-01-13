"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp, User, Edit } from "lucide-react"

import { useSession } from '@/lib/auth-client'

export function ProfileSection() {
  const [isOpen, setIsOpen] = useState(false)
  const session = useSession()

  return (
    <Card className="border-white/10 bg-zinc-900/50 backdrop-blur-sm shadow-sm p-4">
      <CardHeader className="p-4 rounded-lg cursor-pointer hover:bg-white/5 transition-colors" onClick={() => setIsOpen(!isOpen)}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <User className="h-5 w-5 text-gray-400" />
            <CardTitle className="text-white text-base font-semibold">Perfil</CardTitle>
          </div>
          {isOpen ? <ChevronUp className="h-5 w-5 text-gray-400" /> : <ChevronDown className="h-5 w-5 text-gray-400" />}
        </div>
      </CardHeader>

      {isOpen && (
        <CardContent>
          <div className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="text-sm font-medium text-gray-400">Nome</label>
                <p className="text-white mt-1">{session.data?.user.name}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-400">Email</label>
                <p className="text-white mt-1">{session.data?.user.email}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-400">CPF/CNPJ</label>
                <p className="text-white mt-1">000.000.000-00</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-400">Telefone</label>
                <p className="text-white mt-1">(00) 00000-0000</p>
              </div>
            </div>
            <Button variant="outline" className="gap-2 border-white/10 text-gray-300 bg-transparent hover:bg-white/5">
              <Edit className="h-4 w-4" />
              Atualizar
            </Button>
          </div>
        </CardContent>
      )}
    </Card>
  )
}