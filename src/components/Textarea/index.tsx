import { TextareaHTMLAttributes } from 'react'
import styles from './Textarea.module.css'

export const Textarea = (props: TextareaHTMLAttributes<HTMLTextAreaElement>) => {
    return (
        <textarea
            className={styles.textarea}
            {...props}
        ></textarea>
    )
}
