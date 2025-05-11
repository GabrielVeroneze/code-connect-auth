import Link from 'next/link'
import styles from './AuthFooter.module.css'

interface AuthFooterProps {
    variante: 'cadastro' | 'login'
    texto: string
    textoLink: string
    link: string
}

export const AuthFooter = ({ variante, texto, textoLink, link }: AuthFooterProps) => {
    return (
        <footer className={styles.rodape}>
            <p className={styles.texto}>{texto}</p>
            <Link className={`${styles.link} ${styles[variante]}`} href={link}>
                {textoLink}
            </Link>
        </footer>
    )
}
