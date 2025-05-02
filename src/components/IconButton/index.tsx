import { ButtonHTMLAttributes } from 'react'
import Image from 'next/image'
import styles from './IconButton.module.css'

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    icon: string
    alt: string
}

export const IconButton = ({ icon, alt, ...rest }: IconButtonProps) => {
    return (
        <button className={styles.botao} {...rest}>
            <Image src={icon} alt={alt} height={24} width={24} />
        </button>
    )
}
