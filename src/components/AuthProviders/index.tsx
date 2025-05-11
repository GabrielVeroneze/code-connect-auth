import { TextDivider } from '@/components/TextDivider'
import styles from './AuthProviders.module.css'

interface AuthProvidersProps {
    children: React.ReactNode
}

export const AuthProviders = ({ children }: AuthProvidersProps) => {
    return (
        <div className={styles.container}>
            <TextDivider>ou entre com outras contas</TextDivider>
            <ul className={styles.lista}>{children}</ul>
        </div>
    )
}
