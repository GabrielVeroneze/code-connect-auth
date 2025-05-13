import NextAuth from 'next-auth'
import { Author } from '@/types/Author'

declare module 'next-auth' {
    interface Session {
        user: Author
    }
}
