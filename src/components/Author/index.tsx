import { Avatar } from '@/components/Avatar'
import { Author as AuthorType } from '@/types/Author'
import styles from './Author.module.css'

interface AuthorProps {
    author: AuthorType
}

export const Author = ({ author }: AuthorProps) => {
    return (
        <div className={styles.container}>
            <Avatar author={author} />
            <span className={styles.nome}>
                @{author.name}
            </span>
        </div>
    )
}
