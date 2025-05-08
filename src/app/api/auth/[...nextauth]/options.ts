import { AuthOptions } from 'next-auth'
import { PrismaAdapter } from '@auth/prisma-adapter'
import GitHubProvider from 'next-auth/providers/github'
import Credentials from 'next-auth/providers/credentials'
import db from 'prisma/db'

if (!process.env.GITHUB_ID || !process.env.GITHUB_SECRET) {
    throw new Error('GITHUB_ID e GITHUB_SECRET devem estar definidos nas variáveis de ambiente.')
}

export const options: AuthOptions = {
    adapter: PrismaAdapter(db),
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        }),
        Credentials({
            credentials: {
                email: {
                    label: 'E-mail',
                    type: 'email',
                    placeholder: 'Digite seu e-mail!',
                },
                password: {
                    label: 'Senha',
                    type: 'password',
                    placeholder: 'Digite sua senha!',
                },
            },
        }),
    ],
    callbacks: {
        async session({ session, user }) {
            if (session?.user) {
                session.user.id = Number(user.id)
            }

            return session
        },
    },
}
