import styles from './TextDivider.module.css'

interface TextDividerProps {
    children: string
}

export const TextDivider = ({ children }: TextDividerProps) => {
    return (
        <div className={styles.divisor}>{children}</div>
    )
}
