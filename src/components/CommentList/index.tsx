import { UserComment } from '@/components/UserComment'
import { ModalReply } from '@/components/ModalReply'
import { Replies } from '@/components/Replies'
import { Comment } from '@/types/Comment'
import styles from './CommentList.module.css'

interface CommentListProps {
    comments: Comment[]
}

export const CommentList = ({ comments }: CommentListProps) => {
    return (
        <section className={styles.secao}>
            <h2 className={styles.titulo}>Comentários</h2>
            <ul className={styles.lista}>
                {comments.map(comment => (
                    <li className={styles.item} key={comment.id}>
                        <UserComment comment={comment} />
                        <ModalReply comment={comment} />
                        <Replies comment={comment} />
                    </li>
                ))}
            </ul>
        </section>
    )
}
