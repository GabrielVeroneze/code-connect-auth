import { AuthOptions } from 'next-auth'
import GitHubProvider from 'next-auth/providers/github'

if (!process.env.GITHUB_ID || !process.env.GITHUB_SECRET) {
    throw new Error('GITHUB_ID e GITHUB_SECRET devem estar definidos nas variáveis de ambiente.')
}

export const options: AuthOptions = {
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        }),
    ],
}
