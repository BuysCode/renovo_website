import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { PrismaClient } from '../generated/prisma/client'
import { PrismaPg } from '@prisma/adapter-pg'

export const prisma = new PrismaClient({
    adapter: new PrismaPg({
        connectionString: process.env.DATABASE_URL!
    })
})

export const auth = betterAuth({
    database: prismaAdapter(prisma, {
        provider: "postgresql"
    }),
    secret: process.env.BETTER_AUTH_SECRET!,
    baseUrl: process.env.BETTER_AUTH_URL!,
    session: {
        expiresIn: 60 * 60 * 24 * 30 // 30 days
    },
    emailAndPassword: {
        enabled: true
    },
    user: {
        additionalFields: {
            cpf: {
                type: "string",
                input: true
            },
            cpfShowable: {
                type: "string",
                input: true
            },
            telefone: {
                type: "string",
                input: true
            },
            telefoneShowable: {
                type: "string",
                input: true
            }
        }
    }
});

export type Session = typeof auth.$Infer.Session
export type User = typeof auth.$Infer.Session.user