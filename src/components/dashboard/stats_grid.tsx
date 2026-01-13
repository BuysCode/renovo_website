import { Card, CardContent } from "@/components/ui/card"
import { Package, FileText, MessageSquare, CreditCard } from "lucide-react"

const stats = [
  {
    label: "SERVIÇOS",
    value: "0",
    icon: Package,
    color: "text-blue-400",
    bgColor: "bg-blue-500/10",
  },
  {
    label: "ORÇAMENTOS",
    value: "0",
    icon: FileText,
    color: "text-gray-400",
    bgColor: "bg-gray-500/10",
  },
  {
    label: "TICKETS",
    value: "0",
    icon: MessageSquare,
    color: "text-red-400",
    bgColor: "bg-red-500/10",
  },
  {
    label: "FATURAS",
    value: "0",
    icon: CreditCard,
    color: "text-yellow-400",
    bgColor: "bg-yellow-500/10",
  },
]

export function StatsGrid() {
  return (
    <div className="grid gap-4 grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => {
        const Icon = stat.icon
        return (
          <Card key={stat.label} className="border-white/10 bg-zinc-900/50 backdrop-blur-sm shadow-sm">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-2xl sm:text-3xl font-bold text-white">{stat.value}</p>
                  <p className="text-xs text-gray-400 mt-1 font-medium">{stat.label}</p>
                </div>
                <div className={`${stat.bgColor} p-2 sm:p-3 rounded-lg`}>
                  <Icon className={`h-5 w-5 sm:h-6 sm:w-6 ${stat.color}`} />
                </div>
              </div>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
