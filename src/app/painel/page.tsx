'use client'

import { Button } from '@/components/ui/button'
import { useSession } from '@/lib/auth-client'
import { useRouter } from 'next/navigation'
import { Suspense, useEffect } from 'react'
import { authClient } from '@/lib/auth-client'
import Image from 'next/image'
import { ProfileSection } from '@/components/dashboard/profile_section'
import { CreditSection } from '@/components/dashboard/credit_section'
import { Spinner } from '@/components/ui/spinner'
import { StatsGrid } from '@/components/dashboard/stats_grid'
import { ProductsSection } from '@/components/dashboard/products_section'
import { ContactsSection } from '@/components/dashboard/contacts_section'
import { ShortcutsSection } from '@/components/dashboard/shortcuts_section'
import { TicketsSection } from '@/components/dashboard/tickets_section'
import { NewsSection } from '@/components/dashboard/news_sections'


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
        <>
            <div className="min-h-screen">
                <header className='top-0 sticky z-10 flex items-center justify-around h-20 border-b border-gray-700 bg-gray-950'>

                    <Image src={'/logo.png'} alt={'Logo da Renovo'} height={75} width={75} />

                    <h1 className='text-xl font-bold text-orange-600'>Área do Cliente</h1>

                    <Button className='text-black bg-red-400 hover:bg-red-500 font-bold' onClick={async () => {
                        await signOut()
                        router.push('/login')
                    }}>Sair</Button>
                </header>

                <div className="container mx-auto px-4 py-6 max-w-5xl">
                    <div className="space-y-4">
                        {/* Credit & Profile */}
                        <Suspense fallback={<div><Spinner /></div>}>
                            <CreditSection />
                            <ProfileSection />
                        </Suspense>

                        <StatsGrid />

                        <ProductsSection />

                        <div className="grid gap-4 md:grid-cols-2">
                            <TicketsSection />
                            <NewsSection />
                        </div>

                        <ContactsSection />
                        <ShortcutsSection />
                    </div>
                </div>
            </div>
        </>
    )
}