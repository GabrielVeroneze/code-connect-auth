import { Author } from '@/types/Author'
import { Comment } from '@/types/Comment'

export interface Post {
    id: number
    cover: string
    title: string
    slug: string
    body: string
    markdown: string
    author: Author
    comments: Comment[]
    likes: number
}
