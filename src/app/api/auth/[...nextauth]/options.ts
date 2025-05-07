import { AuthOptions } from 'next-auth'
import { PrismaAdapter } from '@auth/prisma-adapter'
import GitHubProvider from 'next-auth/providers/github'
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
