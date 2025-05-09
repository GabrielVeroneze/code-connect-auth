import { InputHTMLAttributes } from 'react'
import styles from './CheckboxField.module.css'

interface CheckboxFieldProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string
}

export const CheckboxField = ({ label, ...inputProps }: CheckboxFieldProps) => {
    return (
        <label className={styles.label}>
            <input className={styles.input} type="checkbox" {...inputProps} />
            <span className={styles.checkmark}></span>
            {label}
        </label>
    )
}
