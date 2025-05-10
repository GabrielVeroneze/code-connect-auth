import styles from './layout.module.css'

interface AuthLayoutProps {
    children: React.ReactNode
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
    return (
        <main className={styles.principal}>
            <section className={styles.secao}>{children}</section>
        </main>
    )
}

export default AuthLayout
