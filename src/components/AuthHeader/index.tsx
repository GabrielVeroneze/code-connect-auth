import styles from './AuthHeader.module.css'

interface AuthHeaderProps {
    titulo: string
    subtitulo: string
}

export const AuthHeader = ({ titulo, subtitulo }: AuthHeaderProps) => {
    return (
        <header className={styles.cabecalho}>
            <h1 className={styles.titulo}>{titulo}</h1>
            <h2 className={styles.subtitulo}>{subtitulo}</h2>
        </header>
    )
}
