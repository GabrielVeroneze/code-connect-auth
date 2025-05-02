import { useFormStatus } from 'react-dom'
import { Spinner } from '@/components/Spinner'
import styles from './SubmitButton.module.css'

interface SubmitButtonProps {
    children: string
}

export const SubmitButton = ({ children }: SubmitButtonProps) => {
    const { pending } = useFormStatus()

    return (
        <button className={styles.botao} type="submit">
            {pending ? (
                <Spinner />
            ) : (
                <p className={styles.texto}>{children}</p>
            )}
        </button>
    )
}
