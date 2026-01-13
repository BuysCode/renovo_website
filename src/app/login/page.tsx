import Image from 'next/image'
import { LoginForm } from './_components/login-form'

export default function LoginPage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <Image
                src={"/logo.png"}
                alt={"Logo da Renovo"}
                width={75}
                height={75}
            />
            <div className='flex flex-col text-center'>
                <h1 className='text-xl font-bold'>Área do Cliente</h1>
                <p className='text-gray-500'>Entre com suas credenciais</p>
            </div>
            <LoginForm />
        </div>
    )
}