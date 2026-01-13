"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import { toast } from "sonner"
import * as z from "zod"
import { authClient } from "@/lib/auth-client"
import { useRouter } from 'next/navigation'

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import Link from "next/link"

const formSchema = z.object({
  email: z
    .string()
    .email("Digite um e-mail válido."),
  password: z
    .string()
    .min(6, "A senha deve ter no mínimo 6 caracteres."),
})

export function LoginForm() {
  const { push } = useRouter()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  const emailLogin = authClient.signIn.email

  async function onSubmit(data: z.infer<typeof formSchema>) {
    toast.success("Formulário enviado com sucesso!")
    await emailLogin({
      email: data.email,
      password: data.password
    })

    push("/painel")
  }

  return (
    <Card className="w-full sm:max-w-md mt-4 border-gray-500">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Entrar</CardTitle>
        <CardDescription className="text-gray-500">
          Acesse sua conta informando seus dados abaixo.
        </CardDescription>
      </CardHeader>

      <CardContent>
        <form id="login-form" onSubmit={form.handleSubmit(onSubmit)}>
          <FieldGroup>
            <Controller
              name="email"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="login-email">
                    E-mail
                  </FieldLabel>
                  <Input
                    {...field}
                    id="login-email"
                    type="email"
                    placeholder="seu@email.com"
                    autoComplete="email"
                    aria-invalid={fieldState.invalid}
                    className="border-gray-500"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Controller
              name="password"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="login-password">
                    Senha
                  </FieldLabel>
                  <Input
                    {...field}
                    id="login-password"
                    type="password"
                    placeholder="••••••••"
                    autoComplete="current-password"
                    aria-invalid={fieldState.invalid}
                    className="border-gray-500"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
          </FieldGroup>
        </form>
      </CardContent>

      <CardFooter className="flex flex-col space-y-4">
        <Field orientation="horizontal">
          <Button className="bg-linear-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-xs sm:text-sm px-2 text-black sm:px-4 font-bold w-full" type="submit" form="login-form">
            Entrar
          </Button>
        </Field>
        <span>Não possui uma conta?{" "}<Link href={'/signup'} className="hover:text-orange-600 hover:underline">Cadastre-se</Link></span>
      </CardFooter>
    </Card>
  )
}
