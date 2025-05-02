import { Author } from '@/types/Author'
import { Post } from '@/types/Post'

export interface Comment {
    id: number
    text: string
    author?: Author
    post?: Post
    parent?: Comment | null
    children?: Comment[]
    postId?: number
    parentId?: number | null
}
