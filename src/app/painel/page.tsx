'use client'

import { Button } from '@/components/ui/button'
import { useSession } from '@/lib/auth-client'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { authClient } from '@/lib/auth-client'

export default function PainelPage() {
    const session = useSession()
    const router = useRouter()
    const { signOut } = authClient

    useEffect(() => {
        if (!session) {
            router.push('/login')
        }
    }, [session.data, router])

    if (!session.data) {
        return null
    }
    return (
        <section className="h-150 flex items-center justify-center flex-col text-center px-4">
            Olá, {session.data.user.name}
            <Button onClick={async () => {
                await signOut()
                router.push('/login')
            }}>Sair da conta</Button>
        </section>
    )
}