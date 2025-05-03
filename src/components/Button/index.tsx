import Link from 'next/link'
import styles from './Button.module.css'

interface ButtonProps {
    children: React.ReactNode
    variant?: 'filled' | 'outlined' | 'outlinedLarge'
    href?: string
}

export const Button = ({ children, variant = 'filled', href }: ButtonProps) => {
    if (href) {
        return (
            <Link href={href} className={`${styles.botao} ${styles[variant]}`}>
                {children}
            </Link>
        )
    }

    return (
        <button className={`${styles.botao} ${styles[variant]}`}>
            {children}
        </button>
    )
}
