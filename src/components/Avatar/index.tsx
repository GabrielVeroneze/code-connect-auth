import { Author } from '@/types/Author'
import Image from 'next/image'
import styles from './Avatar.module.css'

interface AvatarProps {
    author?: Author
}

export const Avatar = ({ author }: AvatarProps) => {
    const imgSrc = author?.avatar ?? author?.image

    return (
        <Image
            className={styles.imagem}
            src={imgSrc ?? '/images/default-avatar.png'}
            alt={`Avatar do(a) ${author?.name}`}
            height={32}
            width={32}
        />
    )
}
