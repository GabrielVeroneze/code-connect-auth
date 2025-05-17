import type { Metadata } from 'next'
import { Prompt } from 'next/font/google'
import { AuthProvider } from '@/components/AuthProvider'
import '@/styles/reset.css'
import '@/styles/globals.css'

const prompt = Prompt({
    weight: ['400', '600'],
    subsets: ['latin'],
    display: 'swap',
})

export const metadata: Metadata = {
    title: 'Code Connect',
    description: 'Uma rede social para devs!',
}

interface RootLayoutProps {
    children: React.ReactNode
}

const RootLayout = ({ children }: RootLayoutProps) => {
    return (
        <html lang="pt-br" className={prompt.className}>
            <body>
                <AuthProvider>{children}</AuthProvider>
            </body>
        </html>
    )
}

export default RootLayout
