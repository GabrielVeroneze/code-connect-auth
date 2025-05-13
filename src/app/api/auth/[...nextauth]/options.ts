import { AuthOptions } from 'next-auth'
import { PrismaAdapter } from '@auth/prisma-adapter'
import GitHubProvider from 'next-auth/providers/github'
import Credentials from 'next-auth/providers/credentials'
import db from '../../../../../prisma/db'
import bcrypt from 'bcryptjs'

if (!process.env.GITHUB_ID || !process.env.GITHUB_SECRET) {
    throw new Error('GITHUB_ID e GITHUB_SECRET devem estar definidos nas variáveis de ambiente.')
}

export const options: AuthOptions = {
    adapter: PrismaAdapter(db),
    session: {
        strategy: 'jwt',
        maxAge: 3000,
    },
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
            async authorize(credentials) {
                try {
                    const foundUser = await db.user.findFirst({
                        where: {
                            email: credentials?.email,
                        },
                    })

                    if (foundUser && credentials && foundUser.password) {
                        const passMatch = bcrypt.compareSync(
                            credentials.password,
                            foundUser.password
                        )

                        if (passMatch) {
                            const { password, ...safeUser } = foundUser

                            const user = {
                                ...safeUser,
                                id: safeUser.id.toString(),
                            }

                            return user
                        }
                    }
                } catch (error) {
                    console.log('Erro ao autorizar um usuário:', error)
                }

                return null
            },
        }),
    ],
    callbacks: {
        async session({ session, token }) {
            if (session?.user && token?.sub) {
                session.user.id = parseInt(token.sub)
            }

            return session
        },
    },
}
