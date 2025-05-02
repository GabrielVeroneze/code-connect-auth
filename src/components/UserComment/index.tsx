import { Comment } from '@/types/Comment'
import Image from 'next/image'
import styles from './UserComment.module.css'

interface UserCommentProps {
    comment: Comment
    tema?: 'claro' | 'escuro'
}

export const UserComment = ({ comment, tema = 'escuro' }: UserCommentProps) => {
    return (
        <div className={styles.container}>
            <Image
                className={styles.imagem}
                src={comment.author?.avatar ?? '/images/default-avatar.png'}
                alt={`Avatar do(a) ${comment.author?.name}`}
                height={32}
                width={32}
            />
            <strong className={`${styles.nome} ${styles[tema]}`}>
                @{comment.author?.name}
            </strong>
            <p className={`${styles.texto} ${styles[tema]}`}>
                {comment.text}
            </p>
        </div>
    )
}
