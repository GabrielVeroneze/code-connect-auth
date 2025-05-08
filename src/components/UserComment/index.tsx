import { Avatar } from '@/components/Avatar'
import { Comment } from '@/types/Comment'
import styles from './UserComment.module.css'

interface UserCommentProps {
    comment: Comment
    tema?: 'claro' | 'escuro'
}

export const UserComment = ({ comment, tema = 'escuro' }: UserCommentProps) => {
    return (
        <div className={styles.container}>
            <Avatar author={comment?.author} />
            <strong className={`${styles.nome} ${styles[tema]}`}>
                @{comment.author?.name}
            </strong>
            <p className={`${styles.texto} ${styles[tema]}`}>
                {comment.text}
            </p>
        </div>
    )
}
