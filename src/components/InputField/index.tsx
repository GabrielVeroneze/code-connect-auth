import { InputHTMLAttributes } from 'react'
import styles from './InputField.module.css'

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string
}

export const InputField = ({ label, ...inputProps }: InputFieldProps) => {
    return (
        <div className={styles.container}>
            <label className={styles.label} htmlFor={label}>
                {label}
            </label>
            <input className={styles.input} id={label} {...inputProps} />
        </div>
    )
}
